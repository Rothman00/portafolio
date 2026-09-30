import { profile } from "@/data/portfolio";
import { Expandable } from "./Expandable";
import { Reveal } from "./Reveal";
import { RichText } from "./RichText";
import { Section } from "./Section";

export function About() {
  const preview = profile.about.slice(0, profile.aboutPreview);
  const rest = profile.about.slice(profile.aboutPreview);

  return (
    <Section id="sobre-mi" eyebrow="01. Sobre mí" title="Un poco de mí">
      <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
        <div className="text-lg leading-relaxed text-muted">
          <div className="space-y-4">
            {preview.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p>
                  <RichText text={paragraph} />
                </p>
              </Reveal>
            ))}
          </div>
          {rest.length > 0 && (
            <Expandable moreLabel="Leer más" lessLabel="Leer menos">
              <div className="space-y-4 pt-4">
                {rest.map((paragraph, i) => (
                  <p key={i}>
                    <RichText text={paragraph} />
                  </p>
                ))}
              </div>
            </Expandable>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4 self-start md:grid-cols-1">
          {profile.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.15 + i * 0.1}>
              <div className="rounded-2xl border border-border bg-card p-5 text-center md:text-left">
                <p className="text-3xl font-bold text-accent">{stat.value}</p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
