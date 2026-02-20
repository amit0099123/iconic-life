import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { parseISO, format } from "date-fns";
import { LazyLoadImage } from "react-lazy-load-image-component";
import he from "he";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoderView from "../components/LoderView";
import { FaUserCircle } from "react-icons/fa";
import dummy_img from "../Assest/dummy-img-1.jpg";
import CommentForm from "../components/CommentForm";
import { BsArrowReturnLeft, BsX } from "react-icons/bs";
import Seo from "../components/Seo";

function BlogDeatils() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDate, setIsDate] = useState();
  const [blogData, setBlogData] = useState([]);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [allComment, setAllComment] = useState([]);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [showAllReplies, setShowAllReplies] = useState(false);
  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    comment: "",
    url: "",
  });

  const blogId = useParams();
  const id = blogId.blogView;

  const toggleReplyForm = (id) =>
    setShowReplyForm((prev) => (prev === id ? null : id));

  const handleStarHover = (i) => setHoveredRating(i);
  const handleStarClick = (i) => setRating(i);
  const handleMouseLeave = () => setHoveredRating(0);

  const handleChange = (e) => {
    setCommentForm({ ...commentForm, [e.target.name]: e.target.value });
  };

  const renderStar = (index) => {
    const filled = index <= (hoveredRating || rating);
    return (
      <span
        key={index}
        style={{ color: filled ? "yellow" : "grey", cursor: "pointer" }}
        onMouseEnter={() => handleStarHover(index)}
        onClick={() => handleStarClick(index)}
        onMouseLeave={handleMouseLeave}
      >
        ★
      </span>
    );
  };

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  const getApiBlog = async () => {
    try {
      const result = await axios.get(
        `https://iconiclife.in/admin.iconiclife.com/api/get_blog/${id}`
      );
      const res = await axios.get(
        "https://iconiclife.in/admin.iconiclife.com/api/get_blog"
      );

      const transformedData = result.data.reduce((acc, item) => item, {});
      setData(transformedData);

      const filtered = res.data.filter((itm) => itm.id !== transformedData.id);
      setBlogData(filtered);

      const dateObject = parseISO(transformedData.created_at);
      setIsDate(format(dateObject, "MMM dd, yyyy"));

      setLoading(false);
    } catch (err) {
      setLoading(true);
    }
  };

  const fetchComments = async () => {
    try {
      const res = await axios.get(
        `https://iconiclife.in/admin.iconiclife.com/api/get_comment/${data?.id}`
      );
      setAllComment(res.data);
      setShowReplyForm(false);
    } catch (e) {
      console.log("Comment fetch error:", e);
    }
  };

  useEffect(() => {
    setLoading(true);
    setShowReplyForm(false);
    setShowAllReplies(false);
    getApiBlog();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [blogId, data.id]);

  useEffect(() => {
    fetchComments();
  }, [data.id]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (
      !commentForm.comment ||
      !commentForm.name ||
      !commentForm.email ||
      !rating
    ) {
      return toast.error("Please fill all the fields!");
    }

    try {
      const formData = new FormData();
      formData.append("blog_id", data.id);
      formData.append("name", commentForm.name);
      formData.append("email", commentForm.email);
      formData.append("website", commentForm.url);
      formData.append("comment", commentForm.comment);
      formData.append("rating", rating);

      const res = await axios.post(
        `https://iconiclife.in/admin.iconiclife.com/api/add_comment/${data.id}`,
        formData
      );

      if (res.status === 200) {
        toast.success("Comment added successfully");
        setCommentForm({ name: "", email: "", comment: "", url: "" });
        setRating(0);
        fetchComments();
      }
    } catch (err) {
      console.log("Error adding comment:", err);
    }
  };

  const formatDate = (d) =>
    new Date(d).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

  if (loading) return <LoderView />;

  return (
    <div>
      <Seo
        title={`${data.title} | Iconic Lifesciences`}
        description="The Best Pharma Products in the World"
        type="webapp"
        name="Iconic Lifesciences"
      />

      {/* ---------------- Added Section Here ---------------- */}
      <section>
        <div className="container-fluid mt-5 p-0">
          <div className="bg_cont__45__products ban__nerrr">
            <h2 style={{ color: "#fff", zIndex: "99" }}>Our Blogs</h2>
          </div>
        </div>
      </section>
      {/* ---------------------------------------------------- */}

      <div className="container my-5">
        <div className="row mx-auto">
          {/* LEFT SIDE BLOG CONTENT */}
          <div className="col-lg-8 col-md-8 col-sm-12 mt-md-5">
            <div className="row">
              <div className="col-12 mx-auto blog_img_border py-5">
                <div className="d-flex justify-content-center border">
                  <LazyLoadImage src={data?.image} className="img-fluid" />
                </div>

                <div className="col-12">
                  <div className="d-flex justify-content-between align-items-center my-3 px-5">
                    <h1 className="fw-bolder" style={{ fontSize: "26px" }}>
                      {data?.title}
                    </h1>
                    <h6>{isDate}</h6>
                  </div>

                  <p className="blog_desc_1 px-5 mt-md-4">
                    {data?.description ? (
                      <span
                        dangerouslySetInnerHTML={{
                          __html: he.decode(data.description),
                        }}
                      />
                    ) : (
                      "No description available"
                    )}
                  </p>
                </div>
              </div>

              {/* COMMENTS SECTION */}
              <div className="row my-md-3">
                <div className="col-12">
                  <h5 className="comments-title">
                    {allComment.length} comments on {data.title}
                  </h5>

                  <ol className="comment-list">
                    {allComment.map((comment, index) => (
                      <li key={index} className="comment depth-1">
                        <article className="comment-body">
                          <footer className="comment-meta">
                            <div className="vcard p-2">
                              <LazyLoadImage
                                src={dummy_img}
                                className="dummy-img"
                              />
                              <b className="fn ms-2">{comment.name}</b>
                              <span className="says">says:</span>
                            </div>

                            <p className="comment-date">
                              {formatDate(comment.created_at)}
                            </p>
                          </footer>

                          <div className="comment-content">
                            <p className="m-md-1">Review</p>
                            <div className="saswp-rvw-str">
                              {Array.from(
                                { length: comment.rating },
                                (_, i) => (
                                  <svg key={i} width="20" height="20">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                  </svg>
                                )
                              )}
                            </div>
                            <p>{comment.comment}</p>
                          </div>

                          {/* Reply Button */}
                          <div className="reply my-2">
                            <button
                              onClick={() => toggleReplyForm(comment.id)}
                              className="btn btn-link"
                            >
                              {showReplyForm === comment.id ? (
                                <>
                                  Cancel <BsX />
                                </>
                              ) : (
                                <>
                                  <BsArrowReturnLeft /> Reply
                                </>
                              )}
                            </button>

                            {showReplyForm === comment.id && (
                              <CommentForm
                                comment_Id={comment.id}
                                blog_Id={data?.id}
                                fetchComments={fetchComments}
                              />
                            )}
                          </div>
                        </article>
                      </li>
                    ))}
                  </ol>

                  {/* COMMENT FORM */}
                  <div className="comment_respond">
                    <h3>Leave a Reply</h3>

                    <h2>
                      {stars.map(renderStar)}
                      {hoveredRating !== 0 && (
                        <span>Rating: {hoveredRating}</span>
                      )}
                    </h2>

                    <form onSubmit={onSubmit}>
                      <div className="mb-3">
                        <label>
                          Comment <span className="required">*</span>
                        </label>
                        <textarea
                          className="form-control"
                          name="comment"
                          value={commentForm.comment}
                          onChange={handleChange}
                          rows="8"
                          required
                        ></textarea>
                      </div>

                      <div className="mb-3">
                        <label>
                          Name <span className="required">*</span>
                        </label>
                        <input
                          className="form-control"
                          name="name"
                          value={commentForm.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label>
                          Email <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={commentForm.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label>Website</label>
                        <input
                          className="form-control"
                          name="url"
                          value={commentForm.url}
                          onChange={handleChange}
                        />
                      </div>

                      <button className="btn btn-primary">Submit</button>
                    </form>

                    <ToastContainer position="top-center" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — RECENT POSTS */}
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="recent_post">
              <h3>Recent Posts</h3>

              {blogData.slice(0, 5).map((item, i) => {
                const dateObject = parseISO(item.created_at);
                const formattedDate = format(dateObject, "MMM dd, yyyy");

                return (
                  <Link to={`/${item.slug}/`} className="blog_container my-3" key={i}>
                    <div className="image_container_left">
                      <LazyLoadImage src={item.image} width={150} height={150} />
                    </div>

                    <div className="text_container_right">
                      <h4 className="fw-normal text-capitalize" style={{ color: "#03175b" }}>
                        {item.title.slice(0, 20) + "..."}
                      </h4>
                      <h4 className="blog_date_top st-post-date">{formattedDate}</h4>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDeatils;
