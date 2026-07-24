"use client";

import type { ReactNode } from "react";

import { HexFloat } from "@/components/canvasui/HexFloat";

type HexFloatShellProps = {
  children: ReactNode;
};

/**
 * Coastal forge tuning for canvas-ui HexFloat:
 * soft teal seams, restrained iridescence/bloom, gentle float + cursor lift.
 * Falls back to plain HTML when html-in-canvas is unavailable.
 */
export function HexFloatShell({ children }: HexFloatShellProps) {
  return (
    <HexFloat
      className="h-svh w-full"
      size={148}
      gap={1}
      bevel={1.25}
      tilt={12}
      perspective={0.32}
      float={0.28}
      speed={0.85}
      shine={0.32}
      lift={0.22}
      radius={880}
      flow={0.9}
      swirl={2.5}
      trail={0.4}
      iridescence={0.12}
      bloom={0}
      grain={0.22}
      // Deep teal seam — matches coastal forge ink
      gapColor={[0.1, 0.18, 0.2]}
    >
      {children}
    </HexFloat>
  );
}
