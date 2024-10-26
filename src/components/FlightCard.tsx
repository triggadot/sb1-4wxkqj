import { Plane, Clock, MapPin } from 'lucide-react';
import { Flight } from '../types';

interface FlightCardProps {
  flight: Flight;
}

export function FlightCard({ flight }: FlightCardProps) {
  return (
    <div className="glass-card p-6 hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-xl glass text-violet-400">
          <Plane className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">
              {flight.departure} → {flight.arrival}
            </h2>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300">
              {flight.status}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 mt-1">
            <Clock className="w-4 h-4" />
            <span>{flight.time} • {flight.date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 mt-2">
            <MapPin className="w-4 h-4" />
            <span>{flight.airline} • {flight.confirmation}</span>
          </div>
        </div>
      </div>
    </div>
  );
}