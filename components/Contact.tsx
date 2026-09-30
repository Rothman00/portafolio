import { profile, socials, whatsappUrl } from "@/data/portfolio";
import { MailIcon, SocialIcon, WhatsAppIcon } from "./Icons";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contacto" className="mx-auto w-full max-w-3xl px-4 py-32 text-center sm:px-6">
      <Reveal>
        <p className="font-mono text-sm text-accent">06. Contacto</p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Trabajemos juntos
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
          ¿Tienes un proyecto o una oportunidad laboral? Escríbeme por WhatsApp o por correo y te
          responderé lo antes posible.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-medium text-background transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Escríbeme por WhatsApp
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 font-medium text-white transition-colors hover:border-accent hover:text-accent"
          >
            <MailIcon className="h-5 w-5" />
            Envíame un correo
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.15} className="mt-12 flex flex-wrap justify-center gap-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <SocialIcon icon={s.icon} className="h-4 w-4" />
            {s.label}
          </a>
        ))}
      </Reveal>
    </section>
  );
}
