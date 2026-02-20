import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import AboutHead from "../components/AboutHead";
import VideoSlider from "../components/VideoSlider";
import Slider from "react-slick";
import Calculator from "../components/Calculator";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CountUp from "react-countup";
import ProgressProvider from "../components/ProgressProvider";
import FixButtons from "../components/FixButtons";
import CountData from "../components/CountData";
import Testimonial from "../components/Testimonial";
import Seo from "../components/Seo";
import Marquee from "react-fast-marquee";

const HomePage = () => {
  const [activeIcon, setActiveIcon] = useState("Registered Trademarks");
  const [currentPage, setCurrentPage] = useState();
  const [valueEnd, setValueEnd] = useState(300);

  const getContentForIcon = (icon) => {
    switch (icon) {
      case "Registered Trademarks":
        return "With their stakeholders, We become the best PCD Pharma companies";
      case "Registered Medicines":
        return "With their stakeholders, We become the best PCD Pharma companies";
      default:
        return "Default content.";
    }
  };

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };
  
  
  const [products, setProducts] = useState([]);

  const API_URL = "https://iconiclife.in/admin.iconiclife.com/api/get_product";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (currentSlide, nextSlide) => {
      // Handle the current page and total pages here
      // console.log(`Current Page: ${nextSlide + 1}`);
      setCurrentPage(nextSlide + 1);
      //setTotalPage(settings.slidesToShow);
      //console.log(`Total Pages: ${settings.slidesToShow}`);
    },
  };
  const settingsImg = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const productImages = [
    "/assets/images/E2-PRIME-.png",
    "/assets/images/E2-PRIddMEff-fg.png",
    "/assets/images/E2-PRIddME-fg.png",
    "/assets/images/E2-PRIME-fg.png",
    "/assets/images/E2-PRIME-fg.png",
  ];

  const SliderProductImg = {
    dots: false,
    infinite: true,
    speed: 10000000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100000000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Seo
        title="Home | Iconic Lifesciences"
        description="The Best Pharma Products in the World"
        type="webapp"
        name="Iconic Lifesciences"
      />
      <div className="page-content bg-white">
        {/* <a className="fx__textbtn" download href="/images/product-listr.pdf" target="_blank">Download Price List</a> */}

        {/* Main Banner */}
        <div
          className="main-banner"
          style={{ backgroundImage: "url(images/mainbanner.png)" }}
        >
          <div className="container inner-content">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12"></div>

              <div className="col-lg-6 col-md-6 col-sm-12 text-end">
                <h6 className="title-ext text-primary">Iconic Lifesciences</h6>

                <h1 className="mainhead_bio">
                  A gynae Division of <br />
                  Orange Biotech Pvt. Ltd
                </h1>

                <Link to="/products">
                  <button class="Exp_btnmain">Explore More</button>
                </Link>
              </div>
            </div>
          </div>

          <img
            className="cloud_bottom"
            src="/assets/images/clouds.png"
            alt=""
          />
        </div>

        <Slider className="borde medi-slidemain" {...settingsImg}>
          <div class="slider-imgg_hmain">
            <Link to="/#">
              <img
                className="prod__uct_images"
                src="/assets/images/slide-img1.png"
              />
            </Link>
          </div>

          <div class="slider-imgg_hmain">
            <Link to="/#">
              <img
                className="prod__uct_images"
                src="/assets/images/slide-img2.png"
              />
            </Link>
          </div>

          <div class="slider-imgg_hmain">
            <Link to="/#">
              <img
                className="prod__uct_images"
                src="/assets/images/slide-img3.png"
              />
            </Link>
          </div>

          <div class="slider-imgg_hmain">
            <Link to="/#">
              <img
                className="prod__uct_images"
                src="/assets/images/slide-img4.png"
              />
            </Link>
          </div>

          <div class="slider-imgg_hmain">
            <Link to="/#">
              <img
                className="prod__uct_images"
                src="/assets/images/slide-img1.png"
              />
            </Link>
          </div>

          <div class="slider-imgg_hmain">
            <Link to="/#">
              <img
                className="prod__uct_images"
                src="/assets/images/slide-img2.png"
              />
            </Link>
          </div>
        </Slider>

        {/* About Section */}

        <div class="abt-section-main">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-lg-6 main-bg-here text-center">
                <img
                  className="womann__preg"
                  src="/assets/images/pregnant-woman.png"
                  alt=""
                />
                <img
                  className="bgg__dot-s"
                  src="/assets/images/dots_bg.png"
                  alt=""
                />
                <img
                  className="mainnn__cir-cle"
                  src="/assets/images/circle.png"
                  alt=""
                />
              </div>

              <div className="col-lg-6 right-textmain">
                <img
                  className="cir__cle-a"
                  src="/assets/images/circle1.png"
                  alt=""
                />
                <img
                  className="tw-circlee_c"
                  src="/assets/images/dotslll.png"
                  alt=""
                />

                <p className="sec_abt-head">About Us</p>
                <h3>Iconic Lifesciences</h3>
                <h6>Committed to trusted health care</h6>

                <p className="abtt_paraa_4">
                  One of the most priceless possession for life is a healthy
                  body. We at Iconic Lifesciences, promise you to achieve that
                  in the best possible way.
                </p>

                <p className="abttaa_paraa_4">
                  We are finding solutions since 2003 to help the community to
                  stay healthy and breathe properly without any hurdle. We are
                  involved in providing a wide range of pharma formulations. We
                  have set up a number of pharma manufacturing units (all
                  GMP-WHO verified) that are contributing to providing quality
                  Gynae products. The entire range is somewhere related to
                  women’s health. The product range is
                  high including the capsules, injectables, tablets, syrups,
                  feminine cream, lotions, wash, etc.   
                </p>

                <img
                  className="cir__cle-ab"
                  src="/assets/images/tw-cicle.png"
                  alt=""
                />

                <div className="abt_buttons-cont">
                  <Link to={"/about-us"}>
                    <button class="btn1st">Find Out More</button>
                  </Link>
                  <Link to={"/contact-us"}>
                    <button class="btn2nd">Give us a Call Now</button>
                  </Link>
                </div>
              </div>
            </div>

            <img
              className="clouds__abt-us"
              src="/assets/images/clouds2.png"
              alt=""
            />
          </div>
        </div>

        {/* heathcare unit */}

        <div class="healthbg-main">
          <img className="prod_upcld" src="/assets/images/clouds2.png" alt="" />
          <div className="container-fluid">
            <h4>PRODUCTS</h4>
            {/* <h2>The power of Nature with Science</h2> */}

            <div class="row px-5 mt-5 d-flex align-items-center">
              <div class="col-lg-4 text-start prod_txtmm">
                <h3>Quality Assurance for Gynaecology Medicine</h3>
              </div>

              <div class="col-lg-8 text-end prod_paramm">
                <h6>
                  At Iconic Lifesciences, you can be 100% sure about the quality
                  and results of the products. We have our manufacturing under
                  GMP and WHO.
                </h6>
                <h6>
                  Even with the high demands from our customers, we maintain
                  quality, efficiency, durability and reliability. We tirelessly
                  work to provide the best medicines for Gynae problems.
                  Whatever medicine we manufacture goes under the QA/QC by the
                  dedicated experts having years of experience. Even the
                  packaging that we use is safe.
                </h6>
              </div>
            </div>

            <div className="product-slider-wrapper">
             <Slider {...SliderProductImg} className="product-slider">
  {products.map((item, i) => (
    <div key={i} className="slider-item">
      <img
        src={item.image}            // ← API image
        alt={item.name}
        className={i % 2 === 0 ? "img-skew-left" : "img-skew-right"}
      />
    </div>
  ))}
</Slider>

              <Link to={"/products"}>
                <button className="bottom-text1">View all Products</button>
              </Link>
            </div>

            {/* <div className="row text-center" style={{overflow: "visible"}}>
              <Slider className="" {...SliderProductImg} style={{overflow: "visible"}}>
                <div className="col-lg-3 all-points33">
                  <img
                    className="prod_imggg"
                    src="/assets/images/E2-PRIME-.png"
                    alt=""
                  />
                </div>

                <div className="col-lg-3 all-points33">
                  <img
                    className="prod_imggg-h"
                    src="/assets/images/E2-PRIddMEff-fg.png"
                    alt=""
                  />
                </div>

                <div className="col-lg-3 all-points33">
                  <img
                    className="prod_imggg"
                    src="/assets/images/E2-PRIddME-fg.png"
                    alt=""
                  />
                </div>

                <div className="col-lg-3 all-points33">
                  <img
                    className="prod_imggg-h"
                    src="/assets/images/E2-PRIME-fg.png"
                    alt=""
                  />
                </div>
                <div className="col-lg-3 all-points33">
                  <img
                    className="prod_imggg-h"
                    src="/assets/images/E2-PRIME-fg.png"
                    alt=""
                  />
                </div>
              </Slider>

              <button className="bottom-text1">View all Products</button>
            </div> */}
          </div>
          <img
            className="prod_upcld-bottom"
            src="/assets/images/clouds2.png"
            alt=""
          />
        </div>

        <div className="container-fluid commit_section">
          <h3>Iconic Lifesciences</h3>
          <h5>Committed to trusted health care</h5>

          <div className="row mt-5 mx-3">
            <div className="col-lg-3">
              <div className="commit-carddd">
                <img src="/assets/images/maring.png" alt="" />
                <h6>Huge Margins</h6>
                <p>
                  You can get high margins on the medicines manufactured at
                  Iconic Lifesciences.
                </p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="commit-carddd">
                <img src="/assets/images/price.png" alt="" />
                <h6>Competitive Price</h6>
                <p>
                  We at Iconic Lifesciences provide the services as well as
                  medicine at competitive prices in the market.
                </p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="commit-carddd">
                <img src="/assets/images/time.png" alt="" />
                <h6>Timely Delivery</h6>
                <p>
                  We promise to deliver the services/medicines on time to ensure
                  a smooth delivery at your end too.
                </p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="commit-carddd">
                <img src="/assets/images/medal.png" alt="" />
                <h6>Brand Recognition</h6>
                <p>
                  We promise to deliver the services/medicines on time to ensure
                  a smooth delivery at your end too.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid end_secc-mh mt-5">
          <div className="row">
            <div className="col-lg-6 why__main-hm ps-5">
              <div className="head-whyy">
                <h3 className="why__btn">Why Choose Us</h3>
              </div>

              <h5>Iconic Lifesciences at a Glance</h5>
              <h6>
                Iconic Lifesciences is known for its high supply chain and
                manufacturing high-quality pharmaceutical formulations.
              </h6>
              <p>
                Our vision is to deliver the best quality and that too on time
                always. We offer distributorships based on monopoly rights to the associated partners. We at Iconic Lifesciences ensure to
                provide all the marketing support in terms of M.R bags,
                prescription pads, products literature, etc. to ensure the
                smooth flow. We have a mission to provide drugs for every
                possible Gynae problem and to enhance women’s reproductive
                health in India
              </p>

              <ul>
                <li>Competitive Prices in the market</li>
                <li>A collection of Pro fertility and Gynae range</li>
                <li>
                  A huge network of distribution partners across India to make
                  deliveries fasters and more reliable.
                </li>
               
              </ul>
            </div>

            <div className="col-lg-6 why__img-hhm pe-5">
              <img
                className="end-sec_bg"
                src="/assets/images/dots_bg.png"
                alt=""
              />
              <img
                className="main-img_all"
                src="/assets/images/round_img.png"
                alt=""
              />
              <img
                className="circ_mainn"
                src="/assets/images/tw-cicle.png"
                alt=""
              />
              <img
                className="all_dotsmss"
                src="/assets/images/dotslll.png"
                alt=""
              />
            </div>
          </div>

          <div className="container site_detailsmn">
            <div className="row">
              <div className="col-lg-4 detailss_hhh">
                <img src="/assets/images/location.png" alt="location" />

                <div className="text__det-ail">
                  <h5>Want to Reach Us?</h5>
                  <h4>Find Us On Map</h4>
                </div>
              </div>

              <div className="col-lg-4 detailss_hhh">
                <img src="/assets/images/phone.png" alt="phone" />
                <div className="text__det-ail">
                  <h5>Call for an appointment!</h5>
                  <h4>+91-9499164372</h4>
                </div>
              </div>

              <div className="col-lg-4 detailss_hhh">
                <img src="/assets/images/email.png" alt="email" />
                <div className="text__det-ail">
                  <h5>Feel free to message us!</h5>
                  <h4>Send an Email</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <CountData /> */}

        {/* counter end here  */}

        {/* right medicine */}

        {/* <div class="biovers-med_main">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-6 main-med_head">
                      <h3>BIOVERSAL REMEDIES - PCD PHARMA FRANCHISE</h3>
                      <h2>We Cure Everything with the Right Medicine!</h2>
                    </div>

                    <div className="col-lg-6 main-med_text">
                        <p>Bioversal Remedies is continually working to ensure that people in need have access to high-quality, affordable medicines. As a result, healthcare practitioners and patients worldwide have put their faith in us. Being a PCD pharma franchise Company, our comprehensive solutions enable effectiveness and great productivity in both supply chain management and third party Pharma manufacturing methods, as we are the best pharma franchise Company. This enables us to provide low-cost, high-quality products, resulting in customer satisfaction</p>
                    </div>

                   

                  </div>
                </div>
               </div> */}

        {/* all products */}
        {/* <div class="prod-range_secmain ">
                  <div className="container-fluid medi-headingshere">
                  <h4 class="range-subhead">HIGH QUALITY MEDICAL SUPPLIES</h4>
                  <h2>We offer a wide range of products</h2>
                    </div>

              <div className="row">
                <div className="col-lg-3 text-on_image">
                  <div className="prod-img-conthmain">
                  <img src="/assets/images/rangeimage-1.png" alt="" />
                  <div className="hover-texthm1">
                    <p>Biocoril</p>
                  </div>
                  </div>
                </div>

                <div className="col-lg-3 text-on_image">
                  <div className="prod-img-conthmain">
                  <img src="/assets/images/rangeimage-1.png" alt="" />
                  <div className="hover-texthm1">
                    <p>Biocoril</p>
                  </div>
                  </div>
                </div>

                <div className="col-lg-3 text-on_image">
                  <div className="prod-img-conthmain">
                  <img src="/assets/images/rangeimage-1.png" alt="" />
                  <div className="hover-texthm1">
                    <p>Biocoril</p>
                  </div>
                  </div>
                </div>
                
                <div className="col-lg-3 text-on_image">
                  <div className="prod-img-conthmain">
                  <img src="/assets/images/rangeimage-1.png" alt="" />
                  <div className="hover-texthm1">
                    <p>Biocoril</p>
                  </div>
                  </div>
                </div>


                
              </div>

                <div className="bot-marquee_phar">
              <Marquee>
                <p className="pharma_announce">
                  PharmaFranchise <span>+</span> PCDPharma <span>+</span> Healthcare <span>+</span>
                </p>
              </Marquee>
              </div>

                </div> */}

        {/* <Calculator /> */}

        {/* <div class="blog_section-here">
              <div className="container-fluid medi-headingshere">
                  <h4 class="range-subhead">HEALTH ESSENTIALS</h4>
                  <h2>LET US READ WHAT'S NEW</h2>
                    </div>

                    <div className="container mb-5">
                      <div className="row blog_main">
                        <div className="col-lg-4 blog-1_main">

                          <div className="blog_arrow-link1">
                          <img src="/assets/images/blog_1.png" alt="" />
                          <div className="link-arrowmain">
                            <a href="#"> <img src="assets/images/link_arrow.png" alt="" /> </a>
                          </div>
                          </div>


                          <div className="blog-head-title">
                          <h5>Pharma Distributors in Kerala</h5>
                          <button>Know More</button>
                          </div>
                        </div>

                        <div className="col-lg-4 blog-1_main">

                          <div className="blog_arrow-link1">
                          <img src="/assets/images/blog_1.png" alt="" />
                          <div className="link-arrowmain">
                            <a href="#"> <img src="assets/images/link_arrow.png" alt="" /> </a>
                          </div>
                          </div>


                          <div className="blog-head-title">
                          <h5>Pharma Distributors in Kerala</h5>
                          <button>Know More</button>
                          </div>
                        </div>

                        <div className="col-lg-4 blog-1_main">

                          <div className="blog_arrow-link1">
                          <img src="/assets/images/blog_1.png" alt="" />
                          <div className="link-arrowmain">
                            <a href="#"> <img src="assets/images/link_arrow.png" alt="" /> </a>
                          </div>
                          </div>


                          <div className="blog-head-title">
                          <h5>Pharma Distributors in Kerala</h5>
                          <button>Know More</button>
                          </div>
                        </div>

                        

                        
                      </div>
                    </div>
              </div> */}

        {/* Cards */}
        {/* <ul className="hov_cards741">
          <Link to="#">
            <li className="crddssabdc card-1">
              <h5 className="crd-cont41">Ointment</h5>
              <img
                className="hovimg_78"
                src="assets/images/allergy_1.png"
                alt=""
              />
            </li>
          </Link>
          <Link to="#">
            <li className="crddssabdc card-1">
              <h5 className="crd-cont41">Syrups</h5>
              <img
                className="hovimg_78"
                src="assets/images/syrup_d12.png"
                alt=""
              />
            </li>
          </Link>
          <Link to="#">
            <li className="crddssabdc card-1">
              <h5 className="crd-cont41">Injection</h5>
              <img className="hovimg_78" src="assets/images/vaccine.png" alt="" />
            </li>
          </Link>
          <Link to="#">
            <li className="crddssabdc card-1">
              <h5 className="crd-cont41">Oil</h5>
              <img
                className="hovimg_78"
                src="assets/images/drugs_s12.png"
                alt=""
              />
            </li>
          </Link>
          <Link to="#">
            <li className="crddssabdc card-1">
              <h5 className="crd-cont41">Tablets</h5>
              <img className="hovimg_78" src="assets/images/herbal.png" alt="" />
            </li>
          </Link>
          <Link to="#">
            <li className="crddssabdc card-1">
              <h5 className="crd-cont41">Ear-Eye-Drops</h5>
              <img className="hovimg_78" src="assets/images/syringe.png" alt="" />
            </li>
          </Link>
          <Link to="#">
            <li className="crddssabdc card-1">
              <h5 className="crd-cont41">Gynaecare</h5>
              <img
                className="hovimg_78"
                src="assets/images/maternity.png"
                alt=""
              />
            </li>
          </Link>
          <Link to="#">
            <li className="crddssabdc card-1">
              <h5 className="crd-cont41">Orthopedic</h5>
              <img
                className="hovimg_78"
                src="assets/images/orthopedics.png"
                alt=""
              />
            </li>
          </Link>
        </ul> */}

        {/* --------------------------------------------// */}
        {/* <div className="container mt-100">
          <div className="appointment-form-two">
            <div className="col-lg-6 col-sm-12 col-md-12">
              <div
                className="form-wrap d-flex align-items-center flex-column justify-content-center form-wrap-rj"
                style={{ position: "relative" }}
              >
                <div className="icons-rotating">
                  <div
                    className="ivon1-rj"
                    id="chng-click"
                    onClick={() => handleIconClick("Registered Markups")}
                  >
                    <i className="fa-solid fa-syringe" />
                  </div>

                  <div
                    className="ivon2-rj"
                    id="chng-click2"
                    onClick={() => handleIconClick("Registered Medicines")}
                  >
                    <i className="fa-solid fa-tablets" />
                  </div>
                  <div
                    className="ivon3-rj"
                    id="chng-click3"
                    onClick={() => handleIconClick("Registered Markups")}
                  >
                    <i className="fa-solid fa-hospital" />
                  </div>
                  <div
                    className="ivon4-rj"
                    id="chng-click4"
                    onClick={() => handleIconClick("Registered Medicines")}
                  >
                    <i className="fa-solid fa-house-chimney-medical" />
                  </div>
                  <div
                    className="ivon5-rj"
                    id="chng-click5"
                    onClick={() => handleIconClick("Registered Markups")}
                  >
                    <i className="fa-solid fa-capsules" />
                  </div>
                </div>

                {[1, 2, 3, 4, 5].map((index) => (
                  <div className="icons-cnt-rj" id="icon1-cnt" key={index}>
                    <h4 className="text-center" style={{ color: "#009cad" }}>
                      {activeIcon}
                    </h4>
                    <p className="text-center tim" style={{ color: "#343a40" }}>
                      {getContentForIcon(activeIcon)}
                    </p>
                  </div>
                ))}

                {/* <div
                className="icons-cnt-rj"
                style={{ color: "#009cad", display: "none" }}
                id="icon2-cnt"
              >
                <h4 className="text-center">{activeIcon}</h4>
                <p className="text-center tim" style={{ color: "#343a40" }}>
                  With their stakeholders, We because the best PCD Pharma
                  companies
                </p>
              </div> */}
        {/* <div
                className="icons-cnt-rj"
                style={{ color: "#009cad", display: "none" }}
                id="icon3-cnt"
              >
                <h4 className="text-center">{activeIcon}</h4>
                <p className="text-center tim" style={{ color: "#343a40" }}>
                  With their stakeholders, We because the best PCD Pharma
                  companies
                </p>
              </div> */}
        {/* <div
                className="icons-cnt-rj"
                style={{ color: "#009cad", display: "none" }}
                id="icon4-cnt"
              >
                <h4 className="text-center">{activeIcon}</h4>
                <p className="text-center tim" style={{ color: "#343a40" }}>
                  With their stakeholders, We because the best PCD Pharma
                  companies
                </p>
              </div> */}
        {/* <div
                className="icons-cnt-rj"
                style={{ color: "#009cad", display: "none" }}
                id="icon5-cnt"
              >
                <h4 className="text-center">{activeIcon}</h4>
                <p className="text-center tim" style={{ color: "#343a40" }}>
                  With their stakeholders, We because the best PCD Pharma
                  companies
                </p>
              </div>}
              </div>
            </div>

            <div className="col-lg-6 col-sm-12 col-md-12">
              <div>
                <div className="section-heading mb-40">
                  <h2 className="title">What Makes Us Your Trusted Medicinal Partner?
                  </h2>
                  <p>Wide Range of products to cater different business needs like retailers, wholesalers, etc.
                  </p>
                  <div className="uls-rj d-flex my-4">
                    <ul className="check-list mt-35 pr-xl-4">
                      <li
                        className="wow fadeInUp"
                        data-wow-delay="0.3s"
                        style={{ visibility: "visible", animationdelay: "0.3s" }}
                      >
                        <span className="pe-1 rgt-arr">
                          <i
                            className="fa-solid fa-square-check"
                            style={{ color: "#499afa" }}
                          />
                        </span>
                        Operating across PAN India
                      </li>
                      <li
                        className="wow fadeInUp"
                        data-wow-delay="0.4s"
                        style={{ visibility: "visible", animationdelay: "0.4s" }}
                      >
                        <span className="pe-1 rgt-arr">
                          <i
                            className="fa-solid fa-square-check"
                            style={{ color: "#499afa" }}
                          />
                        </span>
                        ISO, GMP and WHO-certified medicinal products
                      </li>
                      {/* <li
                        className="wow fadeInUp"
                        data-wow-delay="0.5s"
                        style={{ visibility: "visible", animationdelay: "0.5s" }}
                      >
                        <span className="pe-1 rgt-arr">
                          <i
                            className="fa-solid fa-square-check"
                            style={{ color: "#499afa" }}
                          />
                        </span>
                        Exceptional support to our PCD franchise partners.
                      </li> }
                      <li
                        className="wow fadeInUp"
                        data-wow-delay="0.6s"
                        style={{ visibility: "visible", animationdelay: "0.6s" }}
                      >
                        <span className="pe-1 rgt-arr">
                          <i
                            className="fa-solid fa-square-check"
                            style={{ color: "#499afa" }}
                          />
                        </span>
                        Diverse distribution network.

                      </li>
                    </ul>
                    <ul className="check-list mt-35 pr-xl-4">
                      <li
                        className="wow fadeInUp"
                        data-wow-delay="0.3s"
                        style={{ visibility: "visible", animationdelay: "0.3s" }}
                      >
                        <span className="pe-1 rgt-arr">
                          <i
                            className="fa-solid fa-square-check"
                            style={{ color: "#499afa" }}
                          />
                        </span>
                        Excellent branding and packaging.
                      </li>
                      <li
                        className="wow fadeInUp"
                        data-wow-delay="0.4s"
                        style={{ visibility: "visible", animationdelay: "0.4s" }}
                      >
                        <span className="pe-1 rgt-arr">
                          <i
                            className="fa-solid fa-square-check"
                            style={{ color: "#499afa" }}
                          />
                        </span>
                        Ethical and quality work approach.
                      </li>
                      <li
                        className="wow fadeInUp"
                        data-wow-delay="0.5s"
                        style={{ visibility: "visible", animationDelay: "0.5s" }}
                      >
                        <span className="pe-1 rgt-arr">
                          <i
                            className="fa-solid fa-square-check"
                            style={{ color: "#499afa" }}
                          />
                        </span>
                        Exceptional support to our PCD franchise partners.
                      </li>
                      {/* <li
                        className="wow fadeInUp"
                        data-wow-delay="0.6s"
                        style={{ visibility: "visible", animationDelay: "0.6s" }}
                      >
                        <span className="pe-1 rgt-arr">
                          <i
                            className="fa-solid fa-square-check"
                            style={{ color: "#499afa" }}
                          />
                        </span>
                        Modern Infrastructure
                      </li> */}
        {/* </ul> */}
      </div>
      {/* <p className> */}
      {/* Bioraiz Healthcare was established with the goal of providing excellent pharmaceutical products and having a major influence on the healthcare sector. The healthcare unit has become well-known throughout India because of its strong dedication to quality and client satisfaction, lending certified drugs to its valued pharma franchise partners, retailers, wholesalers, distributors and the whole pharma community. Even though we concentrate on top-notch research, we are happy that we have been contributing to enhance healthcare standards and overall well being across the country. */}

      {/* </p> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div>} */}

      {/* <section class="product_slidesec my-1">
          <div className="container borde text-center ">
            <h1>Our Products</h1>

            <div>
              <div className="product__sec_7 mt-3">
                <div className="slider_allimages1  ">
                  <Slider className="borde"{...settingsImg}>
                    <Link to="#">
                      <img
                        className="prod__uct_images"
                        src="/assets/images/image_21.webp"
                      />
                    </Link>
                    <Link to="#">
                      <img
                        className="prod__uct_images"
                        src="/assets/images/image_25.webp"
                      />
                    </Link>
                    <Link to="#">
                      <img
                        className="prod__uct_images"
                        src="/assets/images/image_23.webp"
                      />
                    </Link>
                    <Link to="#">
                      <img
                        className="prod__uct_images"
                        src="/assets/images/image_24.webp"
                      />
                    </Link>

                    <Link to="#">
                      <img
                        className="prod__uct_images"
                        src="/assets/images/image_23.webp"
                      />
                    </Link>
                    <Link to="#">
                      <img
                        className="prod__uct_images"
                        src="/assets/images/image_24.webp"
                      />
                    </Link>
                  </Slider>
                  <Link to="#">
                    <button class="slider_btn1">
                      Explore More{" "}
                      <i class="fa-solid fa-arrow-right arrow_right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section> */}

      {/* About us */}

      {/* <AboutHead /> */}

      {/* Our Progress */}

      {/* <section
          className="section-area section-sp5 work-area my-5"
          style={{
            backgroundImage: "url(/assets/images/background/line-bg1.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "100%",
          }}
        >
          <div className="container-sm">
            <div className="heading-bx text-center">
              {/*<h6 class="title-ext text-secondary">About Bioraiz</h6>*/}
      {/* <h2 className="title">Our Services</h2> */}
      {/* </div> */}

      {/* <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6 mb-30">
                <div className="work-bx">
                  <div className="work-num-bx">01</div>
                  <div className="work-content">
                    <h5 className="title text-secondary mb-10 slide_texttt_7">
                      Pharma Franchise
                    </h5>
                    <p>
                      With the best marketing perks and wide range of medicines, get our pharma franchise and run a profitable venture.
                    </p>
                  </div>
                  <Link to="#" className="btn btn-primary light">
                    View More <i className="btn-icon-bx fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-30">
                <div className="work-bx active">
                  <div className="work-num-bx">02</div>
                  <div className="work-content">
                    <h5 className="title text-secondary mb-10 ">
                      PCD Pharma Companies
                    </h5>
                    <p>
                      With a minimal investment and maximum benefits, what else would you need to start a productive business with Bioraiz Healthcare- one of the trusted PCD pharma companies.

                    </p>
                  </div>
                  <Link
                    to={"#"}
                    className="btn btn-primary light"
                  >
                    View More <i className="btn-icon-bx fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-30">
                <div className="work-bx">
                  <div className="work-num-bx">03</div>
                  <div className="work-content">
                    <h5 className="title text-secondary mb-10 slide_texttt_7">
                      Quality Assurance
                    </h5>
                    <p>
                      We have obtained multiple certifications, such as ISO 9001:2015, GMP, and WHO-GMP, which makes us committed to global healthcare standards.

                    </p>
                  </div>
                  <Link to={"/"} className="btn btn-primary light">
                    View More <i className="btn-icon-bx fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div> */}
      {/* </div> */}
      {/* <img
            className="pt-img1 animate1"
            src="/assets/images/circle-orange.png"
            alt=""
          />
          <img
            className="pt-img2 animate2"
            src="/assets/images/plus-orange.png"
            alt=""
          />
          <img
            className="pt-img3 animate3"
            src="/assets/images/circle-dots.png"
            alt=""
          />
        </section> */}

      {/* Appointment  */}

      {/* Testimonial  */}

      {/* <Testimonial /> */}

      {/* Blog  */}
      {/* <VideoSlider /> */}

      {/* <section className="mt-5">
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            FAQ's &amp; Knowledgebase
          </h2>
          <div className="container py-2">
            <div className="row">
              <div className="col-12 col-md-6">
                <div
                  className="accordion accordion-flush accord__771"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        1. What Minimum investment is required for Pharma
                        Franchise?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        A PCD Pharma is a successful model as it has low risk and
                        high Returns. For taking up a reputed company’s franchise
                        minimum investment on an average would be 30,000. This
                        involves the product purchase price and promotional
                        material. Minimum investment may vary a little bit from
                        company to company.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion accordion-flush accord__771"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        2. How to choose a right PCD Pharma Company?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Present market is filled with plethora of PCD options. It
                        may be confusing too. Choosing the right PCD involves
                        gathering information on which company provides the best
                        quality and efficacy products. Products should be
                        WHO/GMP/GLP approved. Trademark registration makes a
                        product more trust worthy. Try to find companies that
                        offer more than 1500+ product range and minimum of five
                        divisions.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion accordion-flush accord__771"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        3. What is WHO/GMP?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        WHO- world health organization is basically a global
                        organization that regulates global health matters, setting
                        norms and standards, regulating agendas. In short, this
                        organization regulates public health. WHO certified
                        products gives assurance that the products are 100 percent
                        safe for consumption. GMP-goods manufacturing practices
                        are the steps followed by manufacturing units. Factories
                        make sure that they follow the aseptic conditions and
                        proper sanitation during the manufacturing. It also
                        ensures that the products are impurity free and is
                        manufactured as per standards.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion accordion-flush accord__771"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        4. Promotional Material offered by Orange Biotech Pvt Ltd?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingFour"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Promotional material is required for the proper
                        presentation of the products to the doctors and healthcare
                        providers. Following is the list of promotional material
                        offered by Fibovil pharmaceuticals Pvt Ltd.
                        <ul className="main_acc__4">
                          <li className="ques_acc__4">Mr Bag</li>
                          <li className="ques_acc__4">Visual aid</li>
                          <li className="ques_acc__4">Lbl’s</li>
                          <li className="ques_acc__4">Reminders</li>
                          <li className="ques_acc__4">Product Cards</li>
                          <li className="ques_acc__4">NotePads</li>
                          <li className="ques_acc__4">Pens</li>
                          <li className="ques_acc__4">
                            Marketing gift inputs (paperweights, bottles, and card
                            holders)
                          </li>
                          <li className="ques_acc__4">Diary</li>
                          <li className="ques_acc__4">MR Uniform</li>
                          <li className="ques_acc__4">Visiting cards</li>
                          <li className="ques_acc__4">Catch covers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion accordion-flush accord__771"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive"
                        aria-expanded="false"
                        aria-controls="flush-collapseFive"
                      >
                        5. What is Monopoly Rights in a PCD Company?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingFive"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        PCD Pharma is a business model which involves a franchise
                        agreement between the parent company and the
                        distributor/stockiest for a particular allotted area, that
                        is the buyer and exhibit and sell the therapeutics in that
                        allocated area only and none other can take up the same
                        franchise like the buyer in the same area. This is called
                        a monopoly right per area. Having monopoly rights is
                        beneficial as it increases your uniqueness and overall
                        revenue of the business.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div
                  className="accordion accordion-flush accord__771"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseSix"
                        aria-expanded="false"
                        aria-controls="flush-collapseSix"
                      >
                        6. What are PTR and PTS?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingSix"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        PTR- it refers to price to retailer. There are
                        approximately fixed margins for a retailer that is around
                        28.5% is the price at which goods are provided to
                        retailers. PTS- it refers to price to stockiest. There are
                        approximately fixed margins for a stockiest that is around
                        PTR-10% is the price at which goods are provided to
                        stockiest.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion accordion-flush accord__771"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingSeven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseSeven"
                        aria-expanded="false"
                        aria-controls="flush-collapseSeven"
                      >
                        7. What are COA reports?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingSeven"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        COA reports stand for certificate of analysis. It refers
                        to a lab certificate that gives complete information of
                        the quantity and purity of the molecules present in a
                        drug. Government standard reference index are also
                        provided on the report to check the quality and efficacy
                        of the product.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion accordion-flush accord__771"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseEight"
                        aria-expanded="false"
                        aria-controls="flush-collapseEight"
                      >
                        8. How is PCD different from generic and Ethical Pharma
                        Business?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseEight"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingEight"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        The major difference in both models of pharmaceutical
                        business is their work model. Ethical companies promote
                        their goods on the basis of their own field team whereas
                        in generic there is no field team involved &amp; their
                        business is based on volume market which may have quality
                        issues. PCD pharma prepare their distributor network
                        through franchise agreements, and they emphasize more on
                        quality over quantity.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion accordion-flush accord__771"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingNine">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseNine"
                        aria-expanded="false"
                        aria-controls="flush-collapseNine"
                      >
                        9. Who can take a Pharma Franchise?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseNine"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingNine"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        For starting up a pharma franchise one need to have
                        knowledge and educational experience in therapeutics.
                        Proper documentation is required to get a PCD company’s
                        franchise. Drug license and GST certificate is one of the
                        major documents to start the process. Some experience in
                        this field is required to be successful in pharma
                        franchise business.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

      {/* <section>
          <div className="container my-5">
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
              Get in Touch for More Information
            </h2>
            <div className="row">
              <div className="col-12 col-md-6 px-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.766846768349!2d76.85307551080354!3d30.27222367470467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fb5e70000006b%3A0xce093e491a8b1ae8!2sOrange%20Biotech!5e0!3m2!1sen!2sin!4v1704278724423!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="col-12 col-md-6 px-2 mb-30 mt-3">
                <form
                  className="form-wraper contact-form ajax-form"
                  action="script/contact.php"
                >
                  <div className="ajax-message" />
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        name="name"
                        type="text"
                        required
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        name="email"
                        type="email"
                        required
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        name="phone"
                        type="text"
                        required
                        className="form-control"
                        placeholder="Phone Numbers"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <div className="dropdown bootstrap-select form-select">
                        <select className="form-select">
                          <option selected>Selecty Department</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                        <div className="dropdown-menu ">
                          <div
                            className="inner show"
                            role="listbox"
                            id="bs-select-1"
                            tabIndex={-1}
                          >
                            <ul
                              className="dropdown-menu inner show"
                              role="presentation"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-md-12">
                      <textarea
                        name="message"
                        required
                        className="form-control"
                        placeholder="Type Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <div className="input-group"></div>
                    </div>
                    <div className="col-lg-12">
                      <button
                        name="submit"
                        type="submit"
                        value="Submit"
                        className="btn w-100 btn-secondary btn-lg"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section> */}

      {/* footer */}
      {/* </div> */}
    </>
  );
};

export default HomePage;
