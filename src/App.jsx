import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home'; // Make sure to create these pages
import { About } from './components/About';
import { Contact } from './components/Contact';
// import { Donate } from './components/Donate';
import { Footer } from './components/Footer';
import { Payment } from './components/Payment';
import { Card } from './components/Card';
import { Volunteer } from './components/Volunteer';
import { Newsletter } from './components/Newsletter';
import { Pdf } from './components/Pdf';
import { Pdf1 } from './components/Pdf1';
import  ScrollToTop  from './components/ScrollToTop';
import { Whatwedo } from './components/Whatwedo';
import { Ourmission } from './components/Ourmission';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { Paypal } from './components/Paypal';
import Donate from './components/Donate';


function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/whatwedo" element={<Whatwedo />} />
        <Route path="/ourmission" element={<Ourmission />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/pdf" element={<Pdf />} />
        <Route path="/pdf1" element={<Pdf1 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/donate" element={<Donate />} />
        {/* <Route path="/donate" element={<Donate />} /> */}
        {/* Corrected the path for the Card route */}
        <Route path="/payment" element={<Payment />}>
          <Route path="card" element={<Card />} />
          <Route path="paypal" element={<Paypal />} />
        </Route>
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
