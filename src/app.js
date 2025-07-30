import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SearchResults from './pages/SearchResults';
import AdminPanel from './pages/AdminPanel';
import OperatorPanel from './pages/OperatorPanel';
import BookingHistory from './pages/BookingHistory';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/operator" element={<OperatorPanel />} />
        <Route path="/history" element={<BookingHistory />} />
      </Routes>
    </div>
  );
}

export default App;
