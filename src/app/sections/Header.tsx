import { useState } from "react";
import { X } from "lucide-react";
import { MenuIcon } from "../components/icons/MenuIcon";
import { NAV_LINKS, NAV_CTA } from "@/constants/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/90 backdrop-blur-md border-b border-brand-gold/20">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/images/MasterClass.png"
            alt="Master Class Logo"
            className="h-16 w-auto object-contain drop-shadow-md"
          />
          <span className="font-sans font-bold tracking-widest text-white text-sm">Master Class<span className="text-brand-gold"> 2026</span></span>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-sans text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-white hover:text-brand-gold transition-colors">
              {link.label}
            </a>
          ))}
          {/* TODO: Agregar cuando se tenga definido el metodo de inscripción */}
          {/* <a href={NAV_CTA.href} className="text-brand-gold border border-brand-gold px-4 py-2 rounded-full hover:bg-brand-gold hover:text-brand-dark transition-all">
            {NAV_CTA.label}
          </a> */}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brand-gold focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-brand-dark border-b border-brand-gold/20 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-6 font-sans text-lg font-medium p-8 text-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-brand-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={NAV_CTA.href}
              className="text-center text-brand-dark bg-brand-gold px-4 py-3 rounded-full hover:bg-brand-gold-light transition-all mt-4 font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              {NAV_CTA.label}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
