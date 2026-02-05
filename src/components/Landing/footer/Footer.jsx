import React, { useRef } from 'react';
// Removed Container, Row, Col from react-bootstrap
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Footer.css';

const Footer = () => {
  const form = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const serviceID = "service_d4lc4tg";
    const templateID = "template_f6yg4p4";
    const publicKey = "P1psK0y5kXFayHDDA";

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Message sent successfully!");
        reset();
      })
      .catch((error) => {
        console.log("FAILED...", error);
        toast.error("Failed to send message. Try again!");
      });
  };

  return (
    <footer
      className="footer py-5"
      style={{
        backgroundImage: 'url("https://ahaanmedia.com/asc/Landing/landing-footer-background.png")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
    >
      <div className="container">
        <div className="row gy-4">
          {/* Logo & Social Links */}
          <div className="col-lg-4 col-md-6 col-sm-12 footer-section text-start">
            <a href='https://ahaansoftware.com/' className="d-inline-block">
              <img src="https://ahaanmedia.com/asc/layouts/asc.png" alt="Logo" className="footer-logo mb-3" />
            </a>
            <p className="footer-subtitle">
              Top IT Consulting Company Delivering Custom Website and App at Ahaan Software Consulting.
            </p>
            <p className="fw-bold mb-2">Find Us On:</p>
            <div className="social-icons d-flex gap-3">
              <a href="https://www.facebook.com/ahaansoftwareconsulting" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://www.linkedin.com/company/ahaansoftware" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://www.instagram.com/ahaansoftware/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>

          {/* Address & Contact */}
          <div className="col-lg-4 col-md-6 col-sm-12 footer-section">
            <h3 className="footer-text mb-3">Get In Touch</h3>
            <p className="d-flex align-items-start gap-2">
              <FaLocationDot className="mt-1" />
              <span>Bengal Eco Intelligent Park, EM Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091</span>
            </p>
            <p className="d-flex align-items-center gap-2">
              <FaPhone /> +91 8981744661
            </p>
            <p className="d-flex align-items-center gap-2">
              <IoMdMail /> sales@ahaansoftware.com
            </p>
          </div>

          {/* Inquiry Form */}
          <div className="col-lg-4 col-md-12 col-sm-12 footer-form">
            <h2 className="form-heading mb-3">ENQUIRE NOW FOR WEBSITE DEVELOPMENT</h2>
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
              <div className="row mb-3">
                <div className="col-12 col-sm-6 mb-3 mb-sm-0">
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    placeholder="Name"
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="tel"
                    {...register("phoneNumber", {
                      required: "Phone Number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Must be exactly 10 digits",
                      },
                    })}
                    className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                    placeholder="Phone Number"
                  />
                  {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber.message}</div>}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-12 col-sm-6 mb-3 mb-sm-0">
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="Email"
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    {...register("companyName", { required: "Company Name is required" })}
                    className={`form-control ${errors.companyName ? 'is-invalid' : ''}`}
                    placeholder="Company Name"
                  />
                  {errors.companyName && <div className="invalid-feedback">{errors.companyName.message}</div>}
                </div>
              </div>

              <div className="mb-3">
                <textarea
                  {...register("message", { required: "Message is required" })}
                  className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                  rows="4"
                  placeholder="What are your requirements?"
                ></textarea>
                {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
              </div>

              <button type="submit" className="btn btn-primary w-100 py-2 fw-bold">Get a Free Quote</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </footer>
  );
};

export default Footer;