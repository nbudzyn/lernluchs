import { cleanup, renderHook } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";

import { useBrowserBack } from "../../../src/verticals/topics/useBrowserBack";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  vi.useRealTimers();
});

it("finishes the wide popstate before traversing to the previous website", () => {
  vi.useFakeTimers();
  vi.stubGlobal(
    "matchMedia",
    vi.fn(() => ({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  );
  const push = vi
    .spyOn(window.history, "pushState")
    .mockImplementation(() => {});
  const back = vi.spyOn(window.history, "back").mockImplementation(() => {});
  const onBack = vi.fn();
  const { rerender } = renderHook(
    ({ detailOpen }) => useBrowserBack(detailOpen, onBack),
    { initialProps: { detailOpen: false } },
  );
  rerender({ detailOpen: true });
  expect(push).toHaveBeenCalledTimes(1);
  window.dispatchEvent(new PopStateEvent("popstate", { state: null }));
  expect(back).not.toHaveBeenCalled();
  expect(onBack).not.toHaveBeenCalled();
  vi.runAllTimers();
  expect(back).toHaveBeenCalledTimes(1);
});

it("does not recreate the detail entry while wide Back is leaving the app", () => {
  vi.useFakeTimers();
  let narrow = true;
  vi.stubGlobal(
    "matchMedia",
    vi.fn(() => ({
      get matches() {
        return narrow;
      },
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  );
  const push = vi
    .spyOn(window.history, "pushState")
    .mockImplementation(() => {});
  // Keep the asynchronous navigation pending while the visible topic state
  // catches up with the wide layout, as after returning from a narrow list.
  const back = vi.spyOn(window.history, "back").mockImplementation(() => {});
  const { rerender } = renderHook(
    ({ detailOpen }) => useBrowserBack(detailOpen, () => {}),
    { initialProps: { detailOpen: true } },
  );

  narrow = false;
  window.dispatchEvent(new PopStateEvent("popstate", { state: null }));
  rerender({ detailOpen: false });
  rerender({ detailOpen: true });

  expect(push).toHaveBeenCalledTimes(1);
  vi.runAllTimers();
  expect(back).toHaveBeenCalledTimes(1);
  window.dispatchEvent(
    new PageTransitionEvent("pageshow", { persisted: true }),
  );
  narrow = true;
  rerender({ detailOpen: false });
  rerender({ detailOpen: true });
  expect(push).toHaveBeenCalledTimes(2);
});
