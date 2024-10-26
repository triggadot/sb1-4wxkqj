import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Plus } from 'lucide-react';
import { Trip } from '../types';

interface AddTripDialogProps {
  onAddTrip: (trip: Trip) => void;
}

export function AddTripDialog({ onAddTrip }: AddTripDialogProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [dates, setDates] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTrip: Trip = {
      id: Date.now().toString(),
      title,
      dates,
      flights: []
    };
    onAddTrip(newTrip);
    setOpen(false);
    setTitle('');
    setDates('');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="glass hover:bg-indigo-500/20">
          <Plus className="w-4 h-4 mr-2" />
          Add Trip
        </Button>
      </DialogTrigger>
      <DialogContent className="glass border-none">
        <DialogHeader>
          <DialogTitle className="text-white">Add New Trip</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Trip Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="glass"
            />
          </div>
          <div>
            <Input
              placeholder="Trip Dates"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
              className="glass"
            />
          </div>
          <Button type="submit" className="w-full glass hover:bg-indigo-500/20">
            Create Trip
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}