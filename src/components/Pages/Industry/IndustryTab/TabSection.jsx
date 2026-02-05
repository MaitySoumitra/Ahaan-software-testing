import React, { useState } from "react";
// Removed Container, Row, Col from react-bootstrap
import "./TabSection.css";
import Ecommerce from "./Ecommerce";
import Education from "./Education";
import Travel from "./Travel";
import Social from "./Social";
import Healthcare from "./Healthcare";
import RealEstate from "./RealEstate";
import Construction from "./Construction";
import Logistics from "./Logistics";
import Manufacturing from "./Manufacturing";
import Media from "./Media";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("E-Commerce");

  const tabs = [
    "E-Commerce",
    "Education",
    "Travel & Hospitality",
    "Social Networking",
    "Healthcare",
    "Real Estate",
    "Construction",
    "Logistics",
    "Manufacturing",
    "Media & Entertainment",
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "E-Commerce":
        return <Ecommerce />;
      case "Education":
        return <Education />;
      case "Travel & Hospitality":
        return <Travel />;
      case "Social Networking":
        return <Social />;
      case "Healthcare":
        return <Healthcare />;
      case "Real Estate":
        return <RealEstate />;
      case "Construction":
        return <Construction />;
      case "Logistics":
        return <Logistics />;
      case "Manufacturing":
        return <Manufacturing />;
      case "Media & Entertainment":
        return <Media />;
      default:
        return <Ecommerce />;
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        {/* Sidebar Column */}
        <div className="col-md-3">
          <div className="tabs-list d-flex flex-column gap-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab-btn text-start border-0 ${
                  activeTab === tab ? "active" : ""
                }`}
                onClick={() => setActiveTab(tab)}
                type="button"
              >
                {tab} {activeTab === tab && <span className="ms-auto">→</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Content Column */}
        <div className="col-md-9 mt-4 mt-md-0">
          <div className="tab-content border-start ps-md-4">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabSection;