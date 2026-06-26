/** Links de la barra de navegación principal */
export const NAV_LINKS = [
  { href: '#hero', label: 'Inicio' },
  { href: '#detalles', label: 'Detalles' },
  { href: '#instructor', label: 'Instructor' },
] as const;

/** CTA de la navegación (separado para tratamiento visual diferente) */
export const NAV_CTA = {
  href: '#inscripcion',
  label: 'Inscripción',
} as const;

/** Redes sociales — actualiza href cuando tengas las URLs reales */
export const SOCIAL_LINKS = [
  { href: '#', label: 'Instagram', icon: 'instagram' as const },
  { href: '#', label: 'Facebook', icon: 'facebook' as const },
  { href: '#', label: 'TikTok', icon: 'tiktok' as const },
] as const;
