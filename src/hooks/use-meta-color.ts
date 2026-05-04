
"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

import { META_THEME_COLORS } from "@/config/site";

export function useMetaColor() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      const color = resolvedTheme === "dark" ? META_THEME_COLORS.dark : META_THEME_COLORS.light;
      metaThemeColor.setAttribute("content", color);
    }
  }, [resolvedTheme]);
}
