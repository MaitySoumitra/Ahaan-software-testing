import React from "react";
// Removed Container, Row, Col, Card from react-bootstrap
import "./TabContent.css";

const gridcontent = [
  {
    imgSrc: "https://ahaanmedia.com/asc/Industry/grids-image1.png",
    title: 'Integrated Property Management Systems',
    description: 'Streamline operations with our comprehensive solutions, including property management, CRM, marketing automation, asset/portfolio management, and more! '
  },
  {
    imgSrc: "https://ahaanmedia.com/asc/Industry/grids-image2.png",
    title: 'Analytics & Reporting',
    description: 'We leverage advanced dashboards for performance tracking, market analysis, lease metrics, and financial insights, empowering data-driven decision-making.'
  },
  {
    imgSrc: "https://ahaanmedia.com/asc/Industry/Security & Compliance.webp", // Updated consistent path style
    title: 'Security & Compliance',
    description: 'We provide robust security measures, data encryption, and compliance support with industry standards like GDPR and the Fair Housing Act, ensuring tenant privacy and regulatory adherence.'
  },
];

const RealEstate = () => {
  return (
    <div className="ecommerce-section container-fluid p-0">
      <h2 className="fw-bold">Transform Real Estate With Cutting-Edge Digital Solutions</h2>
      <p className="text-muted">
        The real estate and property management industry revolves around property transactions, asset management, and driving rental business growth worldwide. Ahaan Software Consulting specializes in crafting bespoke tech, IT, and custom software solutions designed to empower property managers, real estate agencies, and developers.
      </p>
      
      <img 
        src="https://ahaanmedia.com/asc/Industry/RealEstate.png" 
        alt="Real Estate Solutions" 
        className="img-fluid content-image mb-4 w-100" 
      />

      <h2 className="fw-bold text-start Revitalize mt-3">
        Innovate. Elevate. Collaborate. Bring Your Real Estate Vision To Life!
      </h2>
      <p className="text-start text-muted">
        Partner with us to enhance real estate operations with real-time monitoring, predictive maintenance, and smart building solutions. Leveraging IoT, mobile apps, and digital innovations, we forge customer satisfaction with elevated efficiency and excellence. Strengthen security with robust cybersecurity, access control, and cloud solutions to protect data, assets, and tenant privacy.
      </p>

      <h2 className="fw-bold text-start Revitalize mt-4 mb-4">
        Some Of The Key Features Of Our Offerings!
      </h2>

      {gridcontent.map((feature, index) => (
        <div className="row mb-5 align-items-center" key={index}>
          {/* Image Column */}
          <div className={`col-12 col-md-6 ${index % 2 === 1 ? 'order-md-2 order-1' : 'order-md-1 order-1'}`}>
            <img 
              src={feature.imgSrc} 
              alt={feature.title} 
              className="img-fluid mb-3 rounded shadow-sm" 
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

export default RealEstate;