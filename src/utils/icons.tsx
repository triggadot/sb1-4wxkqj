import { Plane, Hotel, Navigation, Calendar } from 'lucide-react';

export const getIcon = (type: string) => {
  switch (type) {
    case 'flight':
      return <Plane className="w-6 h-6" />;
    case 'hotel':
      return <Hotel className="w-6 h-6" />;
    case 'activity':
      return <Navigation className="w-6 h-6" />;
    default:
      return <Calendar className="w-6 h-6" />;
  }
};

export const getStatusColor = (status: string) => {
  return status === 'upcoming' ? 'bg-emerald-500' : 'bg-blue-500';
};