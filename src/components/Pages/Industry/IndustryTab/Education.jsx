import "./TabContent.css";

const gridcontent = [
  {
    imgSrc: "https://ahaanmedia.com/asc/Industry/CorporateLearningSolutions.webp",
    title: 'Corporate Learning Solutions',
    description: 'Convert corporate learning with our unique and innovative EduTech solutions. Enhance your employee skills and drive organizational growth with tailored training programs and achieve all round success. '
  },
  {
    imgSrc: "https://ahaanmedia.com/asc/Industry/EducationtoCareerSolutions.jpg",
    title: 'Education-to-Career (E2C) Solutions',
    description: 'Transform the E2C (Education-To-Career) pathways of learners by developing a large-scale e-learning and education software development solutions, precisely tailored to our clients’ needs. '
  },
  {
    imgSrc: "https://ahaanmedia.com/asc/Industry/ProfessionalUpskillingPrograms.png",
    title: 'Professional Upskilling Programs',
    description: 'We equip students, job seekers, and working professionals with skill-bases professional e-learning training solutions designed to enhance career growth and unlock their full potential.'
  },
];

const Education = () => {
  return (
    <div className="ecommerce-section container-fluid p-0">
      <h2 className="fw-bold">Reimagine Education For The Future Of Learning</h2>
      <p className="text-muted">
        As your trusted partner in e-learning transformation, we deliver robust, user-centric, and interactive educational solutions. Whether you aim to enhance student engagement or empower trainers with anytime, anywhere access to learning content, our custom e-learning app development solutions can make it happen!
      </p>
      
      <img 
        src="https://ahaanmedia.com/asc/Industry/Education.jpg" 
        alt="Education Solutions" 
        className="img-fluid content-image mb-4 w-100 rounded shadow-sm" 
      />

      <h2 className="fw-bold text-start Revitalize mt-3">
        Take Education To A New Height Of Excellence!
      </h2>
      <p className="text-start text-muted">
        At Ahaan Software Consulting, we go beyond being just an e-learning solution partner—we redefine the learning experience for educators, trainers, and students with our innovative, user-friendly EdTech solutions.
      </p>

      <h2 className="fw-bold text-start Revitalize mt-4 mb-4">
        Revolutionize Education Across Sectors with Our Custom Solutions!
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

export default Education;