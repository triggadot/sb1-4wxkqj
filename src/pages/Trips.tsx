import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ScrollArea } from "../components/ui/scroll-area";
import { 
  Plane, 
  Hotel, 
  MapPin, 
  Calendar, 
  Clock, 
  AlertCircle,
  Ticket,
  Navigation
} from "lucide-react";

interface Event {
  icon: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  details?: string;
  confirmation?: string;
  status: 'confirmed' | 'pending' | 'gap';
}

interface Segment {
  title: string;
  dates: string;
  events: Event[];
}

interface Segments {
  [key: string]: Segment;
}

const StatusBadge = ({ type }: { type: string }) => {
  const styles = {
    confirmed: "bg-green-100 text-green-800",
    gap: "bg-red-100 text-red-800",
    pending: "bg-yellow-100 text-yellow-800"
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[type]}`}>
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </span>
  );
};

const getIcon = (iconName: string) => {
  const icons = {
    Plane,
    Hotel,
    Calendar,
    Navigation
  };
  return icons[iconName] || Calendar;
};

const EventCard = ({ icon, title, date, time, location, details, confirmation, status }: Event) => {
  const Icon = getIcon(icon);
  
  return (
    <Card className="mb-4">
      <CardHeader className="flex flex-row items-center space-x-4 pb-2">
        <Icon className="w-5 h-5 text-gray-500" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">{title}</CardTitle>
            <StatusBadge type={status} />
          </div>
          <CardDescription>{date} {time && `• ${time}`}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="text-sm space-y-2">
        {location && (
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            {location}
          </div>
        )}
        {details && (
          <div className="pl-6 text-gray-600">
            {details.split('\n').map((detail, i) => (
              <p key={i}>{detail}</p>
            ))}
          </div>
        )}
        {confirmation && (
          <div className="flex items-center text-gray-500">
            <Ticket className="w-4 h-4 mr-2" />
            Confirmation: {confirmation}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default function Trips() {
  const [segments, setSegments] = useState<Segments>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSegments = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/trips');
        if (!response.ok) {
          throw new Error('Failed to fetch trips');
        }
        const data = await response.json();
        setSegments(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchSegments();
  }, []);

  if (loading) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <p className="text-center text-gray-600">Loading trips...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <p className="text-center text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Trip Dashboard</h1>
        <Badge variant="outline">Oct 29 - Nov 14, 2024</Badge>
      </div>

      <Tabs defaultValue="vietnam1">
        <TabsList className="mb-4">
          <TabsTrigger value="vietnam1">Hanoi & Sapa</TabsTrigger>
          <TabsTrigger value="vietnam2">Halong Bay & HCMC</TabsTrigger>
          <TabsTrigger value="thailand">Thailand</TabsTrigger>
        </TabsList>

        {Object.entries(segments).map(([key, segment]) => (
          <TabsContent value={key} key={key}>
            <Card>
              <CardHeader>
                <CardTitle>{segment.title}</CardTitle>
                <CardDescription>{segment.dates}</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[600px] pr-4">
                  {segment.events.map((event, index) => (
                    <EventCard key={index} {...event} />
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}