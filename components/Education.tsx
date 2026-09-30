import { certifications, education } from "@/data/portfolio";
import { ExternalIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Education() {
  const totalHours = certifications.reduce((sum, c) => sum + (c.hours ?? 0), 0);

  return (
    <Section id="formacion" eyebrow="05. Formación" title="Educación y certificaciones">
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((edu, i) => (
          <Reveal key={edu.institution} delay={i * 0.1}>
            <div className="h-full rounded-2xl border border-border bg-card p-6">
              <p className="font-mono text-xs text-accent">Educación</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{edu.degree}</h3>
              <p className="mt-1 text-muted">{edu.institution}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-xl font-semibold text-white">Cursos y certificaciones</h3>
        <p className="font-mono text-sm text-muted">{totalHours} horas de formación</p>
      </Reveal>

      <ul className="mt-6 grid gap-3 md:grid-cols-2">
        {certifications.map((cert, i) => {
          const content = (
            <>
              <div className="min-w-0">
                <p className="font-medium text-white group-hover:text-accent">{cert.title}</p>
                <p className="mt-1 text-sm text-muted">
                  {cert.issuer} · {cert.date}
                  {cert.hours ? ` · ${cert.hours} h` : ""}
                </p>
              </div>
              {cert.url && <ExternalIcon className="mt-1 h-4 w-4 shrink-0 text-muted group-hover:text-accent" />}
            </>
          );
          const className = `group flex h-full items-start justify-between gap-4 rounded-xl border p-4 transition-colors ${
            cert.highlight
              ? "border-accent/60 bg-accent/5"
              : "border-border bg-card hover:border-accent/50"
          }`;

          return (
            <li key={cert.title} className={cert.highlight ? "md:col-span-2" : ""}>
              <Reveal delay={Math.min(i * 0.04, 0.3)} className="h-full">
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Verificar certificado"
                    className={className}
                  >
                    {content}
                  </a>
                ) : (
                  <div className={className}>{content}</div>
                )}
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
