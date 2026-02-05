import React from 'react';
// Removed Container, Row, Col imports
import { TbDeviceDesktopCode } from "react-icons/tb";
import { ImMobile } from "react-icons/im";
import { TiShoppingCart } from "react-icons/ti";
import { TiSocialGooglePlus } from "react-icons/ti";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaQuidditch } from "react-icons/fa";
import './Service.css';

const services = [
  {
    icon: <TbDeviceDesktopCode />,
    title: 'Web Development',
    description: 'We craft agile, scalable & budget-friendly websites tailored for success!',
  },
  {
    icon: <ImMobile/>,
    title: 'Mobile App Development',
    description: 'Go mobile with our custom app solutions for anywhere-anytime access!',
  },
  {
    icon: <TiShoppingCart />,
    title: 'E-commerce Development',
    description: 'Supercharge your e-business with optimal channels, product optimizations & marketing models. ',
  },
  {
    icon: <FaQuidditch />,
    title: 'UI/UX Design',
    description: 'UI/UX defines success—our designs are user-centric, practical & intuitive.',
  },
  {
    icon: <IoShareSocialSharp />,
    title: 'Social Media Marketing',
    description: 'Build community & spark conversation through insight-driven & sustainable strategies. ',
  },
  {
    icon: <TiSocialGooglePlus />,
    title: 'Google Marketing',
    description: 'Boost visibility our expert Google marketing strategies for maximum growth.',
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        {/* Heading */}
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="services-heading">Services We Offer</h2>
          </div>
        </div>

        {/* Service Cards */}
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
              <div className="service-card text-center h-100">
                <div className="service-icon mb-3">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;