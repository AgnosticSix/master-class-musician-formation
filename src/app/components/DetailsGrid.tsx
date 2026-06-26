import { Calendar, MapPin, User, Clock } from "lucide-react";

export function DetailsGrid() {
  return (
    <section id="detalles" className="py-20 relative z-20 bg-[#060b0d]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Caja 1: Fecha */}
          <div className="bg-[#0a1114] border border-[#D4AF37]/30 rounded-xl p-6 flex items-start gap-4 hover:border-[#D4AF37] transition-colors group">
            <div className="p-3 bg-[#D4AF37]/10 rounded-lg text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#060b0d] transition-colors shrink-0">
              <Calendar size={24} />
            </div>
            <div className="flex-1">
              <span className="block font-['Montserrat'] text-xs font-bold text-[#D4AF37] tracking-wider mb-2">FECHA:</span>
              <p className="w-full bg-transparent text-white font-['Montserrat'] text-lg font-medium">
                [Día] de [Mes] de 2026
              </p>
            </div>
          </div>

          {/* Caja 2: Presencial */}
          <div className="bg-[#0a1114] border border-[#D4AF37]/30 rounded-xl p-6 flex items-start gap-4 hover:border-[#D4AF37] transition-colors group">
            <div className="p-3 bg-[#D4AF37]/10 rounded-lg text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#060b0d] transition-colors shrink-0">
              <MapPin size={24} />
            </div>
            <div className="flex-1">
              <span className="block font-['Montserrat'] text-xs font-bold text-[#D4AF37] tracking-wider mb-2">PRESENCIAL:</span>
              <p className="w-full bg-transparent text-white font-['Montserrat'] text-lg font-medium">
                Sede Principal, Ciudad
              </p>
            </div>
          </div>

          {/* Caja 3: Instructor */}
          <div className="bg-[#0a1114] border border-[#D4AF37]/30 rounded-xl p-6 flex items-start gap-4 hover:border-[#D4AF37] transition-colors group">
            <div className="p-3 bg-[#D4AF37]/10 rounded-lg text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#060b0d] transition-colors shrink-0">
              <User size={24} />
            </div>
            <div className="flex-1">
              <span className="block font-['Montserrat'] text-xs font-bold text-[#D4AF37] tracking-wider mb-2">QUIEN IMPARTE LA CLASE:</span>
              <p className="w-full bg-transparent text-white font-['Montserrat'] text-lg font-medium">
                Nombre del Instructor
              </p>
            </div>
          </div>

          {/* Caja 4: Horario */}
          <div className="bg-[#0a1114] border border-[#D4AF37]/30 rounded-xl p-6 flex items-start gap-4 hover:border-[#D4AF37] transition-colors group">
            <div className="p-3 bg-[#D4AF37]/10 rounded-lg text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#060b0d] transition-colors shrink-0">
              <Clock size={24} />
            </div>
            <div className="flex-1">
              <span className="block font-['Montserrat'] text-xs font-bold text-[#D4AF37] tracking-wider mb-2">HORARIO:</span>
              <p className="w-full bg-transparent text-white font-['Montserrat'] text-lg font-medium">
                00:00 AM a 00:00 PM
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
