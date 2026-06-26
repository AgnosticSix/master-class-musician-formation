# Guidelines — Master Class Musician Formation

> Reglas técnicas de arquitectura y diseño para el proyecto.  
> Última actualización: Junio 2026.

---

## 1. Arquitectura del Proyecto

### 1.1 Estructura de Directorios

```
src/
├── main.tsx                    # Entry point (StrictMode + render)
├── constants/                  # Datos del evento y configuración
│   ├── event-data.ts           # Textos, URLs, fechas del evento
│   └── navigation.ts           # Links de navegación y redes sociales
├── styles/                     # Estilos globales y design tokens
│   ├── index.css               # Punto de entrada CSS (importa todo)
│   ├── fonts.css               # Google Fonts
│   ├── tailwind.css            # Tailwind CSS v4 config
│   └── theme.css               # Design tokens (colores, fuentes, radii)
└── app/
    ├── App.tsx                 # RouterProvider wrapper
    ├── routes.tsx              # Configuración del router (solo rutas)
    ├── layouts/                # Composición de página completa
    │   └── RootLayout.tsx      # Header + Sections + Footer
    ├── sections/               # Secciones de página (no reutilizables)
    │   ├── Header.tsx
    │   ├── Hero.tsx
    │   ├── DetailsGrid.tsx
    │   ├── MoreInfo.tsx
    │   ├── Instructor.tsx
    │   ├── RegistrationForm.tsx
    │   └── Footer.tsx
    └── components/             # Componentes compartidos reutilizables
        ├── DetailCard.tsx      # Card genérica de detalle
        ├── icons/              # SVGs custom como componentes React
        │   ├── CrossIcon.tsx
        │   ├── TrebleClefSvg.tsx
        │   ├── TikTokIcon.tsx
        │   └── MenuIcon.tsx
        └── figma/              # Helpers generados por Figma Make
            └── ImageWithFallback.tsx
```

### 1.2 Reglas de Organización

| Carpeta | Propósito | Regla |
|---|---|---|
| `constants/` | Datos y configuración | Todo texto, URL o valor que pueda cambiar va aquí. **Nunca hardcodear contenido en JSX.** |
| `sections/` | Secciones de la landing page | Un archivo por sección visual. No son reutilizables entre páginas. |
| `components/` | Componentes reutilizables | Solo componentes usados en 2+ lugares. Props tipadas con interfaces. |
| `components/icons/` | Iconos SVG custom | Un componente por icono. Aceptan `className` y `size` como props. |
| `layouts/` | Composición de página | Importan secciones y las organizan. No contienen lógica de negocio. |
| `styles/` | CSS global + tokens | Nunca escribir estilos inline en componentes que no sean Tailwind utilities. |

### 1.3 Principios de Arquitectura

1. **Single Responsibility**: Cada archivo hace exactamente una cosa.
   - `routes.tsx` → solo configuración de rutas.
   - `RootLayout.tsx` → solo composición visual.
   - `event-data.ts` → solo datos del evento.

2. **No Magic Values**: Colores, fuentes y valores repetidos van en **design tokens** (ver sección 2). Usar clases semánticas de Tailwind (`bg-brand-dark`) en vez de valores arbitrarios (`bg-[#060b0d]`).

