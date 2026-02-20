import React from "react";
import { Link } from "react-router-dom";

const AboutHead = () => {
  return (
    <section className="section-sp1 about-area">
      <div className="container mt-3">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-30">
            <div className="about-thumb-area">
              <ul>
                <li>
                  <img
                    className="about-thumb1"
                    src="/assets/images/pic-1.webp"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="about-thumb2"
                    src="/assets/images/pic-2.webp"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="about-thumb3"
                    src="/assets/images/pic-3.webp"
                    alt=""
                  />
                </li>
                <li>
                  <div className="exp-bx">
                    20<span>Year Experience</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 mb-30">
            <div className="heading-bx">
              <h6 className="title-ext text-secondary top_subhead">About Us</h6>
              <h2 className="title_section2">
              Bioraiz Healthcare: Empowering Businesses With The Best Healthcare And Affordable Medicines!
              </h2>
              <p>
              With 12 years of expertise, Bioraiz’s capacity to supply a high-quality range of injectables, capsules, pills, antispasmodic tablets, the syrup, ointments, general medicines, etc., we are well-known in the industry as leading suppliers and marketers of medications. These products are made in a clean, standardized setting with premium raw materials. The goal of Bioraiz Healthcare is to assist prospective business owners in finding a safe and profitable franchise venture in the PCD franchise marketing industry. Those who become franchisee partners have the chance to lead the way in their designated regions and establish the standard for excellence in their industry.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
                <div className="feature-container feature-bx1 feature1">
                  <div className="icon-md">
                    <span className="icon-cell">
                      <img
                        className="shakeimage88"
                        src="/assets/images/clip_1.png"
                        alt=""
                      />{" "}
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="ttr-title">Ethics &amp; Compliance</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
                <div className="feature-container feature-bx1 feature2">
                  <div className="icon-md">
                    <span className="icon-cell">
                      <img
                        className="shakeimage88"
                        src="/assets/images/workforce.png"
                        alt=""
                      />{" "}
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="ttr-title">Dedicated Workforce</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
                <div className="feature-container feature-bx1 feature3">
                  <div className="icon-md">
                    <span className="icon-cell">
                      <img
                        className="shakeimage88"
                        src="/assets/images/quality.png"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="ttr-title">Our Quality Approach</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
                <div className="feature-container feature-bx1 feature4">
                  <div className="icon-md">
                    <span className="icon-cell">
                      <img
                        className="shakeimage88"
                        src="/assets/images/box.png"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="ttr-title">Packaging</h4>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/about-us" className="btn btn-primary shadow">
              Read More
            </Link>
          </div>
        </div>
      </div>
      <img
        className="pt-img1 animate-wave"
        src="/assets/images/wave-orange.png"
        alt=""
      />
      <img
        className="pt-img2 animate2"
        src="/assets/images/circle-small-blue.png"
        alt=""
      />
      <img
        className="pt-img3 animate-rotate"
        src="/assets/images/line-circle-blue.png"
        alt=""
      />
      <img
        className="pt-img4 animate-wave"
        src="/assets/images/square-dots-orange.png"
        alt=""
      />
      <img
        className="pt-img5 animate2"
        src="/assets/images/square-blue.png"
        alt=""
      />
    </section>
  );
};

export default AboutHead;
