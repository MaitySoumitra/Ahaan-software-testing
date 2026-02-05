import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Banner.css";

const Banner = () => {
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
    <section
      className="banner-section"
      style={{ backgroundImage: `url(https://ahaanmedia.com/asc/Landing/LandingBanner.jpg)` }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Text Content */}
          <div className="col-md-6 left-side text-white">
            <h1 className="banner-heading fade-in-left">
              Build Your Dream Website and App with Ahaan Software
            </h1>
            <p className="banner-subheading fade-in-up">
              Are you looking for experienced web developers who can build your
              dream website?
            </p>
            <p className="banner-subheading fade-in-up">
              From design to development, our creative team is here to give your
              business a new look. More than 7 years of experienced web
              developers with a 110+ team. Knock on our door for deploying any
              kind of website for your business.
            </p>
            <a
              href="https://ahaansoftware.com/"
              className="btn btn-banner fade-in-up"
            >
              Learn More
            </a>
          </div>

          {/* Right Side - Form */}
          <div className="col-md-6 right-side fade-in-right">
            <div className="form-container bg-white p-4 rounded shadow">
              <h2 className="form-heading mb-4 text-center">
                ENQUIRE NOW FOR WEBSITE DEVELOPMENT
              </h2>

              <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                {/* Name & Phone */}
                <div className="row mb-3">
                  <div className="col-12 col-sm-6 mb-3 mb-sm-0">
                    <input
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      placeholder="Name"
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name.message}</div>
                    )}
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
                    {errors.phoneNumber && (
                      <div className="invalid-feedback">
                        {errors.phoneNumber.message}
                      </div>
                    )}
                  </div>
                </div>

                {/* Email & Company */}
                <div className="row mb-3">
                  <div className="col-12 col-sm-6 mb-3 mb-sm-0">
                    <input
                      type="email"
                      {...register("email", { required: "Email is required" })}
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="Email"
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email.message}</div>
                    )}
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      {...register("companyName", {
                        required: "Company Name is required",
                      })}
                      className={`form-control ${errors.companyName ? 'is-invalid' : ''}`}
                      placeholder="Company Name"
                    />
                    {errors.companyName && (
                      <div className="invalid-feedback">
                        {errors.companyName.message}
                      </div>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="mb-3">
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                    rows="4"
                    placeholder="What are your requirements?"
                  ></textarea>
                  {errors.message && (
                    <div className="invalid-feedback">{errors.message.message}</div>
                  )}
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-100 fw-bold">
                  Get a Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default Banner;