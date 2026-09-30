"use client";

import { motion } from "framer-motion";
import { profile, socials } from "@/data/portfolio";
import { SocialIcon } from "./Icons";
import { ProfilePhoto } from "./ProfilePhoto";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-svh items-center overflow-hidden">
      {/* Fondo decorativo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid w-full grid-cols-1 max-w-5xl items-center gap-12 px-4 pt-24 pb-16 sm:px-6 md:grid-cols-[1fr_auto]"
      >
        <motion.div variants={item} className="py-6 md:order-last md:pl-8">
          <ProfilePhoto />
        </motion.div>

        <div className="min-w-0">
          {profile.available && (
            <motion.p
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-sm text-muted"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Disponible para nuevos proyectos
            </motion.p>
          )}

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Hola, soy <span className="text-accent">{profile.shortName}</span>
          </motion.h1>

          <motion.p variants={item} className="mt-4 text-2xl font-medium text-zinc-300 sm:text-3xl">
            {profile.role}
          </motion.p>

          <motion.p variants={item} className="mt-2 font-mono text-sm text-accent">
            {profile.headline}
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#proyectos"
              className="rounded-full bg-accent px-6 py-3 font-medium text-background transition-transform hover:scale-105"
            >
              Ver proyectos
            </a>
            {profile.cv ? (
              <a
                href={profile.cv}
                download
                className="rounded-full border border-border px-6 py-3 font-medium text-white transition-colors hover:bg-card"
              >
                Descargar CV
              </a>
            ) : (
              <a
                href="#contacto"
                className="rounded-full border border-border px-6 py-3 font-medium text-white transition-colors hover:bg-card"
              >
                Contactar
              </a>
            )}
            <div className="flex items-center gap-2 sm:ml-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="rounded-full p-2 text-muted transition-colors hover:text-accent"
                >
                  <SocialIcon icon={s.icon} className="h-6 w-6" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
