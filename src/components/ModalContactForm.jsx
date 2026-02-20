import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const ModalContactForm = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectDist, setSelectDist] = useState("");
  const [state, setState] = useState([]);
  const [dist, setDist] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_no: "",
    details: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    mobile_no: "",

    details: "",
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
        setSelectedState("");
        setSelectDist("");
      } else {
        toast.error("Error adding company");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error adding company");
    }
  };

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
  return (
    <div className="contact-wraper" id="modal-rj">
      <div className="row">
        <div className="col-12">
          <form
            className="form-wraper contact-form ajax-form modal-form-rj"
            action="script/contact.php"
          >
            <div className="ajax-details" />
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
                  placeholder="Mobile No"
                  value={formData.mobile_no}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group col-md-6">
                <select
                  style={{ padding: "12.5px", fontSize:"12px", color: "#919191", border: "1px solid #70afc3" }}
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
                  style={{ padding: "12.5px", fontSize:"12px", color: "#919191", border: "1px solid #70afc3" }}
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

              <div className="form-group col-md-6">
                <textarea
                  name="details"
                  required
                  className="form-control text-rj"
                  placeholder="Details"
                  defaultValue={""}
                  value={formData.details}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group col-md-12">
                <div className="input-group">
                  <div
                    className="g-recaptcha"
                    data-sitekey="6Lf2gYwUAAAAAJLxwnZTvpJqbYFWqVyzE-8BWhVe"
                    data-callback="verifyRecaptchaCallback"
                    data-expired-callback="expiredRecaptchaCallback"
                  >
                    {/* <div style={{ width: 304, height: 78 }}>
                      <iframe
                        title="reCAPTCHA"
                        width={304}
                        height={78}
                        role="presentation"
                        name="a-ib8i9fchr9uc"
                        frameBorder={0}
                        scrolling="no"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                        src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Lf2gYwUAAAAAJLxwnZTvpJqbYFWqVyzE-8BWhVe&co=aHR0cHM6Ly9tZWRpdHJvLnRoZW1ldHJhZGVzLmNvbTo0NDM.&hl=en&v=u-xcq3POCWFlCr3x8_IPxgPu&size=normal&cb=2cfl676c9wgu"
                      />

                      <textarea
                        id="g-recaptcha-response"
                        name="g-recaptcha-response"
                        className="g-recaptcha-response"
                        style={{
                          width: 250,
                          height: 40,
                          border: "1px solid rgb(193, 193, 193)",
                          margin: "10px 25px",
                          padding: 0,
                          resize: "none",
                          display: "none",
                        }}
                        defaultValue={""}
                      />
                    </div> */}
                    {/* <iframe style={{ display: "none" }} /> */}
                  </div>
                  {/* <input
                    className="form-control d-none"
                    style={{ display: "none" }}
                    data-recaptcha="true"
                    required=""
                    data-error="Please complete the Captcha"
                  /> */}
                </div>
              </div>

              <div className="col-lg-12 d-flex justify-content-center">
                <button
                  onClick={handleSubmit}
                  name="submit"
                  type="submit"
                  value="Submit"
                  className="btn btn-secondary btn-lg btn-rj"
                >
                  Submit
                </button>
              </div>

            </div>
          </form>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default ModalContactForm;
