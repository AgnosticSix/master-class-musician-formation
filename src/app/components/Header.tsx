import { Music } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#060b0d]/90 backdrop-blur-md border-b border-[#D4AF37]/20">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Custom minimal cross + music logo */}
          <div className="relative flex items-center justify-center w-8 h-10 text-[#D4AF37]">
            <svg width="20" height="28" viewBox="0 0 24 36" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" className="absolute">
              <path d="M12 2V34M4 12H20" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <Music className="w-4 h-4 absolute bottom-1 right-[-4px]" />
          </div>
          <span className="font-['Montserrat'] font-bold tracking-widest text-white text-sm">MC<span className="text-[#D4AF37]">26</span></span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 font-['Montserrat'] text-sm font-medium">
          <a href="#hero" className="text-white hover:text-[#D4AF37] transition-colors">Inicio</a>
          <a href="#detalles" className="text-white hover:text-[#D4AF37] transition-colors">Detalles</a>
          <a href="#instructor" className="text-white hover:text-[#D4AF37] transition-colors">Instructor</a>
          <a href="#inscripcion" className="text-[#D4AF37] border border-[#D4AF37] px-4 py-2 rounded-full hover:bg-[#D4AF37] hover:text-[#060b0d] transition-all">Inscripción</a>
        </nav>

        {/* Mobile Menu Button - Optional, keeping minimal for now */}
        <div className="md:hidden text-[#D4AF37]">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </div>
      </div>
    </header>
  );
}
