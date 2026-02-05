import { useState, useEffect } from "react";
import {
  FaBeer,
  FaLaptopCode,
  FaDatabase,
  FaShoppingCart,
  FaDev,
  FaVials,
} from "react-icons/fa";
import "./ThirdSection.css";

import Frontend from "./templates/Frontend";
import UIUX from "./templates/Uiux";
import Backend from "./templates/Backend";
import CMS from "./templates/Cms";
import DevOps from "./templates/Devops";
import Testing from "./templates/Testing";

const TabBar = () => {
  const [activeKey, setActiveKey] = useState("uiux");
  const tabs = ["uiux", "frontend", "backend", "cms", "devops", "testing"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveKey((prevKey) => {
        const currentIndex = tabs.indexOf(prevKey);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 1000000); // Note: 1,000,000ms is about 16 minutes
    return () => clearInterval(interval);
  }, []);

  // Helper to render component based on state
  const renderTabContent = () => {
    switch (activeKey) {
      case "frontend": return <Frontend />;
      case "uiux": return <UIUX />;
      case "backend": return <Backend />;
      case "cms": return <CMS />;
      case "devops": return <DevOps />;
      case "testing": return <Testing />;
      default: return <UIUX />;
    }
  };

  return (
    <div className="container">
      <div className="mt-5 section-header-tech">
        <h6 className="subtitle">
          Technology Use <span className="divider"></span>
        </h6>
        <label className="title">Our Technology Use</label>
        <p className="image-carousel-content">
          The success of our services depends on a perfectly laid-out process
          from the beginning to the end. And, we put YOU at the centre of
          everything we do, turning our promises into reality! We specialize in
          transforming business operations through the power of human and tech
          collaboration.
        </p>
      </div>

      <div className="row our-tech-tab flex-column flex-sm-row tab-mobile-row">
        {/* Navigation Column */}
        <div className="col-4 col-sm-3 tabs-col-tech mobile-tab-nav">
          <ul className="nav nav-pills flex-column tech-col-navbar justify-content-start">
            <li className="nav-item nav-item-tab">
              <button
                className={`nav-link nav-link-tab w-100 text-start border-0 ${activeKey === "uiux" ? "active" : ""}`}
                onClick={() => setActiveKey("uiux")}
              >
                <FaBeer className="nav-icon" />
                <span className="d-none d-sm-inline ms-2"> UI/UX </span>
              </button>
            </li>
            <li className="nav-item nav-item-tab">
              <button
                className={`nav-link nav-link-tab w-100 text-start border-0 ${activeKey === "frontend" ? "active" : ""}`}
                onClick={() => setActiveKey("frontend")}
              >
                <FaLaptopCode className="nav-icon" />
                <span className="d-none d-sm-inline ms-2"> FrontEnd </span>
              </button>
            </li>
            <li className="nav-item nav-item-tab">
              <button
                className={`nav-link nav-link-tab w-100 text-start border-0 ${activeKey === "backend" ? "active" : ""}`}
                onClick={() => setActiveKey("backend")}
              >
                <FaDatabase className="nav-icon" />
                <span className="d-none d-sm-inline ms-2"> BackEnd </span>
              </button>
            </li>
            <li className="nav-item nav-item-tab">
              <button
                className={`nav-link nav-link-tab w-100 text-start border-0 ${activeKey === "cms" ? "active" : ""}`}
                onClick={() => setActiveKey("cms")}
              >
                <FaShoppingCart className="nav-icon" />
                <span className="d-none d-sm-inline ms-2"> CMS </span>
              </button>
            </li>
            <li className="nav-item nav-item-tab">
              <button
                className={`nav-link nav-link-tab w-100 text-start border-0 ${activeKey === "devops" ? "active" : ""}`}
                onClick={() => setActiveKey("devops")}
              >
                <FaDev className="nav-icon" />
                <span className="d-none d-sm-inline ms-2"> DevOps </span>
              </button>
            </li>
            <li className="nav-item nav-item-tab">
              <button
                className={`nav-link nav-link-tab w-100 text-start border-0 ${activeKey === "testing" ? "active" : ""}`}
                onClick={() => setActiveKey("testing")}
              >
                <FaVials className="nav-icon" />
                <span className="d-none d-sm-inline ms-2"> Testing </span>
              </button>
            </li>
          </ul>
        </div>

        {/* Content Column */}
        <div className="col-8 col-sm-9 tabs-col-tech tab-content-mobile">
          <div className="tab-content tech-tab-content">
            <div className="tab-pane fade show active">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
      <hr style={{ border: "none" }} />
    </div>
  );
};

export default TabBar;