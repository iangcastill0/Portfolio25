import './About.css'; // Optional: Add styles if needed
import { Link } from 'react-router-dom';
function About() {
  return (
    <main>
        <div className="about-container">
            <h1 className="about-title">About Me</h1>
            <h2 className="about-subtitle">Driven By Passion</h2>
        </div>

        <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </main>

    
  );
}

export default About;
