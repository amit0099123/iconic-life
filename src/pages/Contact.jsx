import axios from "axios";
import React, { useState, useEffect } from "react";
import Seo from "../components/Seo";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectDist, setSelectDist] = useState("");
  const [state, setState] = useState([]);
  const [dist, setDist] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_no: "",
    // details: "",
    details: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    // department: "",
    // message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // setFormErrors({
    //   ...formErrors,
    //   [name]: '',
    // });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are empty
    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile_no ||
      !selectedState ||
      !selectDist ||
      !formData.details
    ) {
      return toast.error("Please fill all  the  fields!");
    }

    try {
      const userData = new FormData();
      userData.append("name", formData.name);
      userData.append("email", formData.email);
      userData.append("mobile_no", formData.mobile_no);
      userData.append("state", selectedState);
      userData.append("district", selectDist);
      userData.append("details", formData.details);

      const res = await axios.post(
        `https://bioraiz.in/bioraiz_admin/api/addcompany`,
        userData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 200) {
        toast.success("Company has been updated successfully");
        setFormData({ name: "", email: "", mobile_no: "", details: "" });
        setDist([]);
        setState([]);
      } else {
        toast.error("Error adding company");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error adding company");
    }
  };
  // const validateForm = () => {
  //   // Define regex patterns for validation
  //   const nameRegex = /^[a-zA-Z ]+$/;
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   const phoneRegex = /^[0-9]+$/;

  //   const errors = {};

  //   // Simple validation logic, you can add more complex validation as needed
  //   if (!nameRegex.test(formData.name)) {
  //     errors.name = "Please enter a valid name";
  //   }

  //   if (formData.email === "" || !emailRegex.test(formData.email)) {
  //     errors.email = "Please enter a valid email address";
  //   }

  //   if (formData.phone === "" || !phoneRegex.test(formData.phone)) {
  //     errors.phone = "Please enter a valid phone number";
  //   }

  //   if (formData.department === "") {
  //     errors.department = "Please select a department";
  //   }

  //   if (formData.message === "") {
  //     errors.message = "Please enter a message";
  //   }

  //   return errors;
  // };
  const handleState = (selectedValue) => {
    setSelectedState(selectedValue);
  };
  const handleDist = (item) => {
    setSelectDist(item);
  };
  useEffect(() => {
    districtData();
  }, [selectedState]);

  const districtData = () => {
    try {
      const filteredData = state?.filter(
        (item) => item.state_name === selectedState
      );
      // console.log(filteredData, "===========>filteredData");

      setDist(filteredData);
    } catch (error) {}
  };
  useEffect(() => {
    getDataApi();
  }, []);
  const getDataApi = async () => {
    try {
      const res = await axios.get(
        "https://pharmapcdfranchise.co.in/medicine_admin/api/getdistric/"
      );
      // console.log(res.data);
      setState(res.data);
    } catch (error) {}
  };

  const stateData = state
    ?.filter(
      (item, index, self) =>
        self.findIndex((el) => el.state_name === item.state_name) === index
    )
    .map((item, index) => {
      return {
        value: item.state_name,
        label: item.state_name,
        key: index,
      };
    });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Seo
        title="Contact us | Iconic Lifesciences"
        description="The Best Pharma Products  in the World"
        type="webapp"
        name="Iconic Lifesciences"
      />
      <div className="container-fluid mt-5 p-0">
        <div className="bg_cont__45-pharma_fran ban__nerrr">
          <h2 style={{ color: "#fff" }}>Contact Us</h2>
        </div>
      </div>
      <div className="contact-wraper">
        <div className="row">
          <div className="col-lg-6 mb-30">
            <form className="form-wraper contact-form ajax-form">
              <h2 className="mb-5">Get in Touch</h2>
              <div className="ajax-message" />
              <div className="row">
                <div className="form-group col-md-6">
                  <input
                    name="name"
                    type="text"
                    required
                    className="form-control"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    name="email"
                    type="email"
                    required
                    className="form-control"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    name="mobile_no"
                    type="text"
                    required
                    className="form-control"
                    placeholder="Phone Numbers"
                    value={formData.mobile_no}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <select
                    style={{ padding: "15px" }}
                    className="form-select rounded"
                    aria-label="Default select example"
                    onChange={(e) => handleState(e.target.value)}
                  >
                    <option selected>Select State</option>
                    {state
                      ?.filter(
                        (item, index, self) =>
                          self.findIndex(
                            (el) => el.state_name === item.state_name
                          ) === index
                      )
                      .map((item, index) => {
                        return (
                          <option value={item.state_name} key={index}>
                            {" "}
                            {item.state_name}{" "}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <select
                    style={{ padding: "15px" }}
                    className="form-select rounded"
                    onChange={(e) => handleDist(e.target.value)}
                  >
                    <option selected>Select District</option>
                    {dist.map((item, index) => {
                      return (
                        <option value={item.district_name} key={index}>
                          {item.district_name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="form-group col-md-12">
                  <textarea
                    name="details"
                    required
                    className="form-control"
                    placeholder="Details"
                    defaultValue={""}
                    value={formData.details}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group col-md-12"></div>
                <div className="col-lg-12">
                  <button
                    onClick={handleSubmit}
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
          <div className="col-lg-6 mb-30">
            <div
              className="contact-info ovpr-dark"
              style={{ backgroundImage: "url(images/about/pic-1.webp)" }}
            >
              <div className="info-inner">
                <h4 className="title mb-30">Contact Us For Any Informations</h4>
                <div className="icon-box">
                  <h6 className="title">
                    <i className="ti-map-alt" />
                    Location
                  </h6>
                  <p>
                    
2A, Partap Spintex Street, Dukheri Road, Mohra - 133004
                  </p>
                </div>
                <div className="icon-box">
                  <h6 className="title">
                    <i className="ti-id-badge" />
                    Email &amp; Phone
                  </h6>
                  <a href="javascript:void(0);" className="text-white">
                  iconiclifesciences0@gmail.com
                  </a>
                  <p>(+91) 7206784136</p>
                </div>
                <div className="icon-box">
                  <h6 className="title">
                    <i className="ti-world" />
                    Follow Us
                  </h6>
                  <ul className="social-media">
                    <li>
                      <a target="_blank" href="https://twitter.com/">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://www.linkedin.com/">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/"
                        className="back-color"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position="top-center" />
      </div>
    </>
  );
};

export default Contact;
