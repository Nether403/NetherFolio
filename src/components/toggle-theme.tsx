"use client";

import { MoonStarIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useCallback } from "react";

import { useIsClient } from "@/hooks/use-is-client";
import { useMetaColor } from "@/hooks/use-meta-color";
import soundManager from "@/lib/sound-manager";

import { Button } from "./ui/button";

export function ToggleTheme() {
  const { resolvedTheme, setTheme } = useTheme();
  const isClient = useIsClient();

  useMetaColor();

  const switchTheme = useCallback(() => {
    soundManager.playClick();
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  if (!isClient) {
    return (
      <div className="flex h-8 items-center gap-1 rounded-full border border-edge px-1" />
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        if (!document.startViewTransition) switchTheme();
        document.startViewTransition(switchTheme);
      }}
    >
      <MoonStarIcon className="hidden [html.dark_&]:block" />
      <SunIcon className="hidden [html.light_&]:block" />
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
}