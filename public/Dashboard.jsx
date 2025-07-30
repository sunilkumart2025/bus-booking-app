import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const source = e.target.source.value;
    const destination = e.target.destination.value;
    const date = e.target.date.value;
    navigate(`/search?source=${source}&destination=${destination}&date=${date}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-2xl rounded-2xl">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Welcome to SKY Bus Booking 🚍</h1>

        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <input
            type="text"
            name="source"
            placeholder="Source"
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            name="destination"
            placeholder="Destination"
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="date"
            name="date"
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-all"
          >
            🔍 Search
          </button>
        </form>

        <div className="text-gray-600 text-center">
          <p className="text-xl">💼 View your booking history anytime.</p>
          <button
            onClick={() => navigate('/bookings')}
            className="mt-4 bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700"
          >
            🧾 Booking History
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
