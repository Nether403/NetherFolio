"use client";

import { useReducedMotion } from "motion/react";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";

import { HexFloat } from "@/components/canvasui/HexFloat";
import { SiteHeader } from "@/components/site-header";

const ScrollTop = dynamic(() =>
  import("@/components/scroll-top").then((mod) => mod.ScrollTop)
);

type HexFloatShellProps = {
  children: ReactNode;
};

function PageChrome({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-full bg-background">
      <SiteHeader />
      {/* overflow-x-clip (not hidden): overflow-x-hidden forces overflow-y:auto
          and creates a nested vertical scrollbar that steals wheel scroll. */}
      <main className="max-w-screen overflow-x-clip px-2 pb-10">
        {children}
      </main>
      <ScrollTop />
    </div>
  );
}

/**
 * Full-page HexFloat with Martin’s canvasui.dev presets.
 * Relies on the HTML-in-Canvas Chrome origin trial (no polyfill).
 * Unsupported browsers fall back to plain HTML via HexFloat.
 */
export function HexFloatShell({ children }: HexFloatShellProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <PageChrome>{children}</PageChrome>;
  }

  return (
    <HexFloat
      className="h-svh w-full bg-background"
      // From https://canvasui.dev/docs/components/hex-float?...
      bevel={5.5}
      gap={2}
      shine={0.35}
      lift={0.66}
      flow={2.2}
      iridescence={0.1}
      grain={0.5}
      bloom={0.64}
    >
      <PageChrome>{children}</PageChrome>
    </HexFloat>
  );
}
