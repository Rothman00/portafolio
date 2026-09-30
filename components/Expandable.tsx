"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ExpandableProps = {
  children: React.ReactNode; // contenido oculto hasta expandir
  moreLabel: string;
  lessLabel?: string;
};

/** Muestra `children` con animación al pulsar "ver más". */
export function Expandable({ children, moreLabel, lessLabel = "Ver menos" }: ExpandableProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
      >
        {open ? lessLabel : moreLabel}
        <motion.svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          animate={{ rotate: open ? 180 : 0 }}
          aria-hidden
        >
          <path d="m6 9 6 6 6-6" />
        </motion.svg>
      </button>
    </>
  );
}
