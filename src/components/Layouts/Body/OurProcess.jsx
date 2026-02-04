import React, { useState, useEffect, useRef } from "react";
import "./OurProcess.css";

const OurProcess = () => {
  const [LottiePlayer, setLottiePlayer] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Load the heavy Lottie library only when visible
          import("@lottiefiles/dotlottie-react").then((module) => {
            setLottiePlayer(() => module.DotLottieReact);
          });
          observer.disconnect(); // Stop observing once loaded
        }
      },
      { rootMargin: "200px" } // Start loading 200px before it enters the viewport
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Helper to render Lottie or a placeholder to prevent Layout Shift
  const renderAnimation = (src) => {
    if (!LottiePlayer) {
      return <div style={{ height: "150px" }} className="d-flex justify-content-center align-items-center">
        <div className="loader-dots"><span></span><span></span><span></span></div>
      </div>;
    }
    return <LottiePlayer src={src} loop autoplay />;
  };

  return (
    <div id="process-main-container" ref={sectionRef}>
      <section className="process-section-wrapper mt-5 mb-5">
        <div className="container process-container">
          <div className="process-header-wrapper">
            <div className="mt-5 section-header-tech">
              <h6 className="subtitle">
                Discovery & Strategy <span className="divider"></span>
              </h6>
              <span className="title">Our Process</span>
            </div>
            <p className="image-carousel-content">
              Driven to be future-ready, and push beyond the building blocks of
              technology, digital, and marketing, Ahaan Software Consulting
              proudly participated in The Asia Business Show 2024.
            </p>
          </div>

          <div className="process-steps-wrapper position-relative">
            <div className="process-vertical-line"></div>

            {/* Step 1 */}
            <div className="process-step-section process-step-1">
              <div className="process-step-row">
                <div className="process-step-left">
                  <div className="process-step-box">
                    <div className="process-step-content">
                      <h3 className="process-step-title">Discovery & Planning</h3>
                      <p className="process-step-description">Define goals, scope, audience, and create a wireframe.</p>
                      {renderAnimation("https://lottie.host/64a49f21-199b-4158-8c34-fd6c5a287421/xoyIeVuViq.lottie")}
                    </div>
                  </div>
                </div>
                <div className="process-step-number-col">
                  <div className="process-step-number">1</div>
                </div>
                <div className="process-step-right"></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="process-step-section process-step-2">
              <div className="process-step-row process-step-right-aligned">
                <div className="process-step-left"></div>
                <div className="process-step-number-col">
                  <div className="process-step-number">2</div>
                </div>
                <div className="process-step-right">
                  <div className="process-step-box">
                    <div className="process-step-content">
                      <h3 className="process-step-title">Design & Prototyping</h3>
                      <p className="process-step-description">Craft visual aesthetics, UI/UX, and create interactive mockups.</p>
                      {renderAnimation("https://lottie.host/fe70d42e-cf7e-4778-8ce1-34bd7a60673c/AvDMR5gzPH.lottie")}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="process-step-section process-step-3">
              <div className="process-step-row">
                <div className="process-step-left">
                  <div className="process-step-box">
                    <div className="process-step-content">
                      <h3 className="process-step-title">Development & Testing</h3>
                      <p className="process-step-description">Full-stack coding, functionality integration, and rigorous QA.</p>
                      {renderAnimation("https://lottie.host/a0d33893-d46c-40b3-adea-6680d8cd49fc/39wUFQN1eh.lottie")}
                    </div>
                  </div>
                </div>
                <div className="process-step-number-col">
                  <div className="process-step-number">3</div>
                </div>
                <div className="process-step-right"></div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="process-step-section process-step-4">
              <div className="process-step-row process-step-right-aligned">
                <div className="process-step-left"></div>
                <div className="process-step-number-col">
                  <div className="process-step-number">4</div>
                </div>
                <div className="process-step-right">
                  <div className="process-step-box">
                    <div className="process-step-content">
                      <h3 className="process-step-title">Launch & Growth</h3>
                      <p className="process-step-description">Deploy to live servers, SEO setup, and post-launch monitoring.</p>
                      {renderAnimation("https://lottie.host/9e768f90-9eb5-41cd-b0e5-855a995ccc42/9sfugS313k.lottie")}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProcess;