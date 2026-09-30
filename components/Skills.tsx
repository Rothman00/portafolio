import { skills } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="habilidades" eyebrow="04. Habilidades" title="Mi caja de herramientas">
      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.1}>
            <div className="h-full rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-border px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:border-accent hover:text-accent"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
