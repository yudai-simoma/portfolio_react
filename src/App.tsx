import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Footer from './components/Footer/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
