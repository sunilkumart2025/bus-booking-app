import React, { useEffect, useState } from 'react';
import BusList from '../components/BusList';
import { fetchAvailableBuses } from '../services/busService';
import { useSearchParams } from 'react-router-dom';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);

  const source = searchParams.get('source');
  const destination = searchParams.get('destination');
  const date = searchParams.get('date');

  useEffect(() => {
    const loadBuses = async () => {
      try {
        const data = await fetchAvailableBuses(source, destination, date);
        setBuses(data);
      } catch (error) {
        console.error('Error fetching buses:', error);
      } finally {
        setLoading(false);
      }
    };

    loadBuses();
  }, [source, destination, date]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        🚌 Buses from {source} to {destination} on {date}
      </h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading buses...</p>
      ) : buses.length === 0 ? (
        <p className="text-center text-red-500">No buses available.</p>
      ) : (
        <BusList buses={buses} />
      )}
    </div>
  );
};

export default SearchResults;
