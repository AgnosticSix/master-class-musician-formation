import { EVENT_DATA } from "@/constants/event-data";

export function MoreInfo() {
  return (
    <section className="py-16 relative z-20 bg-brand-dark">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-white mb-8">
            Conoce más sobre el <span className="text-brand-gold">Evento</span>
          </h2>
          <div className="w-full bg-brand-surface border border-brand-gold/20 rounded-xl p-6 md:p-8 text-gray-300 font-sans text-base md:text-lg leading-relaxed text-left shadow-lg shadow-black/20">
            <p>{EVENT_DATA.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
