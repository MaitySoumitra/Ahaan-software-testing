import React, { useEffect, useState } from "react";
import "./BannerContent.css";
import {
  FiFigma,
  FiLayout,
  FiSmartphone,
  FiCode,
  FiGlobe,
} from "react-icons/fi";
import { SiAdobephotoshop, SiAdobeillustrator, SiWix } from "react-icons/si";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShopify } from "react-icons/si";  // Correct
import { SiWordpress } from "react-icons/si";
import { FaWebflow } from "react-icons/fa6";
import { SiFramer } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { FaJsSquare } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { IoIosAppstore } from "react-icons/io";
import { Link } from "react-router-dom";

// Map each service to its icons
const techIconsMap = {
  "UI/UX Designing": [
    { Icon: FiFigma, label: "Figma" },
    { Icon: SiFramer, label: "Framer" },
    { Icon: SiWix, label: "Wix" },
    { Icon: SiAdobephotoshop, label: "Photoshop" },
    { Icon: SiAdobeillustrator, label: "Illustrator" },
  ],
  "Web Development": [
    { Icon: IoLogoHtml5, label: "Html5" },
    { Icon: IoLogoCss3, label: "Css3" },
    { Icon: FaJsSquare, label: "Js" },
    { Icon: SiNextdotjs, label: "Next" },
    { Icon: FaReact, label: "React" },
    { Icon: FaNodeJs, label: "Node.js" },
    { Icon: FaDatabase, label: "MongoDB" },
    { Icon: RiTailwindCssFill, label: "Tailwind" },
  ],
"E-Com Development": [
  { Icon: FaWebflow, label: "Webflow" },
  { Icon: SiShopify, label: "Shopify" },
  { Icon: SiWordpress, label: "WordPress" },   // ← NEW
  { Icon: FaReact, label: "React" },
  { Icon: FaNodeJs, label: "Node.js" },
],
  "Shopify Development": [
    { Icon: SiShopify, label: "Shopify" },
    { Icon: FiCode, label: "Liquid" },
    { Icon: FiLayout, label: "Themes" },
    { Icon: FiSmartphone, label: "Mobile" },
  ],
  "App Development": [
    { Icon: FaReact, label: "React Native" },
    { Icon: FiSmartphone, label: "iOS" },
    { Icon: IoIosAppstore, label: "Android" },
    { Icon: FiGlobe, label: "Cross-Platform" },
  ],
  "Digital Marketing": [
    { Icon: FiGlobe, label: "SEO" },
    { Icon: FiLayout, label: "Ads" },
    { Icon: FiCode, label: "Analytics" },
    { Icon: FiSmartphone, label: "Social" },
  ],
};

const textPairs = [
  { title: "UI/UX Designing", subtitle: "Crafting intuitive and visually stunning user experiences." },
  { title: "Web Development", subtitle: "Building fast, responsive, and modern web solutions." },
  { title: "E-Com Development", subtitle: "Creating seamless eCommerce experiences that sell." },
  // { title: "Shopify Development", subtitle: "Empowering online stores with performance and beauty." },
  { title: "App Development", subtitle: "Developing powerful mobile and desktop applications." },
  // { title: "Digital Marketing", subtitle: "Driving growth through smart and creative campaigns." },
];

const BannerContent = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [fadeSubtitle, setFadeSubtitle] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

useEffect(() => {
  const currentText = textPairs[index].title;
  
  // 1. IMMEDIATE PAINT: On the very first render, show the subtitle immediately.
  // This satisfies the LCP check without waiting 1.5s for the title to type.
  if (index === 0 && !isDeleting) {
    setFadeSubtitle(true);
    // Optional: Show icons slightly faster too
    if (!showIcons) setShowIcons(true);
  }

  const typingSpeed = isDeleting ? 40 : 80; // Slightly faster for better UX

  const timer = setTimeout(() => {
    if (!isDeleting && displayText.length < currentText.length) {
      setDisplayText(currentText.substring(0, displayText.length + 1));
      
      // 2. GRADUAL REVEAL: For other slides, start fading in subtitle 
      // when typing is halfway done, rather than at the very end.
      if (displayText.length > currentText.length / 2) {
        setFadeSubtitle(true);
      }

    } else if (isDeleting && displayText.length > 0) {
      setDisplayText(currentText.substring(0, displayText.length - 1));
    } else if (!isDeleting && displayText.length === currentText.length) {
      // Stay on the completed text for a while
      setShowIcons(true); 
      setTimeout(() => setIsDeleting(true), 3000); 
    } else if (isDeleting && displayText === "") {
      // Reset for next slide
      setFadeSubtitle(false);
      setShowIcons(false);
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % textPairs.length);
    }
  }, typingSpeed);

  return () => clearTimeout(timer);
}, [displayText, isDeleting, index, showIcons]);

  const currentIcons = techIconsMap[textPairs[index].title] || [];

  return (
    <div className="content">
      {/* Typing Heading */}
      <h1 className="animated-heading">
        <span className="typed-text">{displayText}</span>
        <span className="cursor"></span>
      </h1>

      {/* Subtitle */}
      <p className={`animated-subtitle ${fadeSubtitle ? "visible" : ""}`}>
        {textPairs[index].subtitle}
      </p>

      {/* Tech Icons */}
      <div className={`banner-tech-icons ${showIcons ? "visible" : ""}`}>
        {currentIcons.map(({ Icon, label }, i) => (
          <div key={i} className="banner-tech-icon" title={label}>
            <Icon />
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <Link to="/contact" className="banner-btn">
        Get Started →
      </Link>
    </div>
  );
};

export default BannerContent;