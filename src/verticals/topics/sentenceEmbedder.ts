import { Tokenizer } from "@huggingface/tokenizers";
import { env, InferenceSession, Tensor } from "onnxruntime-web/wasm";
import { meanPool } from "./semanticSearch";

export { env as inferenceEnvironment };

export async function createSentenceEmbedder(
  tokenizerJson: object,
  tokenizerConfig: object,
  model: Uint8Array,
) {
  const tokenizer = new Tokenizer(tokenizerJson, tokenizerConfig);
  const session = await InferenceSession.create(model, {
    executionProviders: ["wasm"],
    graphOptimizationLevel: "all",
  });
  return {
    async embed(this: void, text: string) {
      const encoded = tokenizer.encode(text);
      // E5 specifies 512 tokens. Retain the final separator.
      const ids =
        encoded.ids.length > 512
          ? [...encoded.ids.slice(0, 511), encoded.ids.at(-1)!]
          : encoded.ids;
      const mask = ids.map(() => 1);
      const inputs: Record<string, Tensor> = {
        input_ids: new Tensor("int64", BigInt64Array.from(ids, BigInt), [
          1,
          ids.length,
        ]),
        attention_mask: new Tensor("int64", BigInt64Array.from(mask, BigInt), [
          1,
          ids.length,
        ]),
      };
      if (session.inputNames.includes("token_type_ids")) {
        inputs.token_type_ids = new Tensor(
          "int64",
          new BigInt64Array(ids.length),
          [1, ids.length],
        );
      }
      let output: Record<string, Tensor> = {};
      try {
        output = await session.run(inputs);
        const hidden = output.last_hidden_state;
        const dimensions = hidden?.dims[2];
        if (!dimensions || dimensions < 1 || !Number.isInteger(dimensions))
          throw new Error("Unexpected sentence embedding output");
        return meanPool(hidden.data as Float32Array, mask, dimensions);
      } finally {
        for (const tensor of Object.values(inputs)) tensor.dispose();
        for (const tensor of Object.values(output)) tensor.dispose();
      }
    },
    dispose: () => session.release(),
  };
}
