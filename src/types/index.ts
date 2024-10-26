export interface Flight {
  id: string;
  departure: string;
  arrival: string;
  date: string;
  time: string;
  airline: string;
  confirmation: string;
  status: string;
}

export interface Trip {
  id: string;
  title: string;
  dates: string;
  flights: Flight[];
}