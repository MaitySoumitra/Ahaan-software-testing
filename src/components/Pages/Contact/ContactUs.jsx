import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaHome, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";

import "react-toastify/dist/ReactToastify.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
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

    // SENDEMAILJS
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
 
  const handleKeyPress = (e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
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
      <Container className="contact-section">
        <div className="justify-content-center shadow-lg rounded-3">
          <Col >
            <Row className="contact-box">
              {/* Left Side */}
              <Col md={4} className="contact-information">
                <h5 className="contact-text">LET'S TALK</h5>
                <h2 className="contact-heading whychooseus-label">
                  Speak With Expert Engineers.
                </h2>
 
                <div className="contact-item">
                  <FaHome className="contact-icon" />
                  <div>
                    <strong>Email:</strong>
                    <p>support@ahaansoftware.com</p>
                  </div>
                </div>
 
                <div className="contact-item">
                  <FaPhoneVolume className="contact-icon" />
                  <div>
                    <strong>Phone:</strong>
                    <p>
                      <a
                        href="https://wa.me/13214210740"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-link"
                      >
                        +1 321 421 0740
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://wa.me/919830371143"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-link"
                      >
                        +91 98303 71143
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://wa.me/6590745876"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-link"
                      >
                        +65 9074 5876
                      </a>
                    </p>
                  </div>
                </div>
 
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <div>
                    <strong>Address:</strong>
                    <p>
                      Bengal Eco Intelligent Park, EM Block, Sector V,
                      Bidhannagar, Kolkata, West Bengal 700091
                    </p>
                  </div>
                </div>
 
                {/* Social Media Icons */}
                <div className="contact-social">
                  <a
                    href="https://www.linkedin.com/company/ahaansoftware"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-icons linkedin"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://www.facebook.com/ahaansoftware"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-icons facebook"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.instagram.com/ahaansoftware"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-icons instagram"
                  >
                    <FaInstagram />
                  </a>
 
                </div>
              </Col>
 
              {/* Right Side - Form */}
              <Col md={8} className="contact-form">
                <h5 className="contact-text"> GET IN TOUCH</h5>
                <h2 className="title">Fill The Form Below</h2>
 
                <Form ref={form} onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your name"
                          isInvalid={!!errors.name}
                          {...register("name", { required: "Name is required" })}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email ID</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="name@example.com"
                          isInvalid={!!errors.email}
                          {...register("email", { required: "Email is required" })}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone No.</Form.Label>
                        <Form.Control
                          type="tel"
                          placeholder="Numbers only"
                          isInvalid={!!errors.phone}
                          {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                              value: /^[0-9]{7,15}$/,
                              message: "Please enter a valid phone number",
                            },
                            onChange: handlePhoneInput,
                          })}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.phone?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Website</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="https://..."
                          {...register("website")}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Drop Your Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      isInvalid={!!errors.message}
                      {...register("message", { required: "Message is required" })}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.message?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <button type="submit" className="newsletter-button contact-us-submit-btn mt-3">
                    <span>Submit Now</span>
                  </button>
                </Form>
              </Col>
            </Row>
          </Col>
        </div>
      </Container>
 
      {/* Toast Notification Container */}
      <ToastContainer position="top-right" autoClose={3000} />
 
      <WorldMap />
    </>
  );
};
 
export default ContactUs;
 
  