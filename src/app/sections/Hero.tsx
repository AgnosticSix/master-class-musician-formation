import { Clock, ChevronDown } from "lucide-react";
import { TrebleClefSvg } from "../components/icons/TrebleClefSvg";
import { EVENT_DATA, HERO_BACKGROUNDS } from "@/constants/event-data";

export function Hero() {
  const scrollToDetails = () => {
    const detailsSection = document.getElementById('detalles');
    if (detailsSection) {
      const headerOffset = 120;
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
        style={{ backgroundImage: `url("${HERO_BACKGROUNDS.concert}")` }}
      />
      <div 
        className="absolute inset-0 z-0 bg-cover bg-bottom opacity-50 mix-blend-overlay"
        style={{ backgroundImage: `url("${HERO_BACKGROUNDS.worship}")` }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark" />

      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center mt-10 min-h-[calc(100vh-160px)] justify-center">
        
        {/* Title Group */}
        <div className="relative mb-6 mt-auto">
          <h1 className="font-display text-[5rem] md:text-[8rem] lg:text-[10rem] leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 uppercase tracking-wider drop-shadow-2xl">
            Master
          </h1>
          <span className="absolute -bottom-4 md:-bottom-8 right-0 font-script text-5xl md:text-8xl text-brand-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.5)] rotate-[-5deg]">
            Class
          </span>
          
          {/* Decorative Treble Clef and Staff behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20 pointer-events-none -z-10 text-brand-gold">
            <TrebleClefSvg className="w-full h-full" />
          </div>
        </div>

        {/* Subtext */}
        <h2 className="font-sans font-bold text-white text-xl md:text-3xl tracking-[0.2em] mb-6 mt-8">
          {EVENT_DATA.subtitle}
        </h2>

        {/* Catchphrase */}
        <div className="relative py-4 px-8 md:px-16 mb-12">
           {/* Subtle glow behind catchphrase */}
           <div className="absolute inset-0 bg-brand-gold/10 blur-xl rounded-full"></div>
           <h3 className="relative font-sans font-semibold text-brand-gold text-lg md:text-2xl text-center uppercase tracking-widest max-w-2xl leading-relaxed">
             {EVENT_DATA.catchphrase}
             <span className="block text-sm md:text-base mt-2 font-normal opacity-80">{EVENT_DATA.scriptureRef}</span>
           </h3>
        </div>

        {/* Objective */}
        <div className="flex flex-col items-center gap-4 max-w-xl mx-auto bg-black/40 p-6 rounded-2xl border border-brand-gold/20 backdrop-blur-sm mb-auto">
          <div className="relative text-brand-gold">
            <Clock size={32} strokeWidth={1.5} />
            {/* Small cross inside clock */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 2v20M5 9h14" />
              </svg>
            </div>
          </div>
          <p className="font-sans text-gray-300 text-sm md:text-base leading-relaxed tracking-wide">
            {EVENT_DATA.objective}
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 pb-8">
          <button 
            onClick={scrollToDetails}
            className="text-gray-300 hover:text-brand-gold transition-colors animate-bounce cursor-pointer flex flex-col items-center gap-2"
            aria-label="Scroll to details"
          >
            <span className="font-sans text-xs tracking-widest uppercase opacity-90">Descubre Más</span>
            <ChevronDown size={24} strokeWidth={1.5} />
          </button>
        </div>

      </div>
    </section>
  );
}
