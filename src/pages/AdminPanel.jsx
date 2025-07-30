import React, { useState } from 'react';

const AdminPanel = () => {
  const [formData, setFormData] = useState({
    busName: '',
    source: '',
    destination: '',
    date: '',
    time: '',
    totalSeats: '',
    price: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New bus added:', formData);
    // You can call your Supabase query here to insert this into 'buses' or 'schedules'
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">🛠 Admin Panel - Add New Bus</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="busName"
            placeholder="Bus Name"
            value={formData.busName}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            name="source"
            placeholder="Source"
            value={formData.source}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            name="destination"
            placeholder="Destination"
            value={formData.destination}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="number"
            name="totalSeats"
            placeholder="Total Seats"
            value={formData.totalSeats}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="number"
            name="price"
            placeholder="Price per seat (₹)"
            value={formData.price}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-lg"
          />

          <button
            type="submit"
            className="md:col-span-2 mt-4 bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700"
          >
            ➕ Add Bus
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;
