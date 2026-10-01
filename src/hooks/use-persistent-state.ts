import { useEffect, useState } from "react";

export function usePersistentState(key: string, initial: boolean) {
  const [value, setValue] = useState(initial);
  useEffect(() => {
    const stored = window.localStorage.getItem(key);
    if (stored !== null) setValue(stored === "true");
  }, [key]);
  const update = (next: boolean) => {
    setValue(next);
    window.localStorage.setItem(key, String(next));
  };
  return [value, update] as const;
}