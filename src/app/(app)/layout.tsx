import dynamic from "next/dynamic";

import { FrostShell } from "@/components/frost-shell";
import { SiteHeader } from "@/components/site-header";

const ScrollTop = dynamic(() =>
  import("@/components/scroll-top").then((mod) => mod.ScrollTop)
);

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      {/* overflow-x-clip (not hidden): overflow-x-hidden forces overflow-y:auto
          and creates a nested vertical scrollbar that steals wheel scroll. */}
      <main className="max-w-screen overflow-x-clip px-2">
        <FrostShell>{children}</FrostShell>
      </main>
      <ScrollTop />
    </>
  );
}
