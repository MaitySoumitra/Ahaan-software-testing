import React, { useState } from "react";
import { BiChat } from "react-icons/bi";
import "./Navbar.css";
import PopUp from "../popUp/PopUp";

const ResponsiveNavbar = () => {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => setShowForm(!showForm);

  return (
    <>
      <nav className="navbar navbar-light custom-navbar shadow-sm">
        <div className="container d-flex align-items-center justify-content-between">
          
          {/* Logo */}
          <a
            href="https://ahaansoftware.com/"
            className="navbar-brand fw-bold d-flex align-items-center"
          >
            <img
              src="https://ahaanmedia.com/asc/layouts/asc.png"
              alt="Logo"
              className="me-2"
              style={{ height: "50px" }}
            />
          </a>

          {/* Contact and Button Section - Always visible */}
          <div className="ms-auto d-flex align-items-center nav-responsive">
            
            {/* India Contact */}
            <div className="d-none d-md-block me-md-4">
              <a
                href="tel:+918981744661"
                className="d-flex align-items-center text-decoration-none"
              >
                <img
                  src="https://ahaanmedia.com/asc/layouts/indialogo.gif"
                  alt="India Flag"
                  className="flag-icon me-2"
                />
                <span className="text-muted fw-bold flag-content">
                  +91 898 174 4661
                </span>
              </a>
            </div>

            {/* USA Contact */}
            <div className="d-none d-md-block me-md-4">
              <a
                href="tel:+13214210740"
                className="d-flex align-items-center text-decoration-none"
              >
                <img
                  src="https://ahaanmedia.com/asc/layouts/usalogo.gif"
                  alt="USA Flag"
                  className="flag-icon me-2"
                />
                <span className="text-muted fw-bold flag-content">
                  +1 321 421 0740
                </span>
              </a>
            </div>

            {/* Enquiry Button */}
            <div>
              <button
                type="button"
                className="btn custom-button enquiry-button d-flex align-items-center justify-content-center"
                onClick={toggleForm}
              >
                {/* React Icon: typically handles its own sizing via CSS */}
                <BiChat className="enquiry-icon" />

                {/* Text: visible on tablet & desktop */}
                <span className="enquiry-text ms-1">Enquiry Now</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {showForm && <PopUp onClose={toggleForm} />}
    </>
  );
};

export default ResponsiveNavbar;