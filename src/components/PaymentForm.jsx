import React, { useState } from 'react';

const PaymentForm = ({ passenger, selectedBus, onBookingConfirmed }) => {
  const [paymentStatus, setPaymentStatus] = useState('pending');

  const handlePayment = () => {
    // You can replace this with Razorpay or UPI integration later
    setTimeout(() => {
      setPaymentStatus('success');
      onBookingConfirmed({
        ...passenger,
        bus: selectedBus,
        ticketId: `SKY${Math.floor(100000 + Math.random() * 900000)}`,
        date: new Date().toLocaleString(),
      });
    }, 2000); // Simulate 2s payment
  };

  return (
    <div className="bg-white p-6 rounded shadow-md text-center">
      <h2 className="text-xl font-semibold mb-4">Payment</h2>
      <p className="mb-2">Bus: <strong>{selectedBus.busName}</strong></p>
      <p className="mb-2">Fare: ₹{selectedBus.fare}</p>
      <p className="mb-4">Passenger: {passenger.name}</p>

      {paymentStatus === 'pending' ? (
        <button
          onClick={handlePayment}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Pay Now
        </button>
      ) : (
        <p className="text-green-600 font-bold mt-4">Payment Successful ✅</p>
      )}
    </div>
  );
};

export default PaymentForm;
