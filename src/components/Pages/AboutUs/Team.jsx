import React, { useState } from "react";
// Removed Modal from react-bootstrap
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./Team.css";

const teamMembers = [
  // ... (Your existing teamMembers array remains exactly the same)
];

const MeetOurTeam = () => {
  const [show, setShow] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleShow = (member) => {
    setSelectedMember(member);
    setShow(true);
    // Optional: Prevent scrolling on body when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setShow(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="container py-5 team-carousel-section section-header-tech">
      <h6 className="subtitle">
        Teams <span className="divider"></span>
      </h6>
      <h2 className="text-center title">Meet Our Team</h2>
      <p className="image-carousel-content">
        Driven to be future-ready, and push beyond the building blocks of
        technology, digital, and marketing, Ahaan Software Consulting proudly
        participated in The Asia Business Show 2024 in Singapore—the powerhouse
        of innovation and enterprise!
      </p>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        slidesPerGroup={1}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 2 },
          576: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
        }}
      >
        {teamMembers.map((member, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="team-carousel-card text-center"
              style={{ cursor: 'pointer' }}
              onClick={() => handleShow(member)}
            >
              <img
                src={member.image}
                alt={member.name}
                className="team-carousel-img"
              />
              <h5 className="mt-3">{member.name}</h5>
              <p className="text-muted">{member.position}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Standard Bootstrap Modal Implementation */}
      {show && (
        <>
          {/* Modal Backdrop */}
          <div 
            className="modal-backdrop fade show" 
            onClick={handleClose}
          ></div>

          {/* Modal Dialog */}
          <div 
            className="modal fade show d-block about-modal" 
            tabIndex="-1" 
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content border-0 shadow-lg">
                {selectedMember && (
                  <>
                    <div className="modal-header border-0 pb-0">
                      <button 
                        type="button" 
                        className="btn-close" 
                        aria-label="Close" 
                        onClick={handleClose}
                      ></button>
                    </div>
                    <div className="modal-body text-center p-4">
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="rounded-circle mb-3 shadow-sm"
                        style={{ width: "120px", height: "120px", objectFit: "cover" }}
                      />
                      <h3 className="modal-title fw-bold">{selectedMember.name}</h3>
                      <h5 className="text-primary mb-3">{selectedMember.position}</h5>
                      <div className="px-md-3">
                        <p className="text-muted" style={{ lineHeight: '1.6' }}>
                          {selectedMember.description}
                        </p>
                      </div>
                    </div>
                    <div className="modal-footer border-0 justify-content-center pb-4">
                        <button className="btn btn-dark px-4" onClick={handleClose}>Close</button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MeetOurTeam;