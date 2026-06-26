import type { ReactNode } from "react";

interface DetailCardProps {
  icon: ReactNode;
  label: string;
  value: string;
}

/**
 * Card reutilizable para mostrar un detalle del evento.
 * Usado en la sección DetailsGrid para fecha, lugar, instructor y horario.
 */
export function DetailCard({ icon, label, value }: DetailCardProps) {
  return (
    <div className="bg-brand-surface border border-brand-gold/30 rounded-xl p-6 flex items-start gap-4 hover:border-brand-gold transition-colors group">
      <div className="p-3 bg-brand-gold/10 rounded-lg text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <span className="block font-sans text-xs font-bold text-brand-gold tracking-wider mb-2">
          {label}
        </span>
        <p className="w-full bg-transparent text-white font-sans text-lg font-medium">
          {value}
        </p>
      </div>
    </div>
  );
}
