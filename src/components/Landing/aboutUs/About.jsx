import React, { useState } from 'react';
// Removed Container, Row, Col from react-bootstrap
import './About.css';
import PopUp from '../popUp/PopUp';
// Ensure global bootstrap CSS is still imported if not already in your App.js
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  const [showForm, setShowForm] = useState(false); 
  const toggleForm = () => setShowForm(!showForm); 

  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side: Text Content */}
          <div className="col-md-6">
            <h1 className="about-heading">What Makes Us Worth Your Time And Trust?</h1>
            <p className="about-subheading">
              When building a Website & App, we mainly emphasize three factors – the look, the feel, and the potential of conversion. We aim to get your business a winning app by focusing on a user-first strategy for UI/UX.
            </p>
            <p className="about-subheading">
              This apart, we build the interfaces of our apps adaptable to variations by making sure that all the texts are readable, and the navigation fits within the screen for a variety of models.
            </p>
            <p className="about-subheading">
              Our Website & App developers implement robust security measures to safeguard sensitive user data. We also ensure full transparency by clearly explaining the purpose behind data collection, making users feel secure and confident while using the app.
            </p>
            <button className="btn-about btn border-0" onClick={toggleForm}>
              Contact Us
            </button>
          </div>

          {/* Right Side: Image */}
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img 
              src="https://ahaanmedia.com/asc/Landing/about.jpg" 
              alt="About Us" 
              className="about-image img-fluid rounded shadow-sm" 
            />
          </div>
        </div>
      </div>

      {/* Popup Form */}
      {showForm && <PopUp onClose={toggleForm} />}
    </section>
  );
};

export default About;