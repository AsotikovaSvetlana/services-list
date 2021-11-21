import './App.css';
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:id" element={<ServiceDetailPage />} />
        <Route path="*" element={<Navigate to="/services" />} />
      </Routes>
    </div>
  );
}
