import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-4 py-24 sm:px-6">
      <Reveal>
        <p className="font-mono text-sm text-accent">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  );
}
