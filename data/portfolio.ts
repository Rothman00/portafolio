// ─────────────────────────────────────────────────────────────
//  Todo el contenido del portafolio vive aquí.
//  Edita este archivo con tu información; los componentes
//  se actualizan solos.
// ─────────────────────────────────────────────────────────────

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "web" | "whatsapp";
};

export type ExperienceHighlight = {
  title: string;
  description?: string;
  chips?: string[];
  items?: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  responsibilities: string[];
  highlights?: ExperienceHighlight[];
  tech: string[];
};

export type ProjectLink = {
  label: string; // ej. "Google Play", "Sitio web", "GitHub"
  href: string;
};

export type Project = {
  title: string;
  description: string;
  category: string; // se usa para los filtros
  role?: string; // tu participación en el proyecto
  tech?: string[];
  highlights?: string[];
  links?: ProjectLink[];
  featured?: boolean;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type Education = {
  institution: string;
  degree: string;
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  hours?: number;
  url?: string; // enlace de verificación
  highlight?: boolean;
};

export const profile = {
  name: "Rothman Torres Melo",
  shortName: "Rothman",
  role: "Software Engineer & Technical Lead",
  headline: "Full-Stack Development · Systems Architecture · Integration",
  tagline:
    "Ingeniero de Sistemas que diseña, desarrolla e integra soluciones empresariales: aplicaciones web y móviles, APIs, bases de datos e infraestructura.",
  location: "Ibarra, Ecuador",
  email: "rothman33r@gmail.com",
  whatsapp: {
    number: "593963686442", // formato internacional, sin "+" ni espacios
    message: "Hola Rothman, vi tu portafolio y me gustaría conversar contigo.",
  },
  photo: "/profile.png",
  available: true,
  cv: "", // ej. "/cv.pdf" (colócalo en /public)
  // Los primeros `aboutPreview` párrafos se muestran siempre; el resto con "Leer más".
  // Usa **texto** para resaltar.
  aboutPreview: 2,
  about: [
    "Soy Ingeniero de Sistemas y Software Engineer con experiencia integral en el diseño, desarrollo, integración, implementación y evolución de soluciones tecnológicas. He participado y liderado proyectos desde su concepción hasta su puesta en producción, combinando desarrollo de software, arquitectura de sistemas, bases de datos, automatización, infraestructura y gestión técnica.",
    "Mi experiencia abarca aplicaciones web y servicios, integración de APIs REST y SOAP, sistemas empresariales, facturación electrónica, integraciones con servicios gubernamentales y automatización de procesos, con soluciones orientadas a la escalabilidad, seguridad y rendimiento. Selecciono las herramientas según las necesidades reales del proyecto y no únicamente por tendencia tecnológica.",
    "También cuento con experiencia en administración y optimización de bases de datos, especialmente PostgreSQL y SQL Server: diseño, tuning, respaldos, recuperación y optimización de consultas. He trabajado con Linux, Docker, CI/CD, Redis y PgBouncer, además de prácticas de control de versiones y despliegue.",
    "A nivel metodológico aplico gestión de proyectos TIC, Scrum, PMBOK, historias de usuario y control de versiones con Git, participando tanto en la definición técnica como en la planificación, implementación, soporte y mejora continua de los sistemas.",
    "Me considero un profesional orientado a resolver problemas complejos de forma práctica, optimizar procesos y convertir necesidades de negocio en soluciones mantenibles y escalables. Además del desarrollo, brindo soporte, documento soluciones, capacito equipos y lidero técnicamente proyectos y desarrolladores.",
    "Mi enfoque combina **visión de negocio, capacidad técnica y ejecución**, lo que me permite participar en prácticamente todo el ciclo de vida de una solución: desde el análisis y la arquitectura, pasando por el desarrollo e integración, hasta la infraestructura, el despliegue, el soporte y la evolución del producto.",
  ],
  stats: [
    { value: "6+", label: "Años de experiencia" },
    { value: "4", label: "Productos en producción" },
    { value: "230+", label: "Horas de formación certificada" },
  ],
};

export function whatsappUrl() {
  const { number, message } = profile.whatsapp;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const socials: SocialLink[] = [
  // Agrega aquí tus perfiles cuando los tengas, por ejemplo:
  // { label: "LinkedIn", href: "https://linkedin.com/in/tu-usuario", icon: "linkedin" },
  { label: "WhatsApp", href: whatsappUrl(), icon: "whatsapp" },
  { label: "GitHub", href: "https://github.com/Rothman00", icon: "github" },
  { label: "Correo", href: `mailto:${profile.email}`, icon: "mail" },
  {
    label: "Microsoft Learn",
    href: "https://learn.microsoft.com/en-us/users/rothmantorresmelo-9241/",
    icon: "web",
  },
];

export const experience: Experience[] = [
  {
    company: "DebiSoft C.A.",
    role: "Ingeniero de Sistemas · Software Engineer & Technical Lead",
    period: "Ene 2023 — Actualidad",
    location: "Ibarra, Ecuador",
    description:
      "Empresa dedicada al desarrollo de soluciones empresariales para gestión contable, tributaria, administrativa y operativa.",
    responsibilities: [
      "Análisis de requerimientos, diseño de soluciones y planificación técnica de proyectos de software.",
      "Diseño, desarrollo e integración de APIs y servicios REST / SOAP, incluyendo integraciones con plataformas gubernamentales.",
      "Diseño, administración y optimización de bases de datos PostgreSQL y SQL: consultas complejas, funciones, procedimientos almacenados y procesos transaccionales.",
      "Participación en la definición de arquitectura, flujo de datos e integración entre diferentes módulos y servicios.",
      "Gestión y seguimiento técnico de proyectos desde el análisis hasta la implementación y soporte.",
      "Desarrollo y evolución de aplicaciones web y móviles orientadas a procesos empresariales.",
      "Desarrollo y mantenimiento de sistemas con PHP, CodeIgniter, JavaScript, TypeScript, .NET/C#, Flutter/Dart, entre otras tecnologías.",
      "Optimización de procesos y consultas para mejorar rendimiento, tiempos de respuesta y eficiencia operativa.",
      "Implementación y mantenimiento de servicios en ambientes Linux, con herramientas de infraestructura, automatización y control de versiones.",
      "Participación en despliegues, soporte, diagnóstico y resolución de incidentes en desarrollo y producción.",
      "Integración de servicios externos y automatización de procesos empresariales.",
      "Documentación técnica y funcional de proyectos y procesos.",
      "Capacitación y acompañamiento técnico a desarrolladores y pasantes.",
    ],
    highlights: [
      {
        title: "DebiConta Plus — ERP empresarial",
        description:
          "Desarrollo, evolución y optimización de un ERP sobre CodeIgniter 4, PHP y PostgreSQL: controladores, modelos, servicios, librerías, APIs, procedimientos almacenados y procesos transaccionales.",
        chips: [
          "Contabilidad",
          "Facturación electrónica",
          "Inventarios y Kardex",
          "Compras y ventas",
          "Tesorería y caja",
          "Nómina",
          "Activos",
          "Procesos administrativos",
        ],
      },
      {
        title: "Integración con el SRI",
        items: [
          "Servicios de facturación electrónica.",
          "Automatización de emisión, consulta y descarga de comprobantes electrónicos.",
          "Integración de servicios gubernamentales mediante APIs y servicios web.",
          "Procesos que reducen la intervención manual en operaciones tributarias.",
        ],
      },
      {
        title: "Integraciones y automatización",
        items: [
          "API de WhatsApp para notificación y envío de documentos.",
          "Automatización de procesos administrativos y operativos.",
          "Integración entre módulos internos y servicios externos.",
          "Servicios de comunicación entre diferentes plataformas.",
        ],
      },
      {
        title: "Aplicaciones móviles",
        items: [
          "DEBIFACT: app móvil vinculada a procesos de facturación.",
          "Juntas de Agua (SIJAP): app en Flutter/Dart para procesos del sector.",
          "Diseño, desarrollo e integración de apps móviles con servicios backend.",
        ],
      },
      {
        title: "Otros sistemas",
        items: [
          "Sistema web de gestión académica.",
          "Servicios de consulta ciudadana.",
          "Soluciones empresariales personalizadas.",
          "Impresión y comunicación con dispositivos locales / POS.",
        ],
      },
    ],
    tech: ["PHP", "CodeIgniter 4", "PostgreSQL", "JavaScript", "TypeScript", ".NET / C#", "Flutter", "Linux", "REST / SOAP"],
  },
  {
    company: "Kauel Ecuador S.A.",
    role: "Software Developer · Full-Stack Developer",
    period: "Abr 2020 — Ago 2023",
    location: "Ecuador",
    description:
      "Empresa orientada al desarrollo de soluciones tecnológicas y aplicaciones empresariales.",
    responsibilities: [
      "Levantamiento y análisis de requerimientos con usuarios y áreas involucradas.",
      "Diseño técnico de soluciones para aplicaciones web y móviles.",
      "Desarrollo Full-Stack de aplicaciones desde cero.",
      "Desarrollo de interfaces, lógica de negocio, servicios backend y comunicación con APIs.",
      "Desarrollo de aplicaciones móviles orientadas a procesos comerciales y operativos.",
      "Integración de servicios y manejo de información entre aplicaciones.",
      "Pruebas funcionales, corrección de errores y validación de requerimientos.",
      "Soporte técnico y mantenimiento evolutivo de aplicaciones.",
      "Participación en la implementación y puesta en funcionamiento de soluciones.",
    ],
    highlights: [
      {
        title: "Administración de asesores comerciales",
        items: [
          "Plataforma web para gestión y seguimiento de asesores comerciales.",
          "Control y administración de información comercial.",
          "Desarrollo de procesos backend y frontend.",
        ],
      },
      {
        title: "Documentos de transporte de carga",
        items: [
          "App móvil para digitalizar y registrar documentos de transporte.",
          "Formularios y captura de información en campo.",
          "Integración con backend para almacenamiento y procesamiento.",
        ],
      },
      {
        title: "Catálogo y promociones",
        items: [
          "App móvil de catálogo de productos.",
          "Funcionalidades de promociones y contenido comercial.",
          "Integración de información con servicios backend.",
        ],
      },
    ],
    tech: [], // agrega aquí las tecnologías que usaste en Kauel
  },
];

export const projects: Project[] = [
  {
    title: "DebicontaPlus ERP",
    description:
      "ERP empresarial con módulos de contabilidad, facturación electrónica, inventarios y Kardex, compras y ventas, tesorería, nómina y activos. Integrado con el SRI y con notificaciones por WhatsApp.",
    category: "Web",
    role: "Desarrollo, evolución y optimización · DebiSoft",
    tech: ["PHP", "CodeIgniter 4", "PostgreSQL", "JavaScript", "APIs REST / SOAP"],
    highlights: [
      "Facturación electrónica integrada con el SRI",
      "Envío de documentos por WhatsApp",
      "Multiempresa y multiestablecimiento",
    ],
    links: [{ label: "Sitio web", href: "https://debicontaplus.debisoft.ec/debiconta/" }],
    featured: true,
  },
  {
    title: "DebicontaPlus Móvil",
    description:
      "App del ecosistema DebicontaPlus para emitir comprobantes electrónicos desde cualquier lugar, sincronizada en tiempo real con el sistema web.",
    category: "Móvil",
    role: "Participación en el desarrollo · DebiSoft",
    tech: ["Flutter", "Dart", "APIs REST"],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.debisoft.debicontaplus",
      },
    ],
  },
  {
    title: "Debifact",
    description:
      "App de facturación electrónica para Ecuador que complementa DEBIFACT Web, permitiendo facturar desde el celular. Más de 500 descargas.",
    category: "Móvil",
    role: "Diseño, desarrollo e integración · DebiSoft",
    tech: ["Flutter", "Dart", "APIs REST"],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.debisoft.debifact",
      },
    ],
  },
  {
    title: "SIJAP",
    description:
      "App para Juntas de Agua: toma de lecturas de medidores de agua potable en campo, integrada con el sistema web SIJAP.",
    category: "Móvil",
    role: "Diseño, desarrollo e integración · DebiSoft",
    tech: ["Flutter", "Dart", "APIs REST"],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.debisoft.sijap",
      },
    ],
  },
  {
    title: "Gestión de asesores comerciales",
    description:
      "Plataforma web para la gestión, seguimiento y control de asesores e información comercial.",
    category: "Web",
    role: "Desarrollo Full-Stack · Kauel Ecuador",
  },
  {
    title: "Registro de documentos de transporte",
    description:
      "App móvil para digitalizar y registrar documentos de transporte de carga, con captura de información en campo.",
    category: "Móvil",
    role: "Desarrollo móvil · Kauel Ecuador",
  },
  {
    title: "Catálogo y promociones",
    description: "App móvil de catálogo de productos con promociones y contenido comercial.",
    category: "Móvil",
    role: "Desarrollo móvil · Kauel Ecuador",
  },
];

