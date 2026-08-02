"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function RotatingText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="relative inline-flex h-[1.4em] min-w-[1ch] items-center overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "60%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-60%", opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="gradient-text inline-block whitespace-nowrap font-display font-semibold"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
