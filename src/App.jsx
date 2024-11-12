import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home'; // Make sure to create these pages
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Donate } from './components/Donate';
import { Footer } from './components/Footer';
import { Payment } from './components/Payment.jsx';
import { Card } from './components/Card';
import { Volunteer } from './components/Volunteer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        {/* Corrected the path for the Card route */}
        <Route path="/payment" element={<Payment />}>
          <Route path="card" element={<Card />} />
        </Route>
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
