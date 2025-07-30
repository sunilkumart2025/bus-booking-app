import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchResult = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // These values are passed from the index/home page via navigation state
  const { source, destination, date } = location.state || {};

  // Example dummy buses (replace with data fetched from Supabase)
  const buses = [
    {
      id: 1,
      name: 'SKY Travels',
      time: '07:00 AM',
      price: 349,
      seatsAvailable: 22
    },
    {
      id: 2,
      name: 'ExpressGo',
      time: '10:30 AM',
      price: 420,
      seatsAvailable: 14
    }
  ];

  const handleSelectBus = (bus) => {
    navigate('/checkout', { state: { ...bus, source, destination, date } });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-purple-700">🚌 Available Buses from {source} to {destination} on {date}</h2>

        {buses.length === 0 ? (
          <p className="text-center text-gray-500">No buses found.</p>
        ) : (
          <div className="grid gap-4">
            {buses.map((bus) => (
              <div key={bus.id} className="bg-white shadow-md rounded-xl p-4 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{bus.name}</h3>
                  <p className="text-gray-600">🕒 Departure: {bus.time}</p>
                  <p className="text-gray-600">💺 Seats Available: {bus.seatsAvailable}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-600">₹{bus.price}</p>
                  <button
                    className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
                    onClick={() => handleSelectBus(bus)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
