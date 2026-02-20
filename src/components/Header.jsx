import { useState } from "react";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import Marquee from "react-fast-marquee";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [showOpen, setShowOpen] = useState(false);
  const [showOpenGallery, setShowOpenGallery] = useState(false);
  const [showOpen1, setShowOpen1] = useState(false);

  const handleDivClick = () => {
    setShowOpen(!showOpen);
  };
  const handleGalleryClick = () => {
    setShowOpenGallery(!showOpenGallery);
  };
  const handleDivClick1 = () => {
    setShowOpen1(!showOpen1);
  };

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleMenuToggle = () => {
    const menuDropdown = document.getElementById("menuDropdown");
    const bootstrapCollapse = new window.bootstrap.Collapse(menuDropdown);
    bootstrapCollapse.toggle();
  };

  return (
    <>
      <header className="header header-transparent rs-nav">
        <div className="sticky-header navbar-expand-lg">
          <div className="menu-bar clearfix">
            <div className="container-fluid clearfix main-header-hh1">
              <div className="menu-logo logo-dark">
                <NavLink to="/">
                  <img src="/assets/images/iconic_logo.png" alt="Logo" />
                </NavLink>
              </div>

              <div
                className="menu-links navbar-collapse collapse justify-content-center"
                id="menuDropdown"
              >
                <div className="menu-logo">
                  <NavLink to="/">
                    <img
                      src="./assets/images/Bioraiz_Logo_final.png"
                      alt="Logo"
                    />
                  </NavLink>
                </div>

                <ul className="nav navbar-nav">
                  <li onClick={handleMenuToggle}>
                    <NavLink to="/">Home</NavLink>
                  </li>

                  <li onClick={handleMenuToggle}>
                    <NavLink to="/about-us">
                      About<i className="fas fa-plus"></i>
                    </NavLink>
                  </li>

                  <li
                    className={showOpen ? "open" : ""}
                    onClick={handleDivClick}
                  >
                    <NavLink to="/products">
                      Products<i className="fas fa-plus"></i>
                    </NavLink>
                  </li>

                  

                  <li onClick={handleMenuToggle}>
                    <NavLink to="/OurDivisions">
                      Our Divisions<i className="fas fa-plus"></i>
                    </NavLink>
                  </li>

                  {/* ⭐ GALLERY WITH SUB MENU ⭐ */}
                  <li
                    className={showOpenGallery ? "open" : ""}
                    onClick={handleGalleryClick}
                  >
                    <NavLink to="/VisualAid">
                      Gallery <i className="fas fa-plus"></i>
                    </NavLink>

                    {/* SUBMENU ADDED HERE */}
                    <ul className="sub-menu left">
                      <li onClick={handleMenuToggle}>
                        <NavLink to="/VisualAid">Visual-Aid</NavLink>
                      </li>

                      <li onClick={handleMenuToggle}>
                        <NavLink to="/Product-Listing">Product-Picture</NavLink>
                      </li>

                      <li onClick={handleMenuToggle}>
                        <NavLink to="/Promotion-Input">Promotional-Inputs</NavLink>
                      </li>
                    </ul>
                  </li>

                  <li
                    className={showOpen1 ? "open" : ""}
                    onClick={handleDivClick1}
                  >
                    <NavLink to="/Blogs">
                      Blogs <i className="fas fa-plus"></i>
                    </NavLink>
                  </li>
                </ul>

                {/* Social icons */}
                <ul className="social-media">
                  <li>
                    <a target="_blank" href="https://www.facebook.com/" className="btn btn-primary">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.google.com/" className="btn btn-primary">
                      <i className="fab fa-google"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.linkedin.com/" className="btn btn-primary">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://twitter.com/" className="btn btn-primary">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                </ul>

                <div className="menu-close" onClick={handleMenuToggle}>
                  <i className="ti-close">
                    <IoMdClose size={25} />
                  </i>
                </div>
              </div>

              <button
                className="navbar-toggler collapsed menuicon justify-content-end"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#menuDropdown"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>

              <div className="secondary-menu">
                <ul>
                  <li className="btn-area">
                    <NavLink to="/contact-us" className="btn btn-primary shadow cnct_btn1">
                      CONTACT US
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="nav-search-bar">
                <form action="#">
                  <input
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Type to search"
                  />
                  <span>
                    <i className="ti-search"></i>
                  </span>
                </form>
                <span id="searchRemove" onClick={handleSearchToggle}>
                  <i className="ti-close"></i>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT VERTICAL SOCIAL ICONS */}
        <div className="floating-social-icons">

          <a
            href="https://www.facebook.com/profile.php?id=100092195132924"
            target="_blank"
            rel="noreferrer"
            className="social-icon facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a
            href="https://www.instagram.com/iconic_lifesciences/"
            target="_blank"
            rel="noreferrer"
            className="social-icon instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=+917206784136"
            target="_blank"
            rel="noreferrer"
            className="social-icon whatsapp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
		
		<div className="floating-call">
  <a href="tel:+917206784136" className="call-icon">
    <i className="fa fa-phone"></i>
  </a>
</div>
      </header>
    </>
  );
};

export default Header;
