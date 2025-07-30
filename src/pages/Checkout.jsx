import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    id,
    name,
    time,
    price,
    source,
    destination,
    date
  } = location.state || {};

  const [passenger, setPassenger] = useState({
    name: '',
    age: '',
    gender: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    setPassenger({ ...passenger, [e.target.name]: e.target.value });
  };

  const handleProceedPayment = () => {
    // Add validation here if needed
    navigate('/payment', {
      state: {
        ...location.state,
        passenger
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">🧾 Checkout</h2>

        <div className="mb-6 border p-4 rounded-lg bg-gray-50">
          <p className="font-semibold text-lg">Bus: {name}</p>
          <p>From: {source} ➡️ To: {destination}</p>
          <p>Departure: {time} on {date}</p>
          <p className="text-green-600 font-bold">Ticket Price: ₹{price}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">👤 Passenger Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={passenger.name}
              onChange={handleChange}
              className="p-3 border rounded-lg"
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={passenger.age}
              onChange={handleChange}
              className="p-3 border rounded-lg"
              required
            />
            <select
              name="gender"
              value={passenger.gender}
              onChange={handleChange}
              className="p-3 border rounded-lg"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">👦 Male</option>
              <option value="Female">👧 Female</option>
              <option value="Other">⚧ Other</option>
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={passenger.phone}
              onChange={handleChange}
              className="p-3 border rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={passenger.email}
              onChange={handleChange}
              className="p-3 border rounded-lg md:col-span-2"
              required
            />
          </div>
        </div>

        <div className="mt-6 text-right">
          <button
            onClick={handleProceedPayment}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Proceed to Payment 💳
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
