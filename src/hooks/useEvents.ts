import { useState } from 'react';
import { TripEvent } from '../types';

export function useEvents() {
  const [events] = useState<TripEvent[]>([
    {
      id: '1',
      type: 'flight',
      title: 'LAX → Xiamen',
      date: 'Oct 27, 2024',
      time: '23:45',
      location: 'LAX Terminal B',
      notes: 'Flight MF830',
      status: 'upcoming'
    },
    {
      id: '2',
      type: 'hotel',
      title: 'InterContinental Hanoi',
      date: 'Oct 29, 2024',
      time: '15:00',
      location: 'Hanoi, Vietnam',
      notes: 'Confirmation: IHG72829',
      status: 'upcoming'
    },
    {
      id: '3',
      type: 'activity',
      title: 'Halong Bay Cruise',
      date: 'Oct 30, 2024',
      time: '09:00',
      location: 'Halong Bay',
      notes: 'Elite of the Seas',
      status: 'upcoming'
    }
  ]);

  return events;
}