import { Instagram, Facebook, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-12 relative z-20 border-t border-[#D4AF37]/10">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        
        {/* Lema */}
        <h4 className="font-['Montserrat'] font-bold text-[#D4AF37] text-sm md:text-base tracking-[0.3em] mb-6">
          ALABAMOS • SERVIMOS • UNIDOS EN SU AMOR
        </h4>

        {/* Pequeña cruz central */}
        <div className="text-[#D4AF37]/60 mb-8">
          <svg width="16" height="24" viewBox="0 0 24 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 2v32M4 12h16" />
          </svg>
        </div>

        {/* Social Icons & Contact */}
        <div className="flex items-center gap-6 mb-6">
          <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
            {/* TikTok Icon using custom SVG or Music as fallback */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
            </svg>
          </a>
        </div>

        {/* Contact Link */}
        <a href="mailto:contacto@masterclass.com" className="flex items-center gap-2 text-gray-500 hover:text-[#D4AF37] font-['Montserrat'] text-xs transition-colors">
          <Mail size={14} />
          <span>contacto@masterclass.com</span>
        </a>

        <div className="mt-12 text-gray-700 font-['Montserrat'] text-[10px]">
          &copy; 2026 Master Class Formación para Músicos. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
