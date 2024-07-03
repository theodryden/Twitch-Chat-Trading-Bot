// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import PortfolioPie from './pages/PortfolioPie';
import OrderHistory from './pages/OrderHistory';
import Rules from './pages/Rules';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/OrderHistory" element={<OrderHistory />} />
            <Route path="/PortfolioPie" element={<PortfolioPie />} />
            <Route path="/Rules" element={<Rules />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