export const skills: SkillGroup[] = [
  { title: "Lenguajes", skills: ["PHP", "JavaScript", "TypeScript", "Python", "C#", "Java", "Dart"] },
  {
    title: "Frameworks y librerías",
    skills: ["CodeIgniter", "Laravel", "Symfony", "NestJS", "Node.js", "React", "Next.js", "Angular", "Vue", "Flutter", "FastAPI", "Spring Boot", ".NET"],
  },
  {
    title: "Bases de datos",
    skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Firebase", "SQLite", "Redis", "PgBouncer", "Tuning", "Backups"],
  },
  { title: "Infraestructura", skills: ["Linux", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Nginx", "AWS", "Azure", "Git"] },
  { title: "Integración", skills: ["REST", "SOAP", "WebSockets", "OAuth / OIDC", "Sockets", "n8n"] },
  { title: "Gestión", skills: ["Scrum", "PMBOK", "Git Flow", "Historias de usuario", "Gestión de proyectos TIC"] },
];

export const education: Education[] = [
  {
    institution: "Pontificia Universidad Católica del Ecuador — Sede Ibarra",
    degree: "Ingeniero en Sistemas",
  },
  {
    institution: "U. E. Mariano Suárez Veintimilla",
    degree: "Bachillerato Técnico en Aplicaciones Informáticas",
  },
];

export const certifications: Certification[] = [
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "Abr 2023",
    url: "https://learn.microsoft.com/en-us/users/rothmantorresmelo-9241/certifications/azure-fundamentals",
    highlight: true,
  },
  { title: "DevOps TOTAL: Docker, Kubernetes, Jenkins, AWS, Git", issuer: "Udemy", date: "2026", hours: 34, url: "https://ude.my/UC-728aba3e-eb71-4fe9-945d-731e0a59188c" },
  { title: "n8n + MCP: Automatización y agentes de IA", issuer: "Udemy · DevTalles", date: "2026", hours: 18, url: "https://ude.my/UC-2e96cebe-70cd-4f0f-9350-52572f981982" },
  { title: "React PRO: Lleva tus bases al siguiente nivel", issuer: "Udemy · DevTalles", date: "2026", hours: 25, url: "https://ude.my/UC-cefca3e7-52d2-4024-b339-bbdbed9bf6a0" },
  { title: "Hacking Ético: Pentesting en Android Avanzado", issuer: "Udemy", date: "2026", hours: 14.5, url: "https://ude.my/UC-13422f4a-338d-4555-be7f-f3a6653da2a0" },
  { title: "Flutter + Gemini: Apps con inteligencia artificial", issuer: "Udemy · DevTalles", date: "2026", hours: 8.5, url: "https://ude.my/UC-eeeaba7f-f75e-4553-b393-057da4249fe3" },
  { title: "Flutter Avanzado", issuer: "Udemy", date: "2023", hours: 35, url: "https://ude.my/UC-58c75051-6326-49cd-a6df-60fd89809892" },
  { title: "Master en Frameworks JavaScript: Angular, React, Vue", issuer: "Udemy", date: "2023", hours: 28, url: "https://ude.my/UC-0cb3618a-2fd3-4921-89c3-e5f7d7694df6" },
  { title: "Flutter Web: Aplicaciones y páginas web profesionales", issuer: "Udemy", date: "2023", hours: 20.5, url: "https://ude.my/UC-732575fe-c2fa-46bf-9419-685b95bdf822" },
  { title: "Software Testing desde cero: MasterClass", issuer: "Udemy", date: "2023", hours: 9, url: "https://ude.my/UC-3e8ae401-769b-4c7b-aa4e-ec2f152a6217" },
  { title: "Preparación AZ-900 Azure Fundamentals", issuer: "Udemy", date: "2023", hours: 8, url: "https://ude.my/UC-871442cb-f007-459c-a544-68f3c6743e1f" },
  { title: "Diseño Web con HTML5 + CSS", issuer: "Fundación Telefónica · Ministerio del Trabajo", date: "2022", hours: 30 },
];

export const navLinks = [
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "experiencia", label: "Experiencia" },
  { id: "proyectos", label: "Proyectos" },
  { id: "habilidades", label: "Habilidades" },
  { id: "formacion", label: "Formación" },
  { id: "contacto", label: "Contacto" },
];
