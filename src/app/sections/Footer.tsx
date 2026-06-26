import { Instagram, Facebook, Mail } from "lucide-react";
import { CrossIcon } from "../components/icons/CrossIcon";
import { TikTokIcon } from "../components/icons/TikTokIcon";
import { EVENT_DATA } from "@/constants/event-data";
import { SOCIAL_LINKS } from "@/constants/navigation";

/** Mapa de nombre de icono a componente React */
const ICON_MAP = {
  instagram: Instagram,
  facebook: Facebook,
  tiktok: TikTokIcon,
} as const;

export function Footer() {
  return (
    <footer className="bg-black py-12 relative z-20 border-t border-brand-gold/10">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        
        {/* Lema */}
        <h4 className="font-sans font-bold text-brand-gold text-sm md:text-base tracking-[0.3em] mb-6">
          {EVENT_DATA.motto}
        </h4>

        {/* Cruz central decorativa */}
        <div className="text-brand-gold/60 mb-8">
          <CrossIcon width={16} height={24} />
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6 mb-6">
          {SOCIAL_LINKS.map((social) => {
            const IconComponent = ICON_MAP[social.icon];
            return (
              <a key={social.label} href={social.href} className="text-gray-400 hover:text-brand-gold transition-colors" aria-label={social.label}>
                <IconComponent size={20} />
              </a>
            );
          })}
        </div>

        {/* Contact Link */}
        <a href={`mailto:${EVENT_DATA.email}`} className="flex items-center gap-2 text-gray-500 hover:text-brand-gold font-sans text-xs transition-colors">
          <Mail size={14} />
          <span>{EVENT_DATA.email}</span>
        </a>

        <div className="mt-12 text-gray-700 font-sans text-[10px]">
          &copy; {EVENT_DATA.year} Master Class Formación para Músicos. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
