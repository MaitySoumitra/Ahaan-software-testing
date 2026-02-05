import React from "react";
// Removed react-bootstrap imports
import "./TabContent.css";

const gridcontent = [
  {
    imgSrc: "https://ahaanmedia.com/asc/Industry/grids-image1.png",
    title: 'Project Management Solutions',
    description: 'Enhance efficiency with advanced project management software, ensuring seamless scheduling, planning, and real-time collaboration for improved productivity and on-time delivery.'
  },
  {
    imgSrc: "https://ahaanmedia.com/asc/Industry/grids-image2.png",
    title: 'Construction Site Automation',
    description: 'Leverage automation and IoT-driven solutions to streamline site operations, monitor equipment, and enhance workforce productivity with real-time insights and predictive maintenance.'
  },
  {
    imgSrc: "https://ahaanmedia.com/asc/Industry/grids-image3.png",
    title: 'Building Information Modelling (BIM) Solutions',
    description: 'Optimize design, planning, and execution with cutting-edge BIM solutions, allowing for cost estimation, better visualization, and coordination across construction teams.'
  },
  {
    imgSrc: "https://ahaanmedia.com/asc/Industry/grids-image4.png",
    title: 'Safety & Compliance Management',
    description: 'Ensure workplace safety and regulatory compliance with AI-powered risk assessment tools, real-time safety monitoring, and automated reporting systems to minimize hazards.'
  },
];

const Construction = () => {
  return (
    <div className="ecommerce-section container-fluid p-0">
      <h2 className="fw-bold">Streamline Construction Operations With Smart Digital Solutions!</h2>
      <p className="text-muted">
        Achieve new level of agility with our tech-powered solutions, precisely tailored to the construction industry. Whether you're streamlining project management, optimizing resource allocation, or enhancing site safety, our custom solutions help you build smarter, faster, and safer! 
      </p>
      
      <img 
        src="https://ahaanmedia.com/asc/Industry/Construction.png" 
        alt="Construction Solutions" 
        className="img-fluid content-image mb-4 w-100 rounded shadow-sm" 
      />

      <h2 className="fw-bold text-start Revitalize mt-3">
        Embrace The Tech-Powered Future Of Construction
      </h2>
      <p className="text-start text-muted">
        Scaling tech transformation for construction companies is no longer optional – it’s necessary! At Ahaan Software Consulting, we go beyond just providing construction technology solutions—we empower contractors, engineers and developers with advanced digital tools to optimize workflows, reduce costs, and drive project success.
      </p>

      <h2 className="fw-bold text-start Revitalize mt-4 mb-4">
        Unlock Big Uplifts In Construction With Our Solutions 
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

export default Construction;