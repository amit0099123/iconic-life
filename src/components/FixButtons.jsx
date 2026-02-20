import React from "react";
import { Link } from "react-router-dom";

const FixButtons = ({ openModal }) => {
  return (
    <>
      <Link
        className="fx__textbtn anchor-hover-rj"
        to="/assets/images/MRP%20LIST%20ICONIC.pdf"
        target="_blank"
        download
      >
        Download Price List
      </Link>
      <button
        className="fx__textbtn anchor-hover-rj enquire-fix"
        to=""
        target=""
        onClick={openModal}
      >
        Enquire Us
      </button>

      <div className="social__btns_7">
        <a href="#" className="pd1">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-google-plus-g"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="#">
          {" "}
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </>
  );
};

export default FixButtons;
