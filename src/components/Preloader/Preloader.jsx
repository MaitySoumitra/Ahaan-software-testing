import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = ({ isInitialLoad = false }) => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // If this is the initial site load, we can keep the fancy animation shorter
    // or remove the timer entirely to let the site render immediately.
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, isInitialLoad ? 1000 : 500); // Reduced from 2500ms

    return () => clearTimeout(timer);
  }, [isInitialLoad]);

  if (!showPreloader) return null;

  return (
    <div className="preloader-container">
       <div className="loader">
         <span>a</span><span>h</span><span>a</span><span>a</span><span>n</span>
       </div>
    </div>
  );
};

export default Preloader;
