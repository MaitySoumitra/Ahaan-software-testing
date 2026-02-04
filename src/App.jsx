import React, { Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";

import Header from "./components/Layouts/Header/Header";

import Footer from "./components/Layouts/Footer/Footer";
const Home = React.lazy(() => import("./components/Pages/Home/Home"));
const About = React.lazy(() => import("./components/Pages/AboutUs/About"));
const Service = React.lazy(() => import("./components/Pages/Service/Service"));
const Industry = React.lazy(() => import("./components/Pages/Industry/Industry"));
const Blog = React.lazy(() => import("./components/Pages/Blog/Blog"));
const Portfolios = React.lazy(() => import("./components/Pages/Portfolio/Portfolios"));
import Landing from "./components/Landing/Landing";
import WhatsAppChat from "./components/Whatsapp/WhatsAppChat";


import Preloader from "./components/Preloader/Preloader";
import BlogDetails from "./components/Pages/Blog/BlogDetails";

import SearchResults from "./components/Pages/Blog/SearchResults";

import AllDevelopment from "./components/Pages/Portfolio/Tabs-Templates/AllDevelopment";
import AllUiUxDesign from "./components/Pages/Portfolio/Tabs-Templates/AllUiUxDesign";

// Lazy load contact page
const ContactUs = React.lazy(() => import("./components/Pages/Contact/ContactUs"));

// AppContent for managing layout and routing
const AppContent = () => {
  const location = useLocation();
  const hideHeaderFooterRoutes = ["/web-design-development-company"];


 
  return (
    <>
  
      {!hideHeaderFooterRoutes.includes(location.pathname) && (
        <>
         
          <Header />
        </>
      )}

    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/service" element={<Service />} />
          <Route path="/solutions" element={<Industry />} />
          <Route path="/web-design-development-company" element={<Landing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolios />} />
          <Route path="all-development" element={<AllDevelopment />} />
          <Route path="/all-design" element={<AllUiUxDesign />} />
          
          {/* ✅ Slug based blog details page */}
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
  

      {/* Show Footer only when not in excluded routes */}
      {!hideHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

// Main App component
function App() {
  
  useEffect(() => {
  fetch("https://ahaan-software-1.onrender.com/api/visitor/count")
    .then(res => res.json())
    .then(data => {
      
    })
    .catch(err => console.error(err));
}, []);

  return (
    <Router>
    
     <Suspense fallback={<Preloader />}>
     <AppContent />
        
        <WhatsAppChat />
    
     </Suspense>
        
    </Router>
  );
}

export default App;
