import { useEffect } from "react";

const useKeydown = (
  codes: string[] = [],
  callback?: (code: string) => void
) => {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (codes.includes(event.code)) {
        callback?.(event.code);
      }
    };

    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [...codes, callback]);
};

export default useKeydown;
