import React from "react";
// Removed Container, Row, Col, Image imports
import "./FirstSection.css";

const clients = [
  { src: "https://ahaanmedia.com/asc/client/1.png", alt: "EKYAA" },
  { src: "https://ahaanmedia.com/asc/client/2.png", alt: "LOGIX" },
  { src: "https://ahaanmedia.com/asc/client/3.png", alt: "Fs" },
  { src: "https://ahaanmedia.com/asc/client/4.png", alt: "Helli" },
  { src: "https://ahaanmedia.com/asc/client/5.png", alt: "Jazzyln Nolen" },
  { src: "https://ahaanmedia.com/asc/client/6.png", alt: "NextDoor Urgent Care" },
];

const FirstSection = () => {
  return (
    <div className="container selected-clients section-header-tech">
      <h6 className="subtitle">
        Trusted Client <span className="divider"></span>
      </h6>
      <label className="title">Our Clients</label>
      <p className="image-carousel-content">
        We understand, collaborate, and empower! From complex Software
        Development Service to Seamless Integration, experience how our next-gen
        IT consulting and software solutions can transform and accelerate your
        business.
      </p>

      {/* Grid Layout using Standard Bootstrap Row/Col classes */}
      <div className="row mt-4 g-3">
        {clients.map((client, index) => (
          <div key={index} className="col-4 col-md-2 text-center">
            <div className="first-client-col">
              <img
                src={client.src}
                alt={client.alt}
                className="img-fluid first-client-image"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstSection;