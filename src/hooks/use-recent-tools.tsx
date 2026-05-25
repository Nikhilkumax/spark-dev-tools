import { useEffect, useState, useCallback } from "react";

const STORAGE_KEY = "devtools-recent";
const MAX = 12;

function read(): string[] {
  if (typeof localStorage === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function write(list: string[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    window.dispatchEvent(new Event("devtools-recent-changed"));
  } catch {}
}

export function useRecentTools() {
  const [recent, setRecent] = useState<string[]>([]);

  useEffect(() => {
    setRecent(read());
    const sync = () => setRecent(read());
    window.addEventListener("devtools-recent-changed", sync);
    return () => window.removeEventListener("devtools-recent-changed", sync);
  }, []);

  const push = useCallback((id: string) => {
    const current = read().filter((x) => x !== id);
    const next = [id, ...current].slice(0, MAX);
    write(next);
    setRecent(next);
  }, []);

  const clear = useCallback(() => {
    write([]);
    setRecent([]);
  }, []);

  return { recent, push, clear };
}
