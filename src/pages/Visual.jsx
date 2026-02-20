import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Modal, Button, ButtonToolbar, Placeholder } from "rsuite";
import { ColorRing } from "react-loader-spinner";

const VisualAid = () => {
  const [visulalData, setVisualData] = useState([]);
  const [cat, setCat] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [open, setOpen] = React.useState(false);
  const [modelImg, setModelImg] = useState();

  const handleOpen = (img) => {
    setOpen(true);
    setModelImg(img);
  };
  const handleClose = () => setOpen(false);
  const getVisualData = async () => {
    try {
      const res = await axios.get(
        "https://iconiclife.in/admin.iconiclife.com/api/get_visual"
      );
      setVisualData(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    getVisualData();
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://iconiclife.in/admin.iconiclife.com/api/get_category"
      );
      setCat(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Modal open={open} onClose={handleClose} size={"md"}>
        <Modal.Header>
          {/* <Modal.Title>Modal Title</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <img
            src={modelImg}
            alt="Image"
            style={{ width: "100%", height: "400px" }}
          />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer> */}
      </Modal>
      <div>
        <section>
          <div className="container-fluid mt-5 p-0">
            <div className="bg_cont__45__ppfcompany ban__nerrr">
              <h2 style={{ color: "#fff", zIndex: "99" }}>Visual Aid</h2>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 p-3 text-center">
                {/* <h2>Visual Aid</h2> */}
                <div className="row">
                  {isLoading ? (
                    <ColorRing
                      visible={true}
                      height="80"
                      width="80"
                      ariaLabel="color-ring-loading"
                      wrapperStyle={{}}
                      wrapperClass="color-ring-wrapper"
                      colors={[
                        "#e15b64",
                        "#f47e60",
                        "#f8b26a",
                        "#abbd81",
                        "#849b87",
                      ]}
                    />
                  ) : (
                    <>
                      {" "}
                      {visulalData.map((item) => {
                        return (
                          <Link
                            key={item.id}
                            onClick={() => handleOpen(item.image)}
                            className="col-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 p-3"
                          >
                            <img className="visual__img7" src={item.image} />
                          </Link>
                        );
                      })}
                    </>
                  )}
                </div>
              </div>
              {/* <div className="col-3 col-lg-3 col-md-6 col-sm-12 p-3 mt-5 text-center">
                <h3>General Range</h3>
                <ul className="catg-rj">
                  {cat.map((item) => {
                    return (
                      <li key={item.id}>
                        <Link
                          to={`/products-single/${item.name}`}
                          className="categ_list__4"
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div> */}
            </div>
          </div>
        </section>
        {/* Footer ==== */}

        {/* Footer END ==== */}
        <button
          className="back-to-top fa fa-chevron-up"
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

export default VisualAid;
