import React, { useEffect } from "react";
import Seo from "../components/Seo";

const OurDivisions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample division data - replace with your actual divisions
  const divisions = [
    {
      id: 1,
      name: "Orange Biotech",
      image: "/assets/images/orange.png",
      website: "https://orangebiotech.in",
    },
    {
      id: 2,
      name: "Saffron Medicare",
      image: "/assets/images/saffron.png",
      website: "https://saffronmedicare.com",
    },
    {
      id: 3,
      name: "Koro",
      image: "/assets/images/koro.png",
      website: "https://koro.in",
    },
    {
      id: 4,
      name: "Coskin",
      image: "/assets/images/coskin.png",
      website: "https://coskin.com",
    },
    {
      id: 5,
      name: "Bioraiz",
      image: "/assets/images/bioraiz.png",
      website: "https://bioraiz.in",
    },
  ];

  return (
    <div>
      <Seo
        title="Our Divisions | Iconic Lifesciences"
        description="The Best Pharma Products in the World"
        type="webapp"
        name="Iconic Lifesciences"
      />
      <section>
        <div className="container-fluid mt-5 p-0">
          <div className="bg_cont__45__ab__out ban__nerrr">
            <div>
              <h2 style={{ color: "#fff", zIndex: "99" }}>Our Divisions</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {divisions.map((division) => (
              <div key={division.id} className="col-lg-4 col-md-6">
                <div className="card h-100 shadow-sm border-0 division-card">
                  <div className="card-img-wrapper position-relative overflow-hidden">
                    <img
                      src={division.image}
                      alt={division.name}
                      className="card-img-top division-img"
                      style={{
                        height: "250px",
                        objectFit: "contain",
                        transition: "transform 0.3s ease",
                      }}
                      onError={(e) => {
                        // Fallback placeholder image
                        e.target.src = `https://via.placeholder.com/400x250/e9ecef/6c757d?text=${encodeURIComponent(
                          division.name
                        )}`;
                      }}
                    />
                    {/* <div className="card-img-overlay d-flex align-items-end p-0">
                      <div className="bg-gradient-overlay w-100 h-100 position-absolute"></div>
                    </div> */}
                  </div>

                  <div className="card-body d-flex flex-column text-center p-4">
                    <h5
                      className="card-title mb-3 fw-bold"
                      style={{ color: "#004960" }}
                    >
                      {division.name}
                    </h5>

                    <div className="mt-auto">
                      <a
                        href={division.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-lg w-100 rounded-pill"
                        style={{
                          background: "#fd4871",
                          border: "none",
                          transition: "all 0.3s ease",
                        }}
                      >
                        Visit Our Website
                        <i className="fas fa-external-link-alt ms-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .division-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 15px;
          overflow: hidden;
        }

        .division-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
        }

        .division-img:hover {
          transform: scale(1.05);
        }

        .bg-gradient-overlay {
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.4) 0%,
            rgba(0, 0, 0, 0.1) 50%,
            transparent 100%
          );
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 123, 255, 0.3);
        }

        .card-img-wrapper {
          border-radius: 15px 15px 0 0;
        }

        @media (max-width: 768px) {
          .division-card:hover {
            transform: none;
          }

          .col-md-6 {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default OurDivisions;
