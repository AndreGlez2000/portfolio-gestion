# Portafolio de Evidencias — Gestión e Innovación

Portafolio académico de **André González** para la materia *Gestión e Innovación*, desarrollado con React + Vite + Tailwind CSS y desplegado en GitHub Pages.

**[→ Ver sitio en vivo](https://andreglez2000.github.io/portfolio-gestion/)**

---

## Ficha académica

| Campo | Detalle |
|-------|---------|
| Alumno | André González |
| Carrera | Ingeniería en Software |
| Materia | Gestión e Innovación |
| Profesor | Rosas Murillo Jorge Abdon |
| Institución | UABC — Facultad de Ciencias Químicas e Ingeniería |
| Semestre | 2026-1 |

---

## Contenido

### Unidad 1 — Propiedad Intelectual y Transferencia de Conocimiento
- Práctica 1 (Borrador) — Propiedad Intelectual y Derechos de Autor
- Práctica 1 (Entrega Formal) — Reporte institucional
- Cuestionario IMPI / INDAUTOR
- NeoAutor — Gestión digital de derechos de autor
- Práctica 2 — Transferencia de Conocimiento Científico-Industrial
- Ensayo — Transferencia de Tecnología

### Unidad 2 — Estrategia, Protección e Impacto Tecnológico
- Práctica 3 — Portafolio de Evidencias (trabajo en equipo)
- Práctica 4 — CimaBites (caso de estudio aplicado)
- Práctica 5 — Impacto de la Evolución Tecnológica en Ing. de Software
- Ensayo — IA, Nearshoring y Futuro del Software en México

### Prácticas Finales — IA Generativa e Industria del Software
- Ensayo — DeepSeek vs Claude (comparativa de LLMs)
- Práctica 8 — Industria del Software en México
- Práctica 9 — Tabla Comparativa de Empresas de Software en Baja California

---

## Stack técnico

- **React 19** + **Vite 8**
- **Tailwind CSS v4** (plugin `@tailwindcss/vite`)
- **Fira Code** + **Space Grotesk** (Google Fonts)
- Deploy: **GitHub Pages** via `gh-pages`

---

## Correr localmente

```bash
# Clonar
git clone https://github.com/AndreGlez2000/portfolio-gestion.git
cd portfolio-gestion

# Instalar dependencias
npm install

# Dev server
npm run dev
```

El sitio corre en `http://localhost:5173/`

---

## Deploy

```bash
npm run deploy
```

Esto buildea el proyecto y publica la rama `gh-pages` automáticamente.

---

## Estructura del proyecto

```
portfolio/
├── public/
│   └── pdfs/              # Los 13 documentos PDF
├── src/
│   ├── components/
│   │   ├── Nav.jsx        # Navbar sticky con estética de terminal
│   │   ├── Hero.jsx       # Sección hero — ventana de terminal animada
│   │   ├── StatsBar.jsx   # Barra de estadísticas (09 prácticas / 03 unidades...)
│   │   ├── EvidenceSection.jsx  # Grid de cards por unidad
│   │   ├── PdfModal.jsx   # Visor de PDFs en modal iframe
│   │   └── Footer.jsx
│   ├── data/
│   │   └── evidence.js    # Datos de las 13 evidencias organizadas por unidad
│   ├── App.jsx
│   └── index.css          # Sistema de diseño (variables CSS + clases base)
├── vite.config.js
└── package.json
```
