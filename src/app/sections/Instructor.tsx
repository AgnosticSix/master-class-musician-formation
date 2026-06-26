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
          <div className="w-40 h-40 shrink-0 rounded-full overflow-hidden border-4 border-brand-gold/30 relative shadow-[0_0_30px_rgba(212,175,55,0.15)] group cursor-pointer hover:border-brand-gold transition-colors">
            <ImageWithFallback 
              src={EVENT_DATA.instructorPhoto}
              alt="Instructor" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay to indicate it's a placeholder image that can be changed */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-xs font-sans font-bold">Cambiar Foto</span>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 w-full space-y-4 text-center md:text-left">
            <input 
              type="text" 
              defaultValue={EVENT_DATA.instructorName}
              className="w-full bg-transparent border-b border-transparent hover:border-gray-700 focus:border-brand-gold pb-1 text-white font-sans text-2xl font-bold focus:outline-none transition-colors"
            />
            <textarea 
              className="w-full bg-transparent border border-transparent hover:border-gray-700 focus:border-brand-gold/50 rounded-lg p-2 -mx-2 text-gray-300 font-sans text-base leading-relaxed focus:outline-none transition-colors resize-none min-h-[120px]"
              defaultValue={EVENT_DATA.instructorBio}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
