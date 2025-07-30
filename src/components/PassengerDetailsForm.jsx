import React, { useState } from 'react';
import PaymentForm from './PaymentForm';

const PassengerDetailsForm = ({ selectedBus, onBookingConfirmed }) => {
  const [passenger, setPassenger] = useState({
    name: '',
    age: '',
    gender: 'Male',
    phone: '',
    email: '',
  });

  const [step, setStep] = useState(1); // 1 = passenger form, 2 = payment

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassenger({ ...passenger, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2); // Move to payment
  };

  return (
    <div className="bg-white p-6 rounded shadow-md max-w-xl mx-auto mt-4">
      {step === 1 ? (
        <>
          <h2 className="text-xl font-semibold mb-4">Enter Passenger Details</h2>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={passenger.name}
              onChange={handleChange}
              required
              className="border rounded p-2"
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={passenger.age}
              onChange={handleChange}
              required
              className="border rounded p-2"
            />
            <select
              name="gender"
              value={passenger.gender}
              onChange={handleChange}
              className="border rounded p-2"
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={passenger.phone}
              onChange={handleChange}
              required
              className="border rounded p-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={passenger.email}
              onChange={handleChange}
              required
              className="border rounded p-2"
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Proceed to Payment
            </button>
          </form>
        </>
      ) : (
        <PaymentForm passenger={passenger} selectedBus={selectedBus} onBookingConfirmed={onBookingConfirmed} />
      )}
    </div>
  );
};

export default PassengerDetailsForm;
