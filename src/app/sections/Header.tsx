import { Music } from "lucide-react";
import { CrossIcon } from "../components/icons/CrossIcon";
import { MenuIcon } from "../components/icons/MenuIcon";
import { NAV_LINKS, NAV_CTA } from "@/constants/navigation";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/90 backdrop-blur-md border-b border-brand-gold/20">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Custom minimal cross + music logo */}
          <div className="relative flex items-center justify-center w-8 h-10 text-brand-gold">
            <CrossIcon className="absolute" />
            <Music className="w-4 h-4 absolute bottom-1 right-[-4px]" />
          </div>
          <span className="font-sans font-bold tracking-widest text-white text-sm">MC<span className="text-brand-gold">26</span></span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 font-sans text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-white hover:text-brand-gold transition-colors">
              {link.label}
            </a>
          ))}
          <a href={NAV_CTA.href} className="text-brand-gold border border-brand-gold px-4 py-2 rounded-full hover:bg-brand-gold hover:text-brand-dark transition-all">
            {NAV_CTA.label}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-brand-gold">
          <MenuIcon />
        </div>
      </div>
    </header>
  );
}
