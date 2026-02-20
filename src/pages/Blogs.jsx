import React, { useState, useEffect } from "react";
import { parseISO, format } from "date-fns";
import "rsuite/dist/rsuite.min.css";
import { Pagination } from "rsuite/";
import { Link } from "react-router-dom";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import he from "he";
import LoaderDiv from "../components/LoaderDiv";
import Seo from "../components/Seo";

const BlogPage = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activePage, setActivePage] = useState(1); // Current active page
  const [totalPages, setTotalPages] = useState(0); // Total number of pages
  const itemsPerPage = 6;

  // fallback image (the generated image you asked to use)
  const defaultImage = "/mnt/data/A_pair_of_blog_posts_about_the_Pharma_Franchise_bu.png";

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://iconiclife.in/admin.iconiclife.com/api/get_blog"
      );
      const data = res.data || [];
      setBlogData(data);
      const totalPagesCount = Math.ceil((data?.length || 0) / itemsPerPage);
      setTotalPages(totalPagesCount);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []); // fetch once on mount

  const handlePageChange = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // helper to decode html and truncate
  const getPlainText = (html = "", maxChars = 120) => {
    const decoded = he.decode(html || "");
    // remove HTML tags:
    const plain = decoded.replace(/<[^>]+>/g, "");
    if (plain.length <= maxChars) return plain;
    return plain.slice(0, maxChars).trim() + "...";
  };

  return (
    <div>
      <Seo
        title="Blog | Iconic Lifesciences"
        description="Providing best quality of  products and services to our customers."
        type="webapp"
        name="Iconic Lifesciences"
      />

      <section>
        <div className="container-fluid mt-5 p-0">
          <div className="bg_cont__45__products ban__nerrr">
            <h2 style={{ color: "#fff", zIndex: "99" }}>Our Blogs</h2>
          </div>
        </div>

        <section className="section-area section-sp1">
          <div className="container">
            <div className="row py-5 modern-grid">
              {loading ? (
                <div className="d-flex justify-content-center w-100">
                  <LoaderDiv />
                </div>
              ) : blogData && blogData.length ? (
                blogData
                  .slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage)
                  .map((item) => {
                    const dateObject = item?.created_at
                      ? parseISO(item.created_at)
                      : new Date();
                    const formattedDate = format(dateObject, "MMM dd, yyyy");

                    const imageSrc = item?.image ? item.image : defaultImage;

                    return (
                      <article className="modern-card col-xl-4 col-md-6" key={item.id}>
                        <div className="card-inner">
                          <Link to={`/${item.slug}/`} className="media-link">
                            <div className="media-wrap">
                              <LazyLoadImage
                                src={imageSrc}
                                alt={item?.title || "blog image"}
                                effect="blur"
                                className="card-media"
                              />
                              <div className="media-overlay" />
                            </div>
                          </Link>

                          <div className="card-body">
                            <div className="meta-row">
                              <div className="author">
                                <div className="avatar">
                                  <LazyLoadImage
                                    src={imageSrc}
                                    alt="avatar"
                                    effect="blur"
                                  />
                                </div>
                                <span className="author-name">{item?.category || "Admin"}</span>
                              </div>
                              <div className="post-date">
                                <i className="far fa-calendar-alt" /> {formattedDate}
                              </div>
                            </div>

                            <h3 className="card-title">
                              <Link to={`/${item.slug}/`} className="title-link">
                                {item?.title}
                              </Link>
                            </h3>

                            <p className="card-desc">
                              {item?.description ? getPlainText(item.description, 140) : "No description available"}
                            </p>

                            <div className="card-footer">
                              <Link
                                to={`/${item.slug}/`}
                                className="btn-read"
                              >
                                Read More <span className="arrow">→</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })
              ) : (
                <div className="w-100 text-center">
                  <p>No blog posts found.</p>
                </div>
              )}
            </div>

            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center py-5">
                <Pagination
                  prev
                  last
                  next
                  first
                  size="lg"
                  total={totalPages}
                  activePage={activePage}
                  onSelect={handlePageChange}
                />
              </div>
            </div>
          </div>
        </section>

        <button className="back-to-top fa fa-chevron-up" style={{ display: "none" }} />
      </section>
    </div>
  );
};

export default BlogPage;
