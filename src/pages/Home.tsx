import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Plan Your Next Adventure
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Discover amazing destinations and create unforgettable memories with XDelo Trip Planner.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/trips"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Browse Trips
          </Link>
        </div>
      </div>
    </div>
  );
}