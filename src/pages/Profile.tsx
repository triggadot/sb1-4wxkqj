export default function Profile() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center space-x-6">
          <div className="h-24 w-24 rounded-full bg-gray-200"></div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">John Doe</h2>
            <p className="text-gray-600">Travel Enthusiast</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900">About</h3>
          <p className="mt-2 text-gray-600">
            Passionate traveler always looking for the next adventure. Love exploring new cultures and meeting new people.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900">Upcoming Trips</h3>
          <div className="mt-2 space-y-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-medium text-gray-900">Beach Paradise - Maldives</p>
              <p className="text-sm text-gray-600">January 15, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}