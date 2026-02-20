// Import React.memo
import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";
import VideoModel from "./VideoModel";
import he from "he";

const VideoSlider = () => {
  const [video, setVideos] = useState([]);
  console.log(video,'======================= video');
  const [open, setOpen] = useState(false);
  const [vidoId, setVideid] = useState(null);

  const openModel = (id) => {
    setOpen(true);
    setVideid(id);
  };

  const closeModal = () => {
    setOpen(false);
    setVideid(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://bioraiz.in/bioraiz_admin/api/get_video"
        );
        setVideos(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
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
    }),
    []
  );

  // Memoize the Slider component
  const MemoizedSlider = useMemo(
    () =>
      React.memo(({ children }) => <Slider className="cutom_height my-5" {...settings}>{children}</Slider>),
    [settings]
  );

  const memoizedSlides = useMemo(
    () =>
      video.map((videoItem, index) => {
        const url = videoItem.link;
        const parts = url.split(/[/?]/);
        const videoId = parts[parts.indexOf("youtu.be") + 1];
        return (
          <div key={index} className="">
            <div className="blog-card">
              <div className="post-media">
                <iframe
                  width="100%"
                  height={315}
                  src={`https://www.youtube.com/embed/${videoId}`}
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="post-info p-0 btn btn-outline-primary ">
                <button
                  onClick={() => openModel(videoId)}
                  className="btn-sm m-0 btn"
                >
                  {videoItem?.description ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: he.decode(
                          videoItem.description.slice(0, 20) + "..."
                        ),
                      }}
                    />
                  ) : (
                    "No description available"
                  )}
                </button>
                <i className="btn btn-sm fas fa-chevron-right" />
              </div>
            </div>
          </div>
        );
      }),
    [video, openModel]
  );

  return (
    <>
    {
      video.length >0 && (
<section
      className="section-area section-sp1 blog-area"
      style={{
        backgroundImage: "url(/assets/images/background/line-bg2.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >

      <div className="container">
        <div className="heading-bx text-center">
          <h2 className="title">Franchise Owners Love Working With Us</h2>
        </div>
        <div className="">
          {" "}
          <MemoizedSlider>{memoizedSlides}</MemoizedSlider>
        </div>
        <img
        className="pt-img1 animate1"
        src="/assets/images/trangle-orange.png"
        alt=""
      />
      <img
        className="pt-img2 animate2"
        src="/assets/images/square-dots-orange.png"
        alt=""
      />
      <img
        className="pt-img3 animate-rotate"
        src="/assets/images/line-circle-blue.png"
        alt=""
      />
      <img
        className="pt-img4 animate-wave"
        src="/assets/images/wave-blue.png"
        alt=""
      />
      </div>
      
      <VideoModel open={open} videoId={vidoId} onClose={closeModal} />
    </section>
      )
    }
    </> 
  );
};

export default VideoSlider;
