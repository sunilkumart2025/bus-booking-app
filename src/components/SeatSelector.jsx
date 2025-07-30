import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabase';

const SeatSelector = ({ scheduleId, onChange }) => {
  const [seats, setSeats] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const fetchSeats = async () => {
      const { data } = await supabase.from('seats').select('*').eq('schedule_id', scheduleId);
      setSeats(data);
    };
    fetchSeats();
  }, [scheduleId]);

  const toggleSeat = (seatNumber) => {
    let updated = [...selected];
    if (updated.includes(seatNumber)) {
      updated = updated.filter(s => s !== seatNumber);
    } else {
      updated.push(seatNumber);
    }
    setSelected(updated);
    onChange(updated);
  };

  return (
    <div className="grid grid-cols-5 gap-2 mt-2">
      {seats.map((seat) => (
        <button
          key={seat.seat_number}
          className={`p-2 border rounded ${selected.includes(seat.seat_number) ? 'bg-green-400' : seat.status === 'booked' ? 'bg-red-400' : 'bg-gray-100'}`}
          disabled={seat.status === 'booked'}
          onClick={() => toggleSeat(seat.seat_number)}
        >
          {seat.seat_number}
        </button>
      ))}
    </div>
  );
};

export default SeatSelector;