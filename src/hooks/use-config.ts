"use client";

import { useCallback, useEffect, useState } from "react";

export type PackageManager = "pnpm" | "yarn" | "npm" | "bun";
export type InstallationType = "cli" | "manual";

type Config = {
  packageManager: PackageManager;
  installationType: InstallationType;
};

const STORAGE_KEY = "mvd.config";

const DEFAULT_CONFIG: Config = {
  packageManager: "pnpm",
  installationType: "cli",
};

function readConfig(): Config {
  if (typeof window === "undefined") return DEFAULT_CONFIG;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_CONFIG;
    return { ...DEFAULT_CONFIG, ...(JSON.parse(raw) as Partial<Config>) };
  } catch {
    return DEFAULT_CONFIG;
  }
}

export function useConfig(): [Config, (next: Config | ((prev: Config) => Config)) => void] {
  const [config, setConfigState] = useState<Config>(DEFAULT_CONFIG);

  useEffect(() => {
    setConfigState(readConfig());
  }, []);

  const setConfig = useCallback(
    (next: Config | ((prev: Config) => Config)) => {
      setConfigState((prev) => {
        const value = typeof next === "function" ? (next as (p: Config) => Config)(prev) : next;
        if (typeof window !== "undefined") {
          try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
          } catch {
            /* ignore quota / privacy-mode errors */
          }
        }
        return value;
      });
    },
    []
  );

  return [config, setConfig];
}
