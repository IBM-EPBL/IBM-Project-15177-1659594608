import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Footer } from './containers';
import { Navbar } from './components';

import './App.css';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
import PredictionPage from './pages/PredictionPage';
import Results from './pages/Results';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
    </div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/predict" element={<PredictionPage />} />
      <Route path="/results" element={<Results />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
