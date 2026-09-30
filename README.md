# Portafolio — Rothman Torres Melo

Portafolio personal de **Rothman Torres Melo**, Software Engineer & Technical Lead.

Construido con **Next.js**, **TypeScript**, **Tailwind CSS** y **Framer Motion**.

## Desarrollo local

```bash
npm install
npm run dev   # http://localhost:3000
```

## Editar el contenido

Todo el contenido (perfil, experiencia, proyectos, habilidades, certificaciones y contacto) está en
[`data/portfolio.ts`](data/portfolio.ts). Los componentes se actualizan automáticamente.

- Foto de perfil: `public/profile.png`
- Icono del sitio: `app/icon.svg`, `app/favicon.ico` y `app/apple-icon.png`

## Estructura

```
app/          layout, página principal, estilos e iconos
components/   secciones (Hero, About, Experience, Projects, Skills, Education, Contact…)
data/         contenido del portafolio
public/       imágenes estáticas
```

## Despliegue

Desplegado en [Vercel](https://vercel.com). Cada `git push` a `main` publica una nueva versión automáticamente.
