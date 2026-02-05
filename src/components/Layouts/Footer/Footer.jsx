import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaAngleDown } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { BsCheckLg } from "react-icons/bs";
import { toast } from "react-toastify"; // Ensure toast is imported
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaFileAlt, FaTruck, FaGavel } from "react-icons/fa";
import "./Footer.css";
import shape1 from "/3dicons1.png";
import shape2 from "/3dicons3.png";

const Footer = () => {
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  const [isContactUsOpen, setIsContactUsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onSubmit = (data) => {
    const serviceID = "service_d4lc4tg";
    const templateID = "template_k2044k9";
    const publicKey = "P1psK0y5kXFayHDDA";

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then((response) => {
        toast.success("Message sent successfully!");
        reset();
      })
      .catch((error) => {
        toast.error("Failed to send message. Try again!");
      });
  };

  return (
    <footer
      className="footer-main"
      style={{
        backgroundImage: "url('https://ahaanmedia.com/asc/layouts/Footer-Banner.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        padding: "150px 0 20px 0",
      }}
    >
      {/* Decorative floating shapes */}
      <img src={shape2} alt="shape-1" className="footer-shape shape-one" />
      <img src={shape1} alt="shape-2" className="footer-shape shape-two" />

      <div className="container">
        <div className="row">
          {/* Logo & Newsletter */}
          <div className="col-md-3">
            <div className="footer-logo-input">
              <img
                src="https://ahaanmedia.com/asc/layouts/asc.png"
                alt="Ahaan Logo"
                className="footer-logos"
              />
              <p className="newsletter-text">
                Subscribe to our newsletter to find out about all our latest offers.
              </p>
            </div>
            
            {/* Standard HTML Form with Bootstrap Classes */}
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-2">
                <input
                  type="email"
                  placeholder="Email ID"
                  className={`form-control custom-input-bootstrap ${errors.email ? "is-invalid" : ""}`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <div className="invalid-feedback">
                    {errors.email.message}
                  </div>
                )}
              </div>

              <div className="d-flex justify-content-start flex-col">
                <button type="submit" className="newsletter-button">
                  <span>Submit</span>
                </button>
              </div>
            </form>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 quicklink-responsive">
            <button
              className="accordion-button-quick-link d-md-none"
              onClick={() => setIsQuickLinksOpen(!isQuickLinksOpen)}
              aria-expanded={isQuickLinksOpen}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
                padding: "10px",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <h5 className="footer-heading m-0">QUICK LINKS</h5>
              <FaAngleDown
                className={`accordion-icon ${isQuickLinksOpen ? "open" : ""}`}
                style={{ marginLeft: "auto", color: "#fff" }}
              />
            </button>
            <ul className={`footer-links ${isQuickLinksOpen ? "open" : ""} d-md-block list-unstyled`}>
              <li className="quick-link-for-desktop">
                <h5 className="footer-heading">Quick Links</h5>
              </li>
              <li>
                <a href="../../../assets/privacy/Privacy Policy.docx" download className="text-decoration-none">
                  <FaFileAlt className="quick-icon" /> Privacy Policy
                </a>
              </li>
              <li>
                <a href="../../../assets/privacy/Shipping Policy.docx" download className="text-decoration-none">
                  <FaTruck className="quick-icon" /> Shipping Policy
                </a>
              </li>
              <li>
                <a href="../../../assets/privacy/Terms and Conditions.docx" download className="text-decoration-none">
                  <FaGavel className="quick-icon" /> Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Pages */}
          <div className="col-md-3 quicklink-responsive">
            <button
              className="accordion-button-quick-link d-md-none"
              onClick={() => setIsPagesOpen(!isPagesOpen)}
              aria-expanded={isPagesOpen}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
                padding: "10px",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <h5 className="footer-heading m-0">PAGES</h5>
              <FaAngleDown
                className={`accordion-icon ${isPagesOpen ? "open" : ""}`}
                style={{ marginLeft: "auto", color: "#fff" }}
              />
            </button>

            <ul className={`footer-links ${isPagesOpen ? "open" : ""} d-md-block list-unstyled`}>
              <li className="quick-link-for-desktop">
                <h5 className="footer-heading">Pages</h5>
              </li>
              <li>
                <a href="/" className="text-decoration-none">
                  <BsCheckLg className="quick-icon" /> Home
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-decoration-none">
                  <BsCheckLg className="quick-icon" /> Portfolio
                </a>
              </li>
              <li>
                <a href="/services" className="text-decoration-none">
                  <BsCheckLg className="quick-icon" /> Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-decoration-none">
                  <BsCheckLg className="quick-icon" /> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-md-3">
            <button
              className="accordion-button d-md-none"
              onClick={() => setIsContactUsOpen(!isContactUsOpen)}
              aria-expanded={isContactUsOpen}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
                padding: "10px",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <h5 className="footer-heading m-0 flex-grow-1 text-start">CONTACT US</h5>
              <FaAngleDown
                className={`accordion-icon ${isContactUsOpen ? "open" : ""}`}
                style={{ marginLeft: "auto", color: "#fff" }}
              />
            </button>

            <div className={`accordion-content ${isContactUsOpen ? "open" : ""} d-md-block`}>
              <h5 className="contact-us-heading-for-desktop footer-heading">Contact Us</h5>
              <ul className="contact-info list-unstyled">
                <li className="d-flex align-items-start flex-nowrap mb-2">
                  <FaMapMarkerAlt className="me-2 flex-shrink-0 footer-icon mt-1" />
                  <span className="add">
                    Bengal Eco Intelligent Park, EM Block, Sector V, Kolkata-700 091
                  </span>
                </li>
                <li className="d-flex align-items-center flex-nowrap mb-2">
                  <FaPhoneAlt className="me-2 flex-shrink-0 footer-icon" />
                  <span className="d-flex flex-wrap gap-1 add">
                    <a href="https://wa.me/13214210740" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white">
                      +1-321-421-0740
                    </a>
                    <span>/</span>
                    <a href="https://wa.me/919830371143" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white">
                      +91-983-037-1143
                    </a>
                    <span>/</span>
                    <a href="https://wa.me/6590745876" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white">
                      +65-9074-5876
                    </a>
                  </span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaEnvelope className="me-2 flex-shrink-0 footer-icon" />
                  <a href="mailto:support@ahaansoftware.com" className="text-decoration-none text-white">
                    support@ahaansoftware.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom mt-4 pt-3 border-top border-secondary">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="footer-bottom-text mb-0 text-start" style={{ color: "#a3a3a3" }}>
                {isMobile ? "© 2025 Ahaan Software Consulting" : "© 2025 Ahaan Software, All rights reserved."}
              </p>
            </div>
            <div className="col-md-6 text-md-end text-center mt-3 mt-md-0">
              <div className="footer-social-icons d-inline-flex gap-3">
                <a href="https://www.facebook.com/ahaansoftwareconsulting" target="_blank" rel="noopener noreferrer" className="icon facebook text-white">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/ahaansoftware/" target="_blank" rel="noopener noreferrer" className="icon instagram text-white">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/company/ahaansoftware" target="_blank" rel="noopener noreferrer" className="icon linkedin text-white">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;