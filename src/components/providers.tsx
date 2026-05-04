"use client";

import { AppProgressProvider } from "@bprogress/next";
import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";

import { useMetaColor } from "@/hooks/use-meta-color";

const Toaster = dynamic(
  () => import("@/components/ui/sonner").then((mod) => mod.Toaster),
  { ssr: false }
);

function ThemeWatcher() {
  useMetaColor();
  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem
      disableTransitionOnChange
      enableColorScheme
      storageKey="theme"
      defaultTheme="system"
      attribute="class"
    >
      <ThemeWatcher />
      <AppProgressProvider
        color="var(--foreground)"
        height="2px"
        delay={500}
        options={{ showSpinner: false }}
      >
        {children}
      </AppProgressProvider>

      <Toaster />
    </ThemeProvider>
  );
}
