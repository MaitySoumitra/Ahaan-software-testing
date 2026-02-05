import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { FaHome, FaMapMarkerAlt, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";

import "react-toastify/dist/ReactToastify.css";
import "./ContactUs.css";
import WorldMap from "./WorldMap";
import ContactBanner from "./ContactBanner";
import { createContact } from "../../../Api/api";

const ContactUs = () => {
  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
    clearErrors,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // SAVE TO BACKEND (MongoDB)
      await createContact(data);

      // SEND EMAILJS
      const serviceID = "service_d4lc4tg";
      const templateID = "template_k2044k9";
      const publicKey = "P1psK0y5kXFayHDDA";

      await emailjs.sendForm(serviceID, templateID, form.current, publicKey);

      toast.success("Message sent & saved successfully!");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Failed! Try again.");
    }
  };

  const handlePhoneInput = (e) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) {
      setError("phone", {
        type: "manual",
        message: "Put numbers only",
      });
    } else {
      clearErrors("phone");
    }
  };

  return (
    <>
      <ContactBanner />
      <div className="container contact-section">
        <div className="shadow-lg rounded-3 overflow-hidden">
          <div className="row g-0 contact-box">
            
            {/* Left Side - Contact Info */}
            <div className="col-md-4 contact-information p-4 p-lg-5">
              <h5 className="contact-text">LET'S TALK</h5>
              <h2 className="contact-heading whychooseus-label mb-4">
                Speak With Expert Engineers.
              </h2>

              <div className="contact-item d-flex align-items-start mb-4">
                <FaHome className="contact-icon me-3 mt-1" />
                <div>
                  <strong>Email:</strong>
                  <p className="mb-0">support@ahaansoftware.com</p>
                </div>
              </div>

              <div className="contact-item d-flex align-items-start mb-4">
                <FaPhoneVolume className="contact-icon me-3 mt-1" />
                <div>
                  <strong>Phone:</strong>
                  <p className="mb-1">
                    <a href="https://wa.me/13214210740" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                      +1 321 421 0740
                    </a>
                  </p>
                  <p className="mb-1">
                    <a href="https://wa.me/919830371143" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                      +91 98303 71143
                    </a>
                  </p>
                  <p className="mb-0">
                    <a href="https://wa.me/6590745876" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                      +65 9074 5876
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item d-flex align-items-start mb-4">
                <FaMapMarkerAlt className="contact-icon me-3 mt-1" />
                <div>
                  <strong>Address:</strong>
                  <p className="mb-0">
                    Bengal Eco Intelligent Park, EM Block, Sector V,
                    Bidhannagar, Kolkata, West Bengal 700091
                  </p>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="contact-social d-flex gap-2 mt-4">
                <a href="https://www.linkedin.com/company/ahaansoftware" target="_blank" rel="noopener noreferrer" className="contact-social-icons linkedin">
                  <FaLinkedinIn />
                </a>
                <a href="https://www.facebook.com/ahaansoftware" target="_blank" rel="noopener noreferrer" className="contact-social-icons facebook">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/ahaansoftware" target="_blank" rel="noopener noreferrer" className="contact-social-icons instagram">
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="col-md-8 contact-form p-4 p-lg-5 bg-white">
              <h5 className="contact-text">GET IN TOUCH</h5>
              <h2 className="title mb-4">Fill The Form Below</h2>

              <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      placeholder="Enter your name"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email ID</label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="name@example.com"
                      {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone No.</label>
                    <input
                      type="tel"
                      className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                      placeholder="Numbers only"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{7,15}$/,
                          message: "Please enter a valid phone number",
                        },
                        onChange: handlePhoneInput,
                      })}
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Website</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="https://..."
                      {...register("website")}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Drop Your Message</label>
                  <textarea
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                    rows="4"
                    {...register("message", { required: "Message is required" })}
                  ></textarea>
                  {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
                </div>

                <button type="submit" className="newsletter-button contact-us-submit-btn mt-3">
                  <span>Submit Now</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
      <WorldMap />
    </>
  );
};

export default ContactUs;