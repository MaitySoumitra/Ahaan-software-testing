import React from "react";
// Removed Container, Row, Col, Card imports
import "./TabContent.css";

const gridcontent = [
  {
    imgSrc: "https://ahaanmedia.com/asc/Industry/BoostYourGrowth.webp",
    title: 'Boost Your Growth ',
    description: 'Boost your retail stores digital presence and meet evolving market demands with our innovative, user-centric e-commerce development services—designed to scale your business.'
  },
  {
    imgSrc: "https://ahaanmedia.com/asc/Industry/GainMoreOnlineVisibility.webp",
    title: 'Gain More Online Visibility ',
    description: 'We create lucrative, visually compelling e-storefronts that enhance your retail store’s digital presence, attract millennial shoppers, and redefine their shopping experience.'
  },
  {
    imgSrc: "https://ahaanmedia.com/asc/Industry/StreamlineComplexInventoryOperations.png",
    title: 'Streamline Complex Inventory Operations ',
    description: 'Get a customized e-store and inventory management solution to monitor, manage, and procure store items in real-time. Stay ahead of the competition by streamlining retail processes and enhancing operational efficiency.'
  },
  {
    imgSrc: "https://ahaanmedia.com/asc/Industry/FlexiblePaymentOptions.jpg",
    title: 'Flexible Payment Options ',
    description: 'Empower your customers with flexible payment options through seamless payment gateway integration, boosting sales closure rates with our e-commerce app and software development services.'
  },
  {
    imgSrc: "https://ahaanmedia.com/asc/Industry/RedefineBuyingExperience.webp",
    title: 'Redefine Buying Experience ',
    description: 'Leverage AI-powered product search to display personalized buying options based on user activity, improving their overall shopping experience with custom-tailored recommendations.'
  }
];

const Ecommerce = () => {
  return (
    <div className="ecommerce-section container-fluid p-0">
      <h2 className="fw-bold">Your Trusted Growth Partner for E-commerce Development Solutions</h2>
      <p className="text-muted">
        As the experience economy evolves, we envision a future where online shopping transcends mere transactions—transforming into interactive, immersive experiences that captivate, engage, and inspire. In this next-generation E-store, each visit is more than just a purchase; it’s a personalized experience that redefines digital retail. 
      </p>
      
      <img 
        src="https://ahaanmedia.com/asc/Industry/Ecomm.png" 
        alt="E-Commerce Solutions" 
        className="img-fluid content-image mb-4 w-100 rounded shadow-sm" 
      />

      <h2 className="fw-bold text-start Revitalize mt-3">
        Unlock Your Retail Business’ Full Potential 
      </h2>
      <p className="text-start text-muted">
        Whether you need an e-commerce app to enhance B2C engagement, a B2B portal to connect manufacturers and wholesalers, or a powerful retail ERP to streamline operations, we’ve got you covered! Partner with us to expand your e-business reach and grow your market share with scalable, flexible e-commerce solutions!
      </p>

      <h2 className="fw-bold text-start Revitalize mt-4 mb-4">
        Conquer Retail Challenges With Custom E-Commerce Solutions
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

export default Ecommerce;