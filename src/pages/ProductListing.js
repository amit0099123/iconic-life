import React, { useEffect, useState } from "react";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Seo from "../components/Seo";
import ImageViewer from "react-simple-image-viewer";

function ProductListing() {
  const [prdctList, setPrdctList] = useState([]);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getProdct = async () => {
    try {
      const res = await axios.get(
        "https://iconiclife.in/admin.iconiclife.com/api/get_listing"
      );
      setPrdctList(res.data);
    } catch (err) {
      console.log("Error fetching products:", err);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getProdct();
  }, []);

  // IMAGE LIST (required by lightbox viewer)
  const images = prdctList.map((p) => p.image);

  const openImageViewer = (index) => {
    setCurrentIndex(index);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setCurrentIndex(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <Seo
        title="Products | Iconic Lifesciences"
        description="The Best Pharma Products in the World"
        type="webapp"
        name="Iconic Lifesciences"
      />

      {/* Banner Section */}
      <section>
        <div className="container-fluid mt-5 p-0">
          <div className="bg_cont__45__ppfcompany ban__nerrr">
            <h2 style={{ color: "#fff", zIndex: 99 }}></h2>
          </div>
        </div>
      </section>

      {/* Product Listing Section */}
      <section id="pro_duct12list">
        <div className="container mt-5">
          <h3 className="pro_ducthead">Featured Products</h3>

          <div className="row my-5 d-flex justify-content-center">
            {prdctList.length === 0 ? (
              <p>Loading products...</p>
            ) : (
              prdctList.map((item, index) => (
                <div
                  className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
                  key={index}
                >
                  <LazyLoadImage
                    className="product_img1"
                    src={item.image || "/default.jpg"}
                    alt={item.name || "product image"}
                    onClick={() => openImageViewer(index)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              ))
            )}
          </div>

          {/* Lightbox Viewer */}
          {isViewerOpen && (
            <ImageViewer
              src={images}
              currentIndex={currentIndex}
              onClose={closeImageViewer}
              disableScroll={false}
              backgroundStyle={{
                backgroundColor: "rgba(0,0,0,0.9)"
              }}
              closeOnClickOutside={true}
            />
          )}
        </div>
      </section>
    </>
  );
}

export default ProductListing;
