import { PORTFOLIO_LINKS } from "@/config/site";

import { Panel, PanelContent } from "./panel";

export function PortfolioLinks() {
  return (
    <Panel id="portfolios" aria-label="Other portfolios">
      <PanelContent className="flex flex-wrap items-center gap-x-3 gap-y-1 py-3 text-sm text-muted-foreground">
        <span className="font-mono text-[10px] tracking-[0.22em] text-brand/80 uppercase">
          Also
        </span>
        {PORTFOLIO_LINKS.map((link, index) => (
          <span key={link.href} className="inline-flex items-center gap-x-3">
            {index > 0 && (
              <span className="text-brand/35 select-none" aria-hidden>
                ·
              </span>
            )}
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 transition-colors hover:text-brand hover:underline"
            >
              {link.title}
            </a>
          </span>
        ))}
      </PanelContent>
    </Panel>
  );
}
