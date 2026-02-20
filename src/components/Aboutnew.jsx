import React from 'react'
import { Link } from "react-router-dom";

function Aboutnew() {
    return (
        <>
            <section className="section-sp1 about-area">
                <div className="container mt-3">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-30 abt_lftimg">
                                <img className='abt-imggg' src="/assets/images/abt_img.webp" alt="" />
                                <img className="bgg__dot-s" src="/assets/images/dots_bg.png" alt="" />

                        </div>
                        <div className="col-lg-6 mb-30">
                            <div className="heading-bx">
                                <h6 className="title-ext text-secondary top_subhead">About Us</h6>
                                <h2 className="title_section2">
                                Why choose Iconic Lifesciences for women’s healthcare?
                                </h2>
                                <p>
                                At Iconic Lifesciences, we are dedicated to empowering women through exceptional gynecological care. With a team of highly skilled professionals and state-of-the-art medical technology, we offer comprehensive services that cater to every stage of a woman’s life. From preventive care to advanced treatments, our goal is to provide personalized, compassionate healthcare in a supportive and safe environment.
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
                                    <div className="feature-container feature-bx1 feature1">
                                        <div className="icon-md">
                                            <span className="icon-cell">
                                                <img
                                                    className="shakeimage88"
                                                    src="/assets/images/healthcare.png"
                                                    alt=""
                                                />{" "}
                                            </span>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="ttr-title">Comprehensive Care</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
                                    <div className="feature-container feature-bx1 feature2">
                                        <div className="icon-md">
                                            <span className="icon-cell">
                                                <img
                                                    className="shakeimage88"
                                                    src="/assets/images/advice.png"
                                                    alt=""
                                                />{" "}
                                            </span>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="ttr-title">Patient-Centered Care</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
                                    <div className="feature-container feature-bx1 feature3">
                                        <div className="icon-md">
                                            <span className="icon-cell">
                                                <img
                                                    className="shakeimage88"
                                                    src="/assets/images/private.png"
                                                    alt=""
                                                />
                                            </span>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="ttr-title">Confidential & Safe</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
                                    <div className="feature-container feature-bx1 feature4">
                                        <div className="icon-md">
                                            <span className="icon-cell">
                                                <img
                                                    className="shakeimage88"
                                                    src="/assets/images/planning.png"
                                                    alt=""
                                                />
                                            </span>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="ttr-title">Personalized Plans</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to="/about-us" className="rd__mr-btn">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
                {/* <img
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
                /> */}
            </section>
        </>
    )
}

export default Aboutnew