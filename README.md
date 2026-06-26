# Landing Page — Master Class Formación para Músicos

Landing page para una **master class de formación musical católica**. Presenta detalles del evento, información del instructor y un formulario de inscripción.

Diseño original en Figma: [Landing Page Master Class](https://www.figma.com/design/ICgoVWlMvIITqtB5huJiUH/Landing-Page-Master-Class)

---

## Stack Tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| React | 18.3 | UI framework |
| Vite | 6.3 | Bundler y dev server |
| Tailwind CSS | 4.1 | Utilidades de estilo |
| React Router | 7.13 | Routing (SPA) |
| Lucide React | 0.487 | Iconografía |
| react-hook-form | 7.55 | Manejo de formularios |
| pnpm | 11+ | Gestor de paquetes |

---

## Comandos

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm run dev

# Compilar para producción
pnpm run build
```

---

## Estructura del Proyecto

```
src/
├── main.tsx                    # Entry point (StrictMode)
├── constants/
│   ├── event-data.ts           # Textos, fechas y URLs del evento
│   └── navigation.ts           # Links de navegación y redes sociales
├── styles/
│   ├── index.css               # Punto de entrada CSS
│   ├── fonts.css               # Google Fonts (Montserrat, Anton, Great Vibes)
│   ├── tailwind.css            # Config Tailwind CSS v4
│   └── theme.css               # Design tokens (colores, fuentes, radii)
└── app/
    ├── App.tsx                 # RouterProvider
    ├── routes.tsx              # Configuración del router
    ├── layouts/
    │   └── RootLayout.tsx      # Layout principal (Header + Sections + Footer)
    ├── sections/               # Secciones de la landing page
    │   ├── Header.tsx
    │   ├── Hero.tsx
    │   ├── DetailsGrid.tsx
    │   ├── MoreInfo.tsx
    │   ├── Instructor.tsx
    │   ├── RegistrationForm.tsx
    │   └── Footer.tsx
    └── components/             # Componentes reutilizables
        ├── DetailCard.tsx
        ├── icons/              # SVGs custom como componentes React
        │   ├── CrossIcon.tsx
        │   ├── TrebleClefSvg.tsx
        │   ├── TikTokIcon.tsx
        │   └── MenuIcon.tsx
        └── figma/
            └── ImageWithFallback.tsx
```

---

## Personalización del Evento

Todos los textos, fechas, URLs e imágenes del evento están centralizados en:

- [`src/constants/event-data.ts`](src/constants/event-data.ts) — Fecha, lugar, instructor, descripción, etc.
- [`src/constants/navigation.ts`](src/constants/navigation.ts) — Links de navegación y redes sociales

No es necesario editar los componentes para actualizar el contenido del evento.

---

## Design Tokens

Los colores y fuentes del brand están definidos en [`src/styles/theme.css`](src/styles/theme.css) y disponibles como clases de Tailwind:

| Token | Clase | Valor |
|---|---|---|
| Fondo principal | `bg-brand-dark` | `#060b0d` |
| Tarjetas | `bg-brand-surface` | `#0a1114` |
| Acento dorado | `text-brand-gold` | `#D4AF37` |
| Fuente sans | `font-sans` | Montserrat |
| Fuente display | `font-display` | Anton |
| Fuente script | `font-script` | Great Vibes |

---

## Guía de Arquitectura

Ver [`guidelines/Guidelines.md`](guidelines/Guidelines.md) para reglas técnicas de arquitectura, design system y convenciones de código.