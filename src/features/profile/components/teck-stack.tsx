import Image from "next/image";
import React from "react";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

const SIMPLEICON_SLUG: Record<string, string> = {
  typescript: "typescript",
  js: "javascript",
  python: "python",
  php: "php",
  java: "openjdk",
  nodejs: "nodedotjs",
  bun: "bun",
  react: "react",
  nextjs2: "nextdotjs",
  tailwindcss: "tailwindcss",
  "shadcn-ui": "shadcnui",
  radixui: "radixui",
  motion: "framer",
  "mobx-state-tree": "mobxstatetree",
  redux: "redux",
  antd: "antdesign",
  "react-router": "reactrouter",
  laravel: "laravel",
  git: "git",
  docker: "docker",
  mysql: "mysql",
  mongodb: "mongodb",
  redis: "redis",
  figma: "figma",
};

const LOCAL_ICONS: Record<
  string,
  { src: string } | { light: string; dark: string }
> = {
  ps: { src: "/icons/photoshop.svg" },
  chatgpt: { light: "/icons/chatgpt-light.svg", dark: "/icons/chatgpt-dark.svg" },
};

const iconUrl = (slug: string, color?: string) =>
  `https://cdn.simpleicons.org/${slug}${color ? `/${color}` : ""}`;

export function TeckStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <ul className="flex flex-wrap gap-4 select-none">
          {TECH_STACK.map((tech) => {
            const local = LOCAL_ICONS[tech.key];
            const slug = SIMPLEICON_SLUG[tech.key];
            if (!local && !slug) return null;

            const lightSrc = local
              ? "light" in local
                ? local.light
                : local.src
              : iconUrl(slug, tech.theme ? "000000" : undefined);
            const darkSrc = local
              ? "dark" in local
                ? local.dark
                : local.src
              : iconUrl(slug, tech.theme ? "ffffff" : undefined);
            const isThemed = tech.theme || (local && "light" in local);

            return (
              <li key={tech.key} className="flex">
                <SimpleTooltip content={tech.title}>
                  <a
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tech.title}
                  >
                    {isThemed ? (
                      <>
                        <Image
                          src={lightSrc}
                          alt={`${tech.title} icon`}
                          width={32}
                          height={32}
                          className="hidden [html.light_&]:block"
                          unoptimized
                        />
                        <Image
                          src={darkSrc}
                          alt={`${tech.title} icon`}
                          width={32}
                          height={32}
                          className="hidden [html.dark_&]:block"
                          unoptimized
                        />
                      </>
                    ) : (
                      <Image
                        src={lightSrc}
                        alt={`${tech.title} icon`}
                        width={32}
                        height={32}
                        unoptimized
                      />
                    )}
                    <span className="sr-only">{tech.title}</span>
                  </a>
                </SimpleTooltip>
              </li>
            );
          })}
        </ul>
      </PanelContent>
    </Panel>
  );
}
