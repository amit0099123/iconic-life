import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Seo from "../components/Seo";

const ProductByCategory = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  const CATEGORY_API =
    "https://iconiclife.in/admin.iconiclife.com/api/get_category";

  const slugify = (str) =>
    str
      ?.toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");

  useEffect(() => {
    // First fetch category list
    fetch(CATEGORY_API)
      .then((res) => res.json())
      .then((data) => {
        const cat = data.find((c) => c.id == id);
        if (cat) {
          setCategoryName(cat.name);

          // FETCH PRODUCTS USING NAME, NOT ID
          const PRODUCT_API = `https://iconiclife.in/admin.iconiclife.com/api/get_product?category=${encodeURIComponent(
            cat.name
          )}`;

          fetch(PRODUCT_API)
            .then((res) => res.json())
            .then((prod) => setProducts(prod || []))
            .catch((err) => console.log("Product API Error:", err));
        }
      })
      .catch((err) => console.log("Category API Error:", err));
  }, [id]);

  return (
    <>
      <Seo
        title={`${categoryName} | Iconic Lifesciences`}
        description={`Products under ${categoryName}`}
        type="webapp"
        name="Iconic Lifesciences"
      />

      <section>
        <div className="container-fluid mt-5 p-0">
          <div className="bg_cont__45__products ban__nerrr">
            <h2 style={{ color: "#fff", zIndex: 99 }}></h2>
          </div>
        </div>

        <div className="container">
          <h3 className="pro_ducthead py-5">{categoryName}</h3>

          {/* NO PRODUCT MESSAGE */}
          {products.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <h4 style={{ color: "#666" }}>No products found in this category.</h4>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 0fr))",
                gap: "25px",
              }}
            >
              {products.map((p) => {
                const categorySlug = slugify(categoryName);
                const productSlug = slugify(p.name);

                const productLink = `/products-single/${categorySlug}/${productSlug}`;

                return (
                  <Link
                    to={productLink}
                    key={p.id}
                    state={{ product: p }}
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="product-card"
                      style={{
                        background: "#fff",
                        borderRadius: "15px",
                        padding: "15px",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                        textAlign: "center",
                        transition: "0.3s",
                        marginBottom: "40px",
                      }}
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        style={{
                          width: "100%",
                          height: "270px",
                          objectFit: "cover",
                          borderRadius: "10px",
                        }}
                      />

                      <h4
                        style={{
                          marginTop: "12px",
                          color: "#333",
                          fontWeight: "600",
                        }}
                      >
                        {p.name}
                      </h4>

                      <button className="btn1st11 mt-3">Explore More</button>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <style>
        {`
          .product-card:hover {
            transform: translateY(-8px) scale(1.03);
            box-shadow: 0 12px 30px rgba(0,0,0,0.18);
          }
        `}
      </style>
    </>
  );
};

export default ProductByCategory;
