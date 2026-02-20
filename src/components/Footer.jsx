import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import form from "../components/footerForm";

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: "#FD4871" }}>
      {/* Footer Top */}
      <div className="footer-top border border-top-primary">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="widget widget_info">
                <div className="ft-contact">
                  <img src="/assets/images/logo-white.png" alt="" />
                  <p>
                   Our vision is to consistently deliver superior quality ethical products on time, every time. We provide exclusive, monopoly-based distributorship rights to empower and protect our business partners.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-6">
              <div className="widget footer_widget ml-50">
                <h3 className="footer-title">Quick Links</h3>
                <ul className="footer__links_7">
                  <li>
                    <Link to={"/about-us"}>
                      <span>About Us</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/products">
                      <span>Products</span>
                    </Link>
                  </li>
                 
                  <li>
                    <Link to={"#"}>
                      <span>Our Divisions</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/VisualAid">
                      <span>Gallery</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/blogs">
                      <span>Blog</span>
                    </Link>
                  </li>

                  {/* <li>
                    <Link to="/contact-us">
                      <span>Indian PCD Pharma Companies</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/contact-us">
                      <span>Blog</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/contact-us">
                      <span>Privacy Policy</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/contact-us">
                      <span>Contact Us</span>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-6">
              <div className="widget footer_widget">
                <h3 className="footer-title">Contact Information</h3>
                <ul className="footer__links_7">
                  <li>
                    <a href="#">
                      <span className="foot_add_1 d-flex align-items-center">
                        <i className="fa fa-location-dot fs-4"></i>
                        <p className="pl-10">
                          2A, Partap Spintex Street, Dukheri Road, Mohra -
                          133004
                        </p>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:72067-84136">
                      <span className="foot_cont_1 d-flex align-items-center">
                        <i className="fa fa-phone fs-5"></i>
                        <p className="pl-10">
                          +91 72067-84136
                        </p>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:iconiclifesciences0@gmail.com">
                      <span className="foot_mail_1 d-flex align-items-center">
                        <i className="fa fa-envelope fs-4"></i>
                        <p className="pl-10">iconiclifesciences0@gmail.com</p>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-6">
              <div className="widget footer_widget ml-50">
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer bottom */}
      <div className="container">
        <div className="footer-bottom">
          <div className="row">
            <div className="col-12 text-center">
             <p className="copyright-text" style={{ color: "#fff" }}>
 Iconic Lifesciences Copyright © 2025{" "}
</p>

            </div>
          </div>
        </div>
      </div>
      {/* footer-shape */}

      <img
        className="pt-img1 animate-wave"
        src="/assets/images/wave-blue.png"
        alt=""
      />
      <img
        className="pt-img2 animate1"
        src="/assets/images/circle-dots.png"
        alt=""
      />
      <img
        className="pt-img3 animate-rotate"
        src="/assets/images/plus-blue.png"
        alt=""
      />

      <img
        className="pt-img4 animate-wave"
        src="/assets/images/wave-blue.png"
        alt=""
      />
    </footer>
  );
};

export default Footer;
