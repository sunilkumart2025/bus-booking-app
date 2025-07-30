import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabase';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [buses, setBuses] = useState([]);
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const searchBuses = async () => {
    const { data, error } = await supabase
      .from('schedules')
      .select('*')
      .eq('source', source)
      .eq('destination', destination)
      .eq('date', date);

    if (!error) setBuses(data);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Search Buses</h1>
      <input type="text" placeholder="Source" value={source} onChange={(e) => setSource(e.target.value)} />
      <input type="text" placeholder="Destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button onClick={searchBuses}>Search</button>
      <ul>
        {buses.map((bus) => (
          <li key={bus.id}>
            {bus.operator} - {bus.departure_time}
            <button onClick={() => navigate(`/checkout?scheduleId=${bus.id}`)}>Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
