"use client";

import dynamic from "next/dynamic";
import { type ReactNode, useEffect, useState } from "react";

import { HexFloat } from "@/components/canvasui/HexFloat";
import { SiteHeader } from "@/components/site-header";

const ScrollTop = dynamic(() =>
  import("@/components/scroll-top").then((mod) => mod.ScrollTop)
);

type AppShellProps = {
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
 * Full-page HexFloat shell so header + content map onto the hex tiles.
 * Polyfill is loaded client-only (it touches DOM globals and breaks SSR).
 */
export function AppShell({ children }: AppShellProps) {
  const [hexReady, setHexReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    void import("html-in-canvas-polyfill").then(() => {
      if (!cancelled) setHexReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!hexReady) {
    return <PageChrome>{children}</PageChrome>;
  }

  return (
    <HexFloat
      className="h-svh w-full bg-background"
      size={128}
      gap={1.5}
      bevel={1.5}
      tilt={18}
      perspective={0.48}
      float={0.4}
      speed={0.9}
      shine={0.4}
      lift={0.35}
      radius={1000}
      flow={1.1}
      swirl={4}
      trail={0.5}
      iridescence={0.08}
      bloom={0}
      grain={0.18}
      gapColor={[0.08, 0.14, 0.16]}
    >
      <PageChrome>{children}</PageChrome>
    </HexFloat>
  );
}
