"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

interface FlipSentencesProps {
  sentences: string[];
  interval?: number;
}

export function FlipSentences({
  sentences,
  interval = 3000,
}: FlipSentencesProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % sentences.length);
    }, interval);

    return () => clearInterval(timer);
  }, [sentences.length, interval]);

  return (
    <div className="relative h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -18, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex h-full items-center font-mono text-sm text-brand"
        >
          {sentences[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
