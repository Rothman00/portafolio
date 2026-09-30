import { experience } from "@/data/portfolio";
import { Expandable } from "./Expandable";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { Tag } from "./Tag";

const VISIBLE_RESPONSIBILITIES = 5;

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-zinc-300">
          <span className="mt-0.5 text-accent">▹</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Experience() {
  return (
    <Section id="experiencia" eyebrow="02. Experiencia" title="Dónde he trabajado">
      <ol className="relative space-y-16 border-l border-border pl-8">
        {experience.map((job) => {
          const visible = job.responsibilities.slice(0, VISIBLE_RESPONSIBILITIES);
          const hidden = job.responsibilities.slice(VISIBLE_RESPONSIBILITIES);

          return (
            <li key={`${job.company}-${job.period}`} className="relative">
              <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
              <Reveal>
                <p className="font-mono text-sm text-accent">{job.period}</p>
                <h3 className="mt-1 text-xl font-semibold text-white">{job.company}</h3>
                <p className="text-zinc-300">{job.role}</p>
                {job.location && <p className="text-sm text-muted">{job.location}</p>}
                <p className="mt-3 text-muted">{job.description}</p>

                <h4 className="mt-6 text-sm font-semibold uppercase tracking-wider text-white">
                  Responsabilidades
                </h4>
                <div className="mt-3">
                  <Bullets items={visible} />
                  {hidden.length > 0 && (
                    <Expandable moreLabel={`Ver las ${job.responsibilities.length} responsabilidades`}>
                      <div className="pt-2">
                        <Bullets items={hidden} />
                      </div>
                    </Expandable>
                  )}
                </div>

                {job.tech.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                )}
              </Reveal>

              {job.highlights && (
                <>
                  <Reveal>
                    <h4 className="mt-8 text-sm font-semibold uppercase tracking-wider text-white">
                      Proyectos y logros destacados
                    </h4>
                  </Reveal>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    {job.highlights.map((h, i) => (
                      <Reveal
                        key={h.title}
                        delay={Math.min(i * 0.06, 0.3)}
                        className={h.chips ? "md:col-span-2" : ""}
                      >
                        <div className="h-full rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent/50">
                          <h5 className="font-semibold text-white">{h.title}</h5>
                          {h.description && (
                            <p className="mt-2 text-sm leading-relaxed text-muted">{h.description}</p>
                          )}
                          {h.chips && (
                            <ul className="mt-4 flex flex-wrap gap-2">
                              {h.chips.map((c) => (
                                <li
                                  key={c}
                                  className="rounded-lg border border-border px-3 py-1 text-sm text-zinc-300"
                                >
                                  {c}
                                </li>
                              ))}
                            </ul>
                          )}
                          {h.items && (
                            <ul className="mt-3 space-y-1.5 text-sm text-muted">
                              {h.items.map((item) => (
                                <li key={item} className="flex gap-2">
                                  <span className="text-accent">▹</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
