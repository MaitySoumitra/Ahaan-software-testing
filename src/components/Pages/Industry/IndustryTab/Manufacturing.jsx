import React from "react";
// Removed react-bootstrap imports
import "./TabContent.css";

const gridcontent = [
  {
    imgSrc: "https://ahaanmedia.com/asc/Industry/grids-image1.png",
    title: 'Industrial Manufacturing Solutions ',
    description: 'To stay infallible against digital disruption, shifting customer demands, and evolving markets, manufacturing leaders must embrace smarter, more connected products and transition from selling physical goods to service-driven models. Ahaan Software Consulting empowers you to leverage cutting-edge technologies like machine learning, analytics, IoT, and blockchain for a future-ready manufacturing ecosystem.'
  },
  {
    imgSrc: "https://ahaanmedia.com/asc/Industry/grids-image2.png",
    title: 'Process Manufacturing Solutions ',
    description: 'At Ahaan Software Consulting, we help process manufacturers transition from isolated automation systems to fully connected, intelligent operations. Our solutions streamline production, reduce costs, optimize plant efficiency, and minimize environmental impact for a smarter, more sustainable future.'
  },
];

const Manufacturing = () => {
  return (
    <div className="ecommerce-section container-fluid p-0">
      <h2 className="fw-bold">Make The Digital Transition To Manufacturing</h2>
      <p className="text-muted">
        Automation, analytics, AI, integrated systems, and smart factories—our advanced digital manufacturing solutions empower modern manufacturers to make data-driven decisions in real time. Partner with us to build a more human-centric, sustainable, and resilient manufacturing enterprise!
      </p>
      
      <img 
        src="https://ahaanmedia.com/asc/Industry/Manufacturing.png" 
        alt="Digital Manufacturing" 
        className="img-fluid content-image mb-4 w-100 rounded shadow-sm" 
      />

      <h2 className="fw-bold text-start Revitalize mt-3">
        Creating A Transformative, Sustainable Ecosystem
      </h2>
      <p className="text-start text-muted">
        Ahaan Software Consulting partners with global manufacturers to adapt and thrive with future-forward solutions. Harnessing robust technologies like quantum computing, GenAI, etc., we strive to foster sustainable resilience, growth, and innovation, shaping a purpose-led manufacturing ecosystem. 
      </p>

      <h2 className="fw-bold text-start Revitalize mt-4 mb-4">
        Your Challenges, Our Solutions!
      </h2>

      {gridcontent.map((feature, index) => (
        <div className="row mb-5 align-items-center" key={index}>
          {/* Image Column */}
          <div className={`col-12 col-md-6 ${index % 2 === 1 ? 'order-md-2 order-1' : 'order-md-1 order-1'}`}>
            <img 
              src={feature.imgSrc} 
              alt={feature.title} 
              className="img-fluid mb-3 rounded shadow" 
            />
          </div>

          {/* Text Column */}
          <div className={`col-12 col-md-6 ${index % 2 === 1 ? 'order-md-1 order-2' : 'order-md-2 order-2'}`}>
            <div className="py-2">
              <h2 className="grids-heading">{feature.title}</h2>
              <p className="grids-content text-muted">{feature.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Manufacturing;