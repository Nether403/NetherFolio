"use client";

import { motion, useReducedMotion } from "motion/react";

import { FlipSentences } from "@/components/flip-sentences";
import { Tag } from "@/components/ui/tag";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";

import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="screen-line-after relative flex border-x border-edge bg-card/70 backdrop-blur-[2px]">
      <div className="relative shrink-0 border-r border-edge">
        <div className="mx-[2px] my-[3px]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="size-32 rounded-full ring-2 ring-brand/35 ring-offset-2 ring-offset-background select-none sm:size-40"
              alt={`${USER.displayName}'s avatar`}
              src={USER.avatar}
              fetchPriority="high"
            />
          </motion.div>
        </div>

        <SimpleTooltip content="I'm from the Netherlands">
          <svg
            className="absolute top-0 -left-px h-8 sm:h-9"
            viewBox="0 0 30 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <rect width="30" height="6.67" fill="#AE1C28" />
            <rect y="6.67" width="30" height="6.67" fill="#FFFFFF" />
            <rect y="13.33" width="30" height="6.67" fill="#21468B" />
          </svg>
        </SimpleTooltip>
      </div>

      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            "flex grow items-end pb-1.5 pl-4",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-brand)]/18"
          )}
        >
          <p className="line-clamp-1 font-mono text-[10px] tracking-wider text-brand/70 uppercase select-none max-sm:hidden">
            Founder · builder · 101dev
          </p>
        </div>

        <div className="border-t border-edge">
          <motion.h1
            className="flex items-center px-4 py-1 font-display text-3xl font-bold tracking-tight sm:text-[2.15rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.28 }}
          >
            {USER.displayName}
            &nbsp;
            <SimpleTooltip content="Verified">
              <VerifiedIcon className="size-[0.55em] translate-y-px text-brand select-none" />
            </SimpleTooltip>
            {USER.namePronunciationUrl && (
              <>
                &nbsp;
                <PronounceMyName
                  className="translate-y-px"
                  namePronunciationUrl={USER.namePronunciationUrl}
                />
              </>
            )}
          </motion.h1>

          <div className="flex flex-wrap items-center gap-2 border-t border-edge px-4 py-1.5">
            <Tag className="border-brand/25 bg-brand/8 text-foreground">
              {USER.displayNameTag}
            </Tag>
            <span className="text-sm text-muted-foreground">
              {USER.jobTitle}
            </span>
          </div>

          <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
            <FlipSentences sentences={USER.flipSentences} />
          </div>
        </div>
      </div>
    </div>
  );
}
