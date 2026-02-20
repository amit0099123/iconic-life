import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const CustomersAry = [
  {
    id: "01",
    title: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Quis ipsum suspendisse ultrices gravida. Risus
  commodo viverra maecena ssuspendisse ultrices gravida.`,
    name: "aaaaaa",
  },
  {
    id: "02",
    title: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Quis ipsum suspendisse ultrices gravida. Risus
  commodo viverra maecena ssuspendisse ultrices gravida.`,
    name: "bbbbb",
  },
  {
    id: "03",
    title: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Quis ipsum suspendisse ultrices gravida. Risus
  commodo viverra maecena ssuspendisse ultrices gravida.`,
    name: "cccccc",
  },
  {
    id: "04",
    title: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Quis ipsum suspendisse ultrices gravida. Risus
  commodo viverra maecena ssuspendisse ultrices gravida.`,
    name: "ddddd",
  },
  {
    id: "05",
    title: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Quis ipsum suspendisse ultrices gravida. Risus
  commodo viverra maecena ssuspendisse ultrices gravida.`,
    name: "eeeee",
  },
  {
    id: "06",
    title: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Quis ipsum suspendisse ultrices gravida. Risus
  commodo viverra maecena ssuspendisse ultrices gravida.`,
    name: "fffff",
  },
];
const Testimonial = () => {
  let sliderRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);


  let settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    // dots: false,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,

    afterChange: () => setUpdateCount(updateCount + 1),
    beforeChange: (current, next) => setSlideIndex(next),
  };

  return (
    <section className="section-area section-sp3 testimonial-wraper">
      <div className="container">
        <div className="heading-bx text-center">
          <h6 className="title-ext text-secondary">Testimonial</h6>
          <h2 className="title m-b0">
            See What Are The Customers <br />
            Saying About us
          </h2>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 text-center">
            <div className="thumb-wraper">
              <img className="bg-img" src="/assets/images/shape.png" alt="" />
              <ul>
                <li data-member={1}>
                  <Link onClick={() => sliderRef.current.slickGoTo(0)}>
                    <img src="/assets/images/pic1.webp" alt="" />
                  </Link>
                </li>
                <li data-member={2} >
                  <Link onClick={() => sliderRef.current.slickGoTo(1)}>
                    <img src="/assets/images/pic2.webp" alt="" />
                  </Link>
                </li>
                <li data-member={3} className="">
                  <Link onClick={() => sliderRef.current.slickGoTo(2)}>
                    <img src="/assets/images/pic3.webp" alt="" />
                  </Link>
                </li>
                <li data-member={4}>
                  <Link onClick={() => sliderRef.current.slickGoTo(3)}>
                    <img src="/assets/images/pic4.webp" alt="" />
                  </Link>
                </li>
                <li data-member={5}>
                  <Link onClick={() => sliderRef.current.slickGoTo(4)}>
                    <img src="/assets/images/pic5.webp" alt="" />
                  </Link>
                </li>
                <li data-member={6}>
                  <Link onClick={() => sliderRef.current.slickGoTo(5)}>
                    <img src="/assets/images/pic6.webp" alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="swiper-container testimonial-slide swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
              <Slider
                ref={sliderRef}
                {...settings}
              >
                {CustomersAry.map((item) => {
                  return (
                    <div className="testimonial-bx" key={item.id}>
                      <div className="testimonial-content">
                        <p>{item.title}</p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">{item.name}</h5>
                        <p>patient</p>
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left" />
                      </div>
                    </div>
                  );
                })}
              </Slider>
              <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-fraction">
                <span className="swiper-pagination-current">{slideIndex + 1}</span>{" "}
                /{" "}
                <span className="swiper-pagination-total">
                  {CustomersAry?.length}
                </span>
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className="pt-img1 animate1"
        src="/assets/images/plus-orange.png"
        alt=""
      />
      <img
        className="pt-img2 animate2"
        src="/assets/images/square-blue.png"
        alt=""
      />
      <img
        className="pt-img3 animate3"
        src="/assets/images/circle-dots.png"
        alt=""
      />
      <img
        className="pt-img4 animate4"
        src="/assets/images/circle-orange-2.png"
        alt=""
      />
    </section>
  );
};

export default Testimonial;
