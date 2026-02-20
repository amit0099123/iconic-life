import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";
import Seo from "../components/Seo"; // <-- Make sure this path is correct

function PromotionInput() {
  const [promotionList, setPromotionList] = useState([]);

  const getPromotion = async () => {
    try {
      const res = await axios.get(
        "https://iconiclife.in/admin.iconiclife.com/api/get_promotion"
      );

      // Ensure data exists
      if (Array.isArray(res.data)) {
        setPromotionList(res.data);
      } else {
        console.log("Unexpected API response:", res.data);
      }
    } catch (err) {
      console.log("API Error:", err);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getPromotion();
  }, []);

  return (
    <>
      <Seo
        title="Promotional Gifts | Iconic Lifesciences"
        description="Explore our wide range of promotional gifts."
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

      <section>
        <div className="container my-5">
          <h3 className="pro_ducthead">Our Promotional Gifts Range</h3>

          <div className="row my-4">
            {promotionList.length > 0 ? (
              promotionList.map((item, index) => (
                <div className="col-md-4 col-sm-12 mb-4" key={index}>
                  <LazyLoadImage
                    className="product_img1"
                    src={item?.image || "/no-image.jpg"}
                    alt={`Promotion Item ${index + 1}`}
                    effect="blur"
                  />
                </div>
              ))
            ) : (
              <p className="text-center mt-4">No promotional items found.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default PromotionInput;
