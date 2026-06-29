import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { EVENT_DATA } from "@/constants/event-data";

export function Instructor() {
  return (
    <section id="instructor" className="py-16 relative z-20 bg-brand-dark-alt">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Sobre el <span className="text-brand-gold">Instructor</span>
        </h2>
        
        <div className="bg-brand-surface border border-brand-gold/20 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Avatar */}
          <div className="w-40 h-40 shrink-0 rounded-full overflow-hidden border-4 border-brand-gold/30 shadow-[0_0_30px_rgba(212,175,55,0.15)]">
            <ImageWithFallback 
              src={EVENT_DATA.instructorPhoto}
              alt={EVENT_DATA.instructorName}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Info */}
          <div className="flex-1 w-full space-y-3 text-center md:text-left">
            <h3 className="text-white font-sans text-2xl font-bold">
              {EVENT_DATA.instructorName}
            </h3>
            <p className="text-brand-gold font-sans text-sm font-semibold tracking-wider uppercase">
              {EVENT_DATA.instructorTitle}
            </p>
            <p className="text-gray-300 font-sans text-base leading-relaxed text-justify">
              {EVENT_DATA.instructorBio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
