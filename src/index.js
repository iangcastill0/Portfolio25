import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // React Router import
import App from './App';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import reportWebVitals from './reportWebVitals';

// Set up routing to render different pages based on the URL
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />        {/* Home Page */}
        <Route path="/about" element={<About />} />  {/* About Page */}
        <Route path="/services" element={<Services />} /> {/* Services Page */}
        <Route path="/contact" element={<Contact />} />   {/* Contact Page */}
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();

