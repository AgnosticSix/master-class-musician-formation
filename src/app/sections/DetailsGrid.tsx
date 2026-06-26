import { Calendar, MapPin, User, Clock } from "lucide-react";
import { DetailCard } from "../components/DetailCard";
import { EVENT_DATA } from "@/constants/event-data";

export function DetailsGrid() {
  return (
    <section id="detalles" className="py-20 relative z-20 bg-brand-dark">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DetailCard icon={<Calendar size={24} />} label="FECHA:" value={EVENT_DATA.date} />
          <DetailCard icon={<MapPin size={24} />} label="PRESENCIAL:" value={EVENT_DATA.location} />
          <DetailCard icon={<User size={24} />} label="QUIEN IMPARTE LA CLASE:" value={EVENT_DATA.instructorName} />
          <DetailCard icon={<Clock size={24} />} label="HORARIO:" value={EVENT_DATA.schedule} />
        </div>
      </div>
    </section>
  );
}
