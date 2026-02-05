import React from "react";
import { SlMagnifierAdd } from "react-icons/sl";
import { SiAegisauthenticator } from "react-icons/si";
import { BiBadgeCheck } from "react-icons/bi";
import { FaUserShield } from "react-icons/fa6";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <div className="whychooseus-section">
      <div className="container mt-4">
        <label className="whychooseus-label">Why Choose Us</label>
        
        <div className="row align-items-center">
          {/* CONTENT SECTION */}
          <div className="col-lg-7 d-flex flex-column">
            <div>
              <h2 className="mt-2 fw-bold whychooseus-heading">
                What Makes Us Worth Your Time & Trust
              </h2>

              <p className="whychooseus-text mt-3">
                We’re not just a high-performing team – we’re “tech-driven
                marketing enthusiasts” with innovation in our DNA! Let’s collab
                to transform your vision – from ideation to action – into
                powerful narratives, lasting partnerships, and immersive
                experiences.
              </p>
            </div>

            {/* FEATURES GRID */}
            <div className="row mt-4">
              {/* Card 1 */}
              <div className="col-md-6 mb-3">
                <div className="card border-0 bg-transparent">
                  <div className="card-body whychooseus-card p-0">
                    <div className="row align-items-center g-0">
                      <div className="col-auto">
                        <div className="icon-wrapper">
                          <SlMagnifierAdd size={20} color="#CD912A" />
                        </div>
                      </div>
                      <div className="col ms-3">
                        <h5 className="whychooseus-subtitle mb-1">Our Values</h5>
                        <p className="whychooseus-cardtext mb-0">
                          We deliver services with integrity, accuracy, and
                          objectivity, upholding ethical standards,
                          accountability, and credibility while honoring the
                          dignity of labor and striving for excellence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-6 mb-3">
                <div className="card border-0 bg-transparent">
                  <div className="card-body whychooseus-card p-0">
                    <div className="row align-items-center g-0">
                      <div className="col-auto">
                        <div className="icon-wrapper">
                          <SiAegisauthenticator size={20} color="#CD912A" />
                        </div>
                      </div>
                      <div className="col ms-3">
                        <h5 className="whychooseus-subtitle mb-1">Authenticity</h5>
                        <p className="whychooseus-cardtext mb-0">
                          We ally with businesses we believe in, ensuring
                          passion drives success. With authenticity at our core,
                          we foster meaningful partnerships that create growth,
                          value, and sustainability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-6 mb-3">
                <div className="card border-0 bg-transparent">
                  <div className="card-body whychooseus-card p-0">
                    <div className="row align-items-center g-0">
                      <div className="col-auto">
                        <div className="icon-wrapper">
                          <FaUserShield size={20} color="#CD912A" />
                        </div>
                      </div>
                      <div className="col ms-3">
                        <h5 className="whychooseus-subtitle mb-1">Top Talent</h5>
                        <p className="whychooseus-cardtext mb-0">
                          Our experts cultivate partnerships with a win-win
                          mindset, seeing client success as our own. Committed
                          to mutual growth, we ensure every collaboration
                          delivers impactful results.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-md-6 mb-3">
                <div className="card border-0 bg-transparent">
                  <div className="card-body whychooseus-card p-0">
                    <div className="row align-items-center g-0">
                      <div className="col-auto">
                        <div className="icon-wrapper">
                          <BiBadgeCheck size={20} color="#CD912A" />
                        </div>
                      </div>
                      <div className="col ms-3">
                        <h5 className="whychooseus-subtitle mb-1">Quality</h5>
                        <p className="whychooseus-cardtext mb-0">
                          We leverage edgy technologies, tools, and platforms to
                          deliver breakthrough results. Beyond industry best
                          practices, our experts innovate continuously, pushing
                          boundaries to drive excellence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="col-lg-5 d-flex justify-content-center mt-4 mt-lg-0">
            <img
              src="https://ahaanmedia.com/asc/whychooseus/Why-choose-us.png"
              alt="Business Team"
              className="whychooseus-image img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;