import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Instructor() {
  return (
    <section id="instructor" className="py-16 relative z-20 bg-[#081012]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-['Montserrat'] text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Sobre el <span className="text-[#D4AF37]">Instructor</span>
        </h2>
        
        <div className="bg-[#0a1114] border border-[#D4AF37]/20 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Avatar */}
          <div className="w-40 h-40 shrink-0 rounded-full overflow-hidden border-4 border-[#D4AF37]/30 relative shadow-[0_0_30px_rgba(212,175,55,0.15)] group cursor-pointer hover:border-[#D4AF37] transition-colors">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1708717652033-43f326f4cf84?q=80&w=400" 
              alt="Instructor" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay to indicate it's a placeholder image that can be changed */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-xs font-['Montserrat'] font-bold">Cambiar Foto</span>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 w-full space-y-4 text-center md:text-left">
            <input 
              type="text" 
              defaultValue="Nombre del Instructor" 
              className="w-full bg-transparent border-b border-transparent hover:border-gray-700 focus:border-[#D4AF37] pb-1 text-white font-['Montserrat'] text-2xl font-bold focus:outline-none transition-colors"
            />
            <textarea 
              className="w-full bg-transparent border border-transparent hover:border-gray-700 focus:border-[#D4AF37]/50 rounded-lg p-2 -mx-2 text-gray-300 font-['Montserrat'] text-base leading-relaxed focus:outline-none transition-colors resize-none min-h-[120px]"
              defaultValue="Músico católico con más de 15 años de experiencia en la dirección de ministerios de alabanza y adoración. Ha participado en numerosos congresos y talleres internacionales, especializándose en la formación integral de coros parroquiales y bandas católicas. Su pasión es ayudar a otros a descubrir su llamado a través de la música."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
