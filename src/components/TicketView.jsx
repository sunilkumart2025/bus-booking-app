import React from 'react';

const TicketView = ({ ticket }) => {
  if (!ticket) {
    return <p className="text-center text-gray-500">No ticket available.</p>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6 max-w-md mx-auto border border-gray-200">
      <h2 className="text-2xl font-semibold text-center text-green-700 mb-4">
        🎫 Ticket Confirmation
      </h2>
      <div className="text-left text-sm">
        <p><strong>Ticket ID:</strong> {ticket.ticketId}</p>
        <p><strong>Name:</strong> {ticket.name}</p>
        <p><strong>Age:</strong> {ticket.age}</p>
        <p><strong>Gender:</strong> {ticket.gender}</p>
        <p><strong>Mobile:</strong> {ticket.mobile}</p>
        <p><strong>Email:</strong> {ticket.email}</p>
        <hr className="my-2" />
        <p><strong>Bus Name:</strong> {ticket.bus.busName}</p>
        <p><strong>From:</strong> {ticket.bus.source}</p>
        <p><strong>To:</strong> {ticket.bus.destination}</p>
        <p><strong>Departure:</strong> {ticket.bus.departureTime}</p>
        <p><strong>Date:</strong> {ticket.date}</p>
        <p><strong>Fare Paid:</strong> ₹{ticket.bus.fare}</p>
      </div>
    </div>
  );
};

export default TicketView;
