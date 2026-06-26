import { Send } from "lucide-react";

export function RegistrationForm() {
  return (
    <section id="inscripcion" className="py-24 relative z-20 bg-brand-dark">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-brand-surface border border-brand-gold/40 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="text-center mb-10">
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-white mb-3">
              Inscríbete a la <span className="font-script font-normal text-brand-gold text-5xl ml-2">Master Class</span>
            </h2>
            <p className="text-gray-400 font-sans text-sm">Asegura tu lugar en este evento de formación musical.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="block text-brand-gold font-sans text-xs font-bold tracking-wider">NOMBRE COMPLETO</label>
              <input 
                type="text" 
                placeholder="Ej. Juan Pérez"
                className="w-full bg-brand-dark border border-gray-800 rounded-lg px-4 py-3 text-white font-sans focus:outline-none focus:border-brand-gold transition-colors placeholder:text-gray-600"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-brand-gold font-sans text-xs font-bold tracking-wider">CORREO ELECTRÓNICO</label>
                <input 
                  type="email" 
                  placeholder="ejemplo@correo.com"
                  className="w-full bg-brand-dark border border-gray-800 rounded-lg px-4 py-3 text-white font-sans focus:outline-none focus:border-brand-gold transition-colors placeholder:text-gray-600"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-brand-gold font-sans text-xs font-bold tracking-wider">TELÉFONO</label>
                <input 
                  type="tel" 
                  placeholder="+00 000 000 0000"
                  className="w-full bg-brand-dark border border-gray-800 rounded-lg px-4 py-3 text-white font-sans focus:outline-none focus:border-brand-gold transition-colors placeholder:text-gray-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-brand-gold font-sans text-xs font-bold tracking-wider">MINISTERIO O PARROQUIA (OPCIONAL)</label>
              <input 
                type="text" 
                placeholder="Nombre de tu coro o parroquia"
                className="w-full bg-brand-dark border border-gray-800 rounded-lg px-4 py-3 text-white font-sans focus:outline-none focus:border-brand-gold transition-colors placeholder:text-gray-600"
              />
            </div>

            <button 
              type="submit"
              className="w-full mt-8 bg-gradient-to-r from-brand-gold to-brand-gold-dark hover:from-brand-gold-light hover:to-brand-gold text-brand-dark font-sans font-bold text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all flex items-center justify-center gap-2 group"
            >
              <span>Enviar Inscripción</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
