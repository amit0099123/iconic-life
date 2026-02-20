// AboutPage.js
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Seo from "../components/Seo";
import CountUp from "react-countup";
import Aboutnew from "../components/Aboutnew";

const AboutPage = () => {
  const handleSearchToggle = () => {
    // Implement your search toggle logic here
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Seo
        title="About us | Iconic Lifesciences"
        description="The Best Pharma Products in the World"
        type="webapp"
        name="Iconic Lifesciences"
      />
      <section>
        <div className="container-fluid mt-5 p-0">
          <div className="bg_cont__45__ab__out ban__nerrr">
            <div>
            <h2 style={{ color: "#fff", zIndex: "99" }}>About Us</h2>

            </div>
          </div>
        </div>
        {/* About us */}
        <Aboutnew />
      </section>

      <div>
        <section className="abt_blw-secmain">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-12 col-md-6 col-sm-12 abtus-sndd ">
                <h2>
                  Providing expert <br />
                  <span>gynecological care.</span>
                </h2>
                <p>
                  With a wealth of experience, Bioraiz Healthcare is the top
                  pharmaceutical franchise, well-known for its precise
                  composition and efficient formulation. We are creating a wide
                  variety of reasonably priced medications. With the goal of
                  achieving global healthcare through medical products, we are
                  trying to be the best in the business and maintain our
                  position as an industry leader.
                </p>
                <br />
                {/* <p>
                  Having worked in the pharmaceutical industry for many years, we have a wide network of trusted vendors and manufacturers. We guarantee that we provide our customers with only the best drugs thanks to our extensive industry experience and strict quality control procedures.{" "}
                </p> */}
              </div>
              <div className="col-12 col-md-6 col-sm-12 text-end image__sec__5">
                <img src="assets/images/abt-img.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img
                  className="abt-imgggblew"
                  src="assets/images/abt-img2.jpg"
                  alt=""
                />
              </div>

              <div className="col-lg-6">
                <img
                  className="abt-imgggblew"
                  src="assets/images/abt-img3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-sp1 mt-5">
          <div className="container service-wraper2">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6 lastcontent-txt">
                <h2>Empowering Women's Health Choices</h2>
                <p>
                  Comprehensive gynecology services with a focus on wellness,
                  prevention, and personalized treatment.
                </p>
              </div>

              <div className="col-lg-6">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-sm-6">
                      <div className="feature-container feature-bx3">
                        <h2 className="counter text-secondary">
                          <CountUp start={23} enableScrollSpy={true} />
                        </h2>
                        <h5 className="ttr-title">Years With You</h5>
                        <p></p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-sm-6">
                      <div className="feature-container feature-bx3">
                        <h2 className="counter text-secondary">
                          {" "}
                          <CountUp end={30} enableScrollSpy={true} />
                        </h2>
                        <h5 className="ttr-title">Employees</h5>
                        <p></p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-sm-6">
                      <div className="feature-container feature-bx3">
                        <h2 className="counter text-secondary">
                          {" "}
                          <CountUp end={8} enableScrollSpy={true} />
                        </h2>
                        <h5 className="ttr-title">Divisions</h5>
                        <p></p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-sm-6">
                      <div className="feature-container feature-bx3">
                        <h2 className="counter text-secondary">
                          {" "}
                          <CountUp end={500} enableScrollSpy={true} />
                        </h2>
                        <h5 className="ttr-title">Satisfied Clients</h5>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* footer */}

      <div>
        {/* Footer END ==== */}
        <button
          className="back-to-top fa fa-chevron-up"
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

export default AboutPage;
