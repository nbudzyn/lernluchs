import { useLayoutEffect, useRef } from "react";

const entryKey = "lernluchsBack";

function isBackEntry(state: unknown) {
  return (
    typeof state === "object" &&
    state !== null &&
    entryKey in state &&
    state[entryKey] === true
  );
}

export function useBrowserBack(
  detailOpen: boolean,
  onBack: () => void,
  alwaysEnabled = false,
) {
  const callback = useRef(onBack);
  const navigation = useRef({
    hasEntry: isBackEntry(window.history.state),
    removing: false,
    leaving: false,
  });

  useLayoutEffect(() => {
    callback.current = onBack;
  });

  useLayoutEffect(() => {
    const narrow = window.matchMedia?.("(max-width: 799px)");
    const enabled = () =>
      alwaysEnabled ||
      (detailOpen && !!window.matchMedia?.("(max-width: 799px)").matches);

    function synchronize() {
      const current = navigation.current;
      if (current.removing || current.leaving) return;
      // Keep one entry even when wide so an immediate resize cannot bypass Back.
      // The handler decides using the width at the time of the user action.
      const needsEntry = alwaysEnabled || detailOpen;
      if (needsEntry && !current.hasEntry) {
        window.history.pushState(
          { ...window.history.state, [entryKey]: true },
          "",
        );
        current.hasEntry = true;
      } else if (!needsEntry && current.hasEntry) {
        current.removing = true;
        window.history.back();
      }
    }

    function handlePopState(event: PopStateEvent) {
      const current = navigation.current;
      const hadEntry = current.hasEntry;
      current.hasEntry = isBackEntry(event.state);
      if (current.removing) {
        current.removing = false;
        synchronize();
        // Native history scroll restoration happens after popstate. Restore
        // the list again once the programmatic return has actually arrived.
        if (!detailOpen && !alwaysEnabled) callback.current();
      } else if (hadEntry && !current.hasEntry) {
        if (enabled()) callback.current();
        // A native Forward can revisit the unused entry. Back from the list
        // must still reach the preceding website with this one user action.
        else {
          // A late responsive render must not push another entry and cancel
          // the pending traversal to the preceding document.
          current.leaving = true;
          // Finish this traversal before requesting the preceding document.
          // popstate runs before native scroll and document restoration end.
          window.setTimeout(() => {
            if (navigation.current.leaving) window.history.back();
          }, 0);
        }
      }
    }

    function handlePageShow() {
      // A document restored from the back-forward cache can handle Back again.
      // This only resets navigation bookkeeping; Forward keeps its native view.
      navigation.current.leaving = false;
      navigation.current.hasEntry = isBackEntry(window.history.state);
    }

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("pageshow", handlePageShow);
    narrow?.addEventListener("change", synchronize);
    synchronize();
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("pageshow", handlePageShow);
      narrow?.removeEventListener("change", synchronize);
    };
  }, [detailOpen, alwaysEnabled]);
}
