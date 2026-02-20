import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo"; // <-- missing import added

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const CATEGORY_API =
    "https://iconiclife.in/admin.iconiclife.com/api/get_category";

  useEffect(() => {
    fetch(CATEGORY_API)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log("Category API Error:", err));
  }, []);

  return (
    <>
      <Seo
        title="Products | Iconic Lifesciences"
        description="The Best Pharma Products in the World"
        type="webapp"
        name="Iconic Lifesciences"
      />

      <section>
        {/* Banner */}
        <div className="container-fluid mt-5 p-0">
          <div className="bg_cont__45__products ban__nerrr">
            <h2 style={{ color: "#fff", zIndex: 99 }}></h2>
          </div>
        </div>

        {/* Category List */}
        <div className="container py-5">
       <h3 class="pro_ducthead py-5">Explore all product categories</h3> 

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 0fr))",
              gap: "25px",
			  justifyContent: "center",
            }}
          >
            {categories.map((cat) => (
              <Link
                to={`/category/${cat.id}`}
                key={cat.id}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "15px",
                    overflow: "hidden",
                    cursor: "pointer",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
                    textAlign: "center",
                    paddingBottom: "10px",
                    transition: "0.3s",
                  }}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                    }}
                  />

                  <h4
                    style={{
                      marginTop: "12px",
                      marginBottom: "10px",
                      color: "#fd4871",
                      fontWeight: "700",
                    }}
                  >
                    {cat.name}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryList;
