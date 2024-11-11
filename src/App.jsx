import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import {Home} from './components/Home'; // Make sure to create these pages
import {About} from './components/About';
import {Contact} from './components/Contact';
import {Donate} from './components/Donate';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
