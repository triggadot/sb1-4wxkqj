import React, { useState } from 'react';
import { Card } from './ui/card';
import { GripVertical, Clock, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ItineraryItem {
  id: string;
  activity: string;
  time: string;
  location: string;
}

interface DraggableItemProps extends ItineraryItem {
  index: number;
  isDragging: boolean;
  onDragStart: (e: React.DragEvent, index: number) => void;
  onDragEnd: () => void;
  onDragOver: (e: React.DragEvent, index: number) => void;
}

const DraggableItem = ({
  activity,
  time,
  location,
  index,
  isDragging,
  onDragStart,
  onDragEnd,
  onDragOver
}: DraggableItemProps) => {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDragEnd={onDragEnd}
      onDragOver={(e) => onDragOver(e, index)}
      className="mb-4 group"
    >
      <Card className={cn(
        "glass-card border-none transition-all duration-300",
        isDragging ? "opacity-50" : "opacity-100",
        "hover:scale-[1.02] hover:shadow-lg"
      )}>
        <div className="p-4 flex items-center gap-4">
          <div className="cursor-grab group-hover:text-indigo-400 transition-colors">
            <GripVertical className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-lg text-white">{activity}</h3>
            <div className="flex items-center gap-4 text-sm text-gray-400 mt-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {time}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {location}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export function TripItinerary() {
  const [items, setItems] = useState<ItineraryItem[]>([
    { id: '1', activity: 'Check in at Aira Boutique', time: '14:00', location: 'Hanoi Old Quarter' },
    { id: '2', activity: 'Street Food Tour', time: '16:00', location: 'Hoan Kiem District' },
    { id: '3', activity: 'Water Puppet Show', time: '19:00', location: 'Thang Long Theatre' }
  ]);
  
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const newItems = [...items];
    const itemToMove = newItems[draggedIndex];
    newItems.splice(draggedIndex, 1);
    newItems.splice(index, 0, itemToMove);

    setDraggedIndex(index);
    setItems(newItems);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Day 1 Itinerary
          </h2>
          <p className="text-gray-400 mt-1">Oct 29, 2024</p>
        </div>
      </div>
      <div className="space-y-2">
        {items.map((item, index) => (
          <DraggableItem
            key={item.id}
            {...item}
            index={index}
            isDragging={draggedIndex === index}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
          />
        ))}
      </div>
    </div>
  );
}