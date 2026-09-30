"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

const badges = [
  { text: `${profile.stats[0].value} años`, sub: "de experiencia", className: "-left-16 top-0 md:-left-12 md:top-6" },
  { text: "Full-Stack", sub: "Web · Móvil", className: "-right-16 bottom-2 md:-right-10 md:bottom-10" },
];

export function ProfilePhoto() {
  return (
    <div className="relative mx-auto h-60 w-60 md:h-80 md:w-80">
      {/* Resplandor */}
      <motion.div
        className="absolute -inset-8 rounded-full bg-accent/30 blur-3xl"
        animate={{ opacity: [0.5, 0.9, 0.5], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Anillo giratorio */}
      <motion.div
        className="absolute -inset-1.5 rounded-full bg-[conic-gradient(from_0deg,var(--accent),#22d3ee,transparent_45%,transparent_60%,#22d3ee,var(--accent))]"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Foto */}
      <motion.div
        className="relative h-full w-full overflow-hidden rounded-full border-4 border-background bg-card"
        whileHover={{ scale: 1.04 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Image
          src={profile.photo}
          alt={profile.name}
          fill
          priority
          sizes="(min-width: 768px) 320px, 240px"
          className="object-cover object-[50%_28%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-accent/25 via-transparent to-transparent mix-blend-overlay" />
      </motion.div>

      {/* Etiquetas flotantes */}
      {badges.map((badge, i) => (
        <motion.div
          key={badge.text}
          className={`absolute rounded-2xl border border-border bg-card/90 px-4 py-2 shadow-lg shadow-black/40 backdrop-blur ${badge.className}`}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 1.5 }}
        >
          <p className="text-sm font-bold text-accent">{badge.text}</p>
          <p className="text-xs text-muted">{badge.sub}</p>
        </motion.div>
      ))}
    </div>
  );
}
