import React from 'react';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './App.css';

export default function App() {
  return (
    <main>
      <div className="header">
        <h1 id="name">Hello, I'm Ian</h1>
        <h2 id="occupation">A software developer based in Tampa, FL</h2>
      </div>

      <Spline
        scene="https://prod.spline.design/aBHJ6BJh65cpv3IR/scene.splinecode" 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: 'auto',
          zIndex: -1, // behind the text
          width:'full', // full width
          height: '100vh', // full viewport height
        }}
      />
       
      {/* Floating Horizontal Menu Bar */}
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <footer className="footer">
        <p>© 2025 Ian Castillo's Portfolio. All rights reserved.</p>
        </footer>
    </main>
  );
}
