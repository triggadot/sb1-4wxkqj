import { Clock, MapPin } from 'lucide-react';
import { TripEvent } from '../types';

interface EventCardProps {
  event: TripEvent;
  getIcon: (type: string) => JSX.Element;
  getStatusColor: (status: string) => string;
}

export function EventCard({ event, getIcon, getStatusColor }: EventCardProps) {
  return (
    <div className="glass-card overflow-hidden group hover:scale-[1.02] transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl glass ${
            event.type === 'flight' ? 'text-violet-400' :
            event.type === 'hotel' ? 'text-emerald-400' :
            'text-indigo-400'
          }`}>
            {getIcon(event.type)}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">{event.title}</h2>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(event.status)}`}>
                {event.status}
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 mt-1">
              <Clock className="w-4 h-4" />
              <span>{event.time} • {event.date}</span>
            </div>
          </div>
        </div>
        
        {event.location && (
          <div className="flex items-center gap-2 text-gray-400 mt-4 pl-16">
            <MapPin className="w-4 h-4" />
            <span>{event.location}</span>
          </div>
        )}
        
        {event.notes && (
          <div className="mt-4 pl-16">
            <p className="text-sm text-gray-400">{event.notes}</p>
          </div>
        )}
      </div>
    </div>
  );
}