3. **DRY (Don't Repeat Yourself)**: Si un patrón visual se repite 2+ veces, extraer a un componente. Ejemplo: `DetailCard` extraído de 4 cards idénticas en DetailsGrid.

4. **Separation of Concerns**:
   - Datos → `constants/`
   - Presentación → `sections/` y `components/`
   - Routing → `routes.tsx`
   - Layout → `layouts/`
   - Estilos → `styles/` y Tailwind classes

5. **Clean Imports**: Usar el alias `@/` para imports absolutos desde `src/`. Ejemplo:
   ```tsx
   import { EVENT_DATA } from "@/constants/event-data";
   ```

---

## 2. Design System — Design Tokens

### 2.1 Paleta de Colores

Todos los colores del brand están centralizados en `src/styles/theme.css` como CSS custom properties y registrados en Tailwind v4 `@theme inline`.

| Token | Hex | Uso | Clase Tailwind |
|---|---|---|---|
| `--brand-dark` | `#060b0d` | Fondo principal de toda la página | `bg-brand-dark` |
| `--brand-dark-alt` | `#081012` | Fondo alternativo (sección Instructor) | `bg-brand-dark-alt` |
| `--brand-surface` | `#0a1114` | Fondo de cards y contenedores | `bg-brand-surface` |
| `--brand-gold` | `#D4AF37` | Acento principal, bordes, texto destacado | `text-brand-gold` |
| `--brand-gold-dark` | `#B8962E` | Gradiente del CTA (extremo oscuro) | `to-brand-gold-dark` |
| `--brand-gold-light` | `#E5C158` | Hover del CTA (extremo claro) | `from-brand-gold-light` |

**Regla**: NUNCA usar valores hex directos en las clases de Tailwind. Siempre usar los tokens semánticos.

```tsx
// ❌ MAL
<div className="bg-[#060b0d] text-[#D4AF37]">

// ✅ BIEN
<div className="bg-brand-dark text-brand-gold">
```

### 2.2 Tipografía

| Token | Fuente | Uso | Clase Tailwind |
|---|---|---|---|
| `--font-family-sans` | Montserrat | Texto de cuerpo, labels, botones, navegación | `font-sans` |
| `--font-family-display` | Anton | Títulos principales hero (display grande) | `font-display` |
| `--font-family-script` | Great Vibes | Acentos caligráficos ("Class", "Master Class") | `font-script` |

**Regla**: NUNCA usar `font-['NombreFuente']`. Siempre usar los tokens.

```tsx
// ❌ MAL
<h1 className="font-['Anton']">

// ✅ BIEN
<h1 className="font-display">
```

### 2.3 Opacidades Estándar

| Uso | Opacidad |
|---|---|
| Bordes sutiles | `/20` (e.g., `border-brand-gold/20`) |
| Bordes hover | `/30` |
| Bordes activos | `/40` |
| Glow de fondo | `/10` |
| Overlay de gradiente | `/60` a `/80` |

### 2.4 Espaciado

- **Secciones**: `py-16` a `py-24` entre secciones.
- **Contenedores**: `max-w-4xl` o `max-w-5xl` con `container mx-auto px-4`.
- **Cards**: `p-6` interno, `gap-4` entre elementos.
- **Header fijo**: `h-20` (80px), considerar `pt-20` en el contenido debajo.

### 2.5 Bordes y Radios

- **Cards**: `rounded-xl` con `border border-brand-gold/30`
- **Botones**: `rounded-full` (navegación) o `rounded-xl` (CTA principal)
- **Inputs**: `rounded-lg`
- **Contenedores grandes**: `rounded-2xl` o `rounded-3xl`

---

## 3. Reglas de Componentes

### 3.1 Secciones (`sections/`)

- Cada sección es una función exportada con nombre (`export function Hero()`).
- Cada sección renderiza un `<section>` como elemento raíz con un `id` para la navegación por anclas.
- Los datos vienen de `@/constants/event-data` — no hardcodear textos.
- Las secciones NO reciben props (son componentes de página, no reutilizables).

### 3.2 Componentes Compartidos (`components/`)

- Siempre tipar las props con una `interface`.
- Siempre exportar con nombre (no `export default`).
- Los componentes deben ser puros: mismas props → mismo output.

```tsx
interface DetailCardProps {
  icon: ReactNode;
  label: string;
  value: string;
}

export function DetailCard({ icon, label, value }: DetailCardProps) {
  // ...
}
```

### 3.3 Iconos (`components/icons/`)

- Un archivo por icono SVG.
- Props mínimas: `className`, `size` (cuando aplique), `width`/`height`.
- No usar colores hardcoded en el SVG; usar `currentColor` para heredar del padre.

---

## 4. Reglas de Estilo CSS

### 4.1 Tailwind CSS v4

- **Nunca** escribir CSS custom fuera de `styles/`. Usar Tailwind utilities.
- **Nunca** usar `@apply` en componentes React. Las utilidades van directo en el JSX.
- Preferir clases semánticas del theme sobre valores arbitrarios (`[...]`).
- Para valores únicos inevitables (como `text-[5rem]`), documentar por qué no se usa un token.

### 4.2 Responsive Design

- Enfoque **mobile-first**: las clases base son para mobile, `md:` para tablet+.
- Breakpoints usados: `md` (768px) y `lg` (1024px).
- La navegación se oculta en mobile (`hidden md:flex`) con un botón hamburguesa.

### 4.3 Animaciones y Transiciones

- Usar `transition-colors` para hover de colores.
- Usar `transition-all` para hover que involucre múltiples propiedades.
- Usar `transition-transform` para efectos de movimiento (e.g., icono Send).
- El bounce del scroll indicator usa `animate-bounce` de Tailwind.
- Para animaciones complejas, considerar reinstalar `motion` (framer-motion).

---

## 5. Reglas de Routing

- **Router**: React Router v7 con `createBrowserRouter`.
- **Configuración**: Solo en `routes.tsx`. No mezclar lógica de layout con rutas.
- **Layouts**: Los layouts se pasan como `Component` en la config del router.
- **Navegación interna**: Usar anclas (`#seccion`) para scroll suave dentro de la landing page.

---

## 6. Reglas de Build y Dependencias

### 6.1 Gestor de Paquetes

- **pnpm** obligatorio (enforced por `preinstall` script con `only-allow`).
- Comandos: `pnpm run dev`, `pnpm run build`.

### 6.2 Dependencias

- Solo instalar dependencias que se usen activamente.
- `react` y `react-dom` están como `peerDependencies` (convención Figma Make).

> ⚠️ **Pendiente de revisión**: Evaluar si mover `react`/`react-dom` a `dependencies` regulares afecta el workflow de Figma Make.

### 6.3 Build Target

- Target: `es2022` (módulos modernos).
- Vendor chunk separation: `react`, `react-dom`, `react-router` en chunk separado para mejor caché.
- Chunk size warning: 500KB.

---

## 7. Convenciones de Código

### 7.1 Naming

- **Archivos de componentes**: PascalCase (`DetailCard.tsx`, `RootLayout.tsx`).
- **Archivos de datos**: kebab-case (`event-data.ts`, `navigation.ts`).
- **Constantes**: UPPER_SNAKE_CASE (`EVENT_DATA`, `NAV_LINKS`).
- **Funciones de componente**: PascalCase (`export function Header()`).
- **Props interfaces**: PascalCase con sufijo `Props` (`DetailCardProps`).

### 7.2 Exports

- Preferir **named exports** sobre default exports.
- Excepción: `App.tsx` usa `export default` por convención.

### 7.3 TypeScript

- Tipar siempre las props de componentes con `interface`.
- Usar `as const` para objetos/arrays inmutables de configuración.
- Preferir `type` imports cuando sea posible: `import type { ReactNode } from "react"`.
