import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CommentForm({ blog_Id, fetchComment, comment_Id }) {
  console.log(blog_Id, comment_Id, "guri");
  const [status,setstatus]=useState()
  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    comment: "",
    url: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentForm({ ...commentForm, [name]: value });
  };
  const fetchComments = async () => {
    try {
      const commentRes = await axios.get(
        `https://bioraiz.in/bioraiz_admin/api/get_comment/${blog_Id}`
      );
      // Handle the comment response here, maybe by setting it to state
      console.log(commentRes.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      !commentForm.comment ||
      !commentForm.name ||
      !commentForm.email ||
      !commentForm.url
    ) {
      return toast.error("Please fill all the fields!");
    }

    try {
      const formData = new FormData();
      formData.append("blog_id", blog_Id);
      formData.append("comment_id", comment_Id);
      formData.append("name", commentForm.name);
      formData.append("email", commentForm.email);
      formData.append("website", commentForm.url);
      formData.append("comment", commentForm.comment);

      const res = await axios.post(
        `https://bioraiz.in/bioraiz_admin/api/add_replay/${blog_Id}/${comment_Id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
 setstatus(res.status)
      if (res.status === 200) {
        toast.success("Reply will add please wait for apprpved it");
         
        fetchComments(); // Assuming fetchComment is a function passed as a prop
      } else {
        toast.error("Error adding reply");
      }
    } catch (error) {
      console.error("Error adding reply:", error);
    }
  };
  useEffect(() => {
    if (status === 200) {
      fetchComments();
    }
  }, [status, blog_Id]);

  return (
    <div>
      <p className="comment-notes">
        <span id="email-notes">Your email address will not be published.</span>
        <span className="required-field-message">
          Required fields are marked <span className="required">*</span>
        </span>
      </p>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label">
            Comment <span className="required">*</span>
          </label>
          <textarea
            className="form-control"
            id="comment"
            value={commentForm.comment}
            onChange={handleChange}
            name="comment"
            rows="8"
            maxLength="65525"
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Name <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            name="name"
            value={commentForm.name}
            onChange={handleChange}
            maxLength="245"
            autoComplete="name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={commentForm.email}
            onChange={handleChange}
            maxLength="100"
            aria-describedby="email-notes"
            autoComplete="email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="url" className="form-label">
            Website
          </label>
          <input
            type="url"
            className="form-control"
            id="url"
            name="url"
            value={commentForm.url}
            onChange={handleChange}
            maxLength="200"
            autoComplete="url"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default CommentForm;
