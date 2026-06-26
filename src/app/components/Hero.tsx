import { Clock, ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToDetails = () => {
    const detailsSection = document.getElementById('detalles');
    if (detailsSection) {
      const headerOffset = 120; // Espacio extra para que no quede pegada al header (que mide 80px)
      const elementPosition = detailsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Backgrounds */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-screen"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1080")' }}
      />
      <div 
        className="absolute inset-0 z-0 bg-cover bg-bottom opacity-50 mix-blend-overlay"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=1080")' }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#060b0d]/80 via-[#060b0d]/60 to-[#060b0d]" />

      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center mt-10 min-h-[calc(100vh-160px)] justify-center">
        
        {/* Title Group */}
        <div className="relative mb-6 mt-auto">
          <h1 className="font-['Anton'] text-[5rem] md:text-[8rem] lg:text-[10rem] leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 uppercase tracking-wider drop-shadow-2xl">
            Master
          </h1>
          <span className="absolute -bottom-4 md:-bottom-8 right-0 font-['Great_Vibes'] text-5xl md:text-8xl text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.5)] rotate-[-5deg]">
            Class
          </span>
          
          {/* Decorative Treble Clef and Staff behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20 pointer-events-none -z-10 text-[#D4AF37]">
            <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              {/* Staff lines */}
              <line x1="0" y1="60" x2="400" y2="60" stroke="currentColor" strokeWidth="1"/>
              <line x1="0" y1="80" x2="400" y2="80" stroke="currentColor" strokeWidth="1"/>
              <line x1="0" y1="100" x2="400" y2="100" stroke="currentColor" strokeWidth="1"/>
              <line x1="0" y1="120" x2="400" y2="120" stroke="currentColor" strokeWidth="1"/>
              <line x1="0" y1="140" x2="400" y2="140" stroke="currentColor" strokeWidth="1"/>
              {/* Fake large Treble Clef */}
              <path d="M180 160 C 160 160, 150 140, 160 120 C 170 100, 200 100, 210 120 C 220 140, 200 170, 180 180 C 150 190, 130 160, 150 120 C 170 80, 210 50, 200 20 C 195 5, 180 0, 170 20 C 160 40, 165 70, 180 100 L 195 140" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Subtext */}
        <h2 className="font-['Montserrat'] font-bold text-white text-xl md:text-3xl tracking-[0.2em] mb-6 mt-8">
          FORMACIÓN PARA MÚSICOS
        </h2>

        {/* Catchphrase */}
        <div className="relative py-4 px-8 md:px-16 mb-12">
           {/* Subtle glow behind catchphrase */}
           <div className="absolute inset-0 bg-[#D4AF37]/10 blur-xl rounded-full"></div>
           <h3 className="relative font-['Montserrat'] font-semibold text-[#D4AF37] text-lg md:text-2xl text-center uppercase tracking-widest max-w-2xl leading-relaxed">
             «Adoradores en un solo corazón»
             <span className="block text-sm md:text-base mt-2 font-normal opacity-80">(cfr. jn 4, 23-24)</span>
           </h3>
        </div>

        {/* Objective */}
        <div className="flex flex-col items-center gap-4 max-w-xl mx-auto bg-black/40 p-6 rounded-2xl border border-[#D4AF37]/20 backdrop-blur-sm mb-auto">
          <div className="relative text-[#D4AF37]">
            <Clock size={32} strokeWidth={1.5} />
            {/* Small cross inside clock */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 2v20M5 9h14" />
              </svg>
            </div>
          </div>
          <p className="font-['Montserrat'] text-gray-300 text-sm md:text-base leading-relaxed tracking-wide">
            DIRIGIDO A INTEGRANTES DE MINISTERIO DE MÚSICA Y A QUIENES DESEAN FORMAR UNO
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 pb-8">
          <button 
            onClick={scrollToDetails}
            className="text-white/50 hover:text-[#D4AF37] transition-colors animate-bounce cursor-pointer flex flex-col items-center gap-2"
            aria-label="Scroll to details"
          >
            <span className="font-['Montserrat'] text-xs tracking-widest uppercase opacity-70">Descubre Más</span>
            <ChevronDown size={24} strokeWidth={1.5} />
          </button>
        </div>

      </div>
    </section>
  );
}
