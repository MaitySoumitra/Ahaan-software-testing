import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./CaseStudyCarousel.css";
import img1 from "../../../assets/texture/1.jpg";
import img2 from "../../../assets/texture/2.jpg";
import img3 from "../../../assets/texture/3.jpg";
import img4 from "../../../assets/texture/4.jpg";
import img5 from "../../../assets/texture/5.jpg";
import img6 from "../../../assets/texture/6.jpg";
import img7 from "../../../assets/texture/7.jpg";
import img8 from "../../../assets/texture/8.jpg";
import img9 from "../../../assets/texture/9.jpg";
import img10 from "../../../assets/texture/10.jpg";

const CaseStudyCarousel = () => {
  const slides = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  return (
    <section className="case-section mb-2 mb-lg-5 py-2 py-lg-5">
      <Container>
        <Row className=" text-center mb-4">
          <Col>
            <div className="section-header-tech">
              <p className="subtitle">
                view our portfolio <span className="divider"></span>
              </p>
            </div>
            <p className="title" style={{ textAlign: "left", color: "#fff" }}>
              Case Study
            </p>
            <p className="text-start">
              We understand, collaborate, and empower! experience how our
              next-gen IT consulting can transform your business.
            </p>
          </Col>
        </Row>

        {/* 🔹 Infinite Marquee Wrapper */}
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {/* Render twice for seamless looping */}
            {[...slides, ...slides].map((img, index) => (
              <div
                className="case-card"
                key={index}
                style={{ marginTop: index % 2 === 0 ? "40px" : "0px" }}
              >
                <img src={img} alt={`Case ${index}`} />
              </div>
            ))}
          </div>
        </div>

        
          <a href="/portfolio" className=" newsletter-button"> <span>View All</span></a>
        
      </Container>

    
    </section>
  );
};

export default CaseStudyCarousel;
