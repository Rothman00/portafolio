"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ExternalIcon, GitHubIcon } from "./Icons";
import { Section } from "./Section";
import { Tag } from "./Tag";

const ALL = "Todos";
const categories = [ALL, ...new Set(projects.map((p) => p.category))];

export function Projects() {
  const [filter, setFilter] = useState(ALL);
  const visible = filter === ALL ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section id="proyectos" eyebrow="03. Proyectos" title="Cosas que he construido">
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            aria-pressed={filter === cat}
            className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
              filter === cat ? "text-background" : "text-muted hover:text-white"
            }`}
          >
            {filter === cat && (
              <motion.span
                layoutId="project-filter"
                className="absolute inset-0 -z-10 rounded-full bg-accent"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {cat}
          </button>
        ))}
      </div>

      <motion.ul layout className="grid gap-6 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.li
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -6 }}
              className={`group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50 ${
                project.featured ? "sm:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  {project.featured && (
                    <p className="mb-1 font-mono text-xs text-accent">Proyecto destacado</p>
                  )}
                  <h3 className="text-xl font-semibold text-white group-hover:text-accent">
                    {project.title}
                  </h3>
                </div>
              </div>
              {project.role && <p className="mt-1 text-sm text-zinc-400">{project.role}</p>}
              <p className="mt-3 text-muted">{project.description}</p>
              {project.highlights && (
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-zinc-300">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="text-accent">▹</span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex-1" />
              {project.tech && project.tech.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              )}
              {project.links && project.links.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-white transition-colors hover:border-accent hover:text-accent"
                    >
                      {link.label.toLowerCase() === "github" ? (
                        <GitHubIcon className="h-4 w-4" />
                      ) : (
                        <ExternalIcon className="h-4 w-4" />
                      )}
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </Section>
  );
}
