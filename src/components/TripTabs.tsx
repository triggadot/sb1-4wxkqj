import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { FlightCard } from './FlightCard';
import { Trip } from '../types';

interface TripTabsProps {
  trips: Trip[];
}

export function TripTabs({ trips }: TripTabsProps) {
  return (
    <Tabs defaultValue={trips[0]?.id} className="w-full">
      <TabsList className="glass mb-6 p-1 w-full flex">
        {trips.map((trip) => (
          <TabsTrigger
            key={trip.id}
            value={trip.id}
            className="flex-1 data-[state=active]:bg-indigo-500/20"
          >
            {trip.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {trips.map((trip) => (
        <TabsContent key={trip.id} value={trip.id}>
          <div className="space-y-4">
            {trip.flights.map((flight) => (
              <FlightCard key={flight.id} flight={flight} />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}