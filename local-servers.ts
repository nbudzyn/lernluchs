import { loadEnv } from "vite";

function port(env: Record<string, string>, name: string, fallback: number) {
  const value = env[name];
  if (value === undefined) return fallback;
  const number = Number(value);
  if (!/^\d+$/.test(value) || number < 1 || number > 65535) {
    throw new Error(`${name} muss eine ganze Portnummer von 1 bis 65535 sein.`);
  }
  return number;
}

export function localServers(mode = "development") {
  const env = loadEnv(mode, "", "LERNLUCHS_");
  const devPort = port(env, "LERNLUCHS_DEV_PORT", 5173);
  const e2ePort = port(env, "LERNLUCHS_E2E_PORT", 4173);
  if (devPort === e2ePort) {
    throw new Error(
      "LERNLUCHS_DEV_PORT und LERNLUCHS_E2E_PORT müssen verschieden sein.",
    );
  }
  return { devPort, e2ePort, e2eOrigin: `http://127.0.0.1:${e2ePort}` };
}
