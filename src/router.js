import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Checkout from './pages/Checkout';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import OperatorPanel from './pages/OperatorPanel';
import BookingHistory from './pages/BookingHistory';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/operator" element={<OperatorPanel />} />
      <Route path="/bookings" element={<BookingHistory />} />
    </Routes>
  );
}
