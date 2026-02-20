// ===================== IMPORTS =====================
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Seo from "../components/Seo";
import ImageSlider from "../components/ImageSlider";
import he from "he";

// ===================== COMPONENT =====================
const SingleProduct = () => {
  // Get URL params (category & product slug)
  const { category, product: productSlug } = useParams();

  // Access router state (for faster navigation)
  const location = useLocation();

  // ===================== STATE =====================
  // Product data (from route state or API)
  const [product, setProduct] = useState(location.state?.product || null);

  // Loading state (true if product not passed via state)
  const [loading, setLoading] = useState(!location.state?.product);

  // Error message
  const [error, setError] = useState("");

  // ===================== API =====================
  const PRODUCT_API =
    "https://iconiclife.in/admin.iconiclife.com/api/get_product";

  // ===================== HELPERS =====================
  // Convert product name to URL-friendly slug
  const slugify = (str) =>
    str
      ?.toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");

  // ===================== FETCH PRODUCT =====================
  // Fetch product from API if not available via route state
  useEffect(() => {
    if (product) return;

    fetch(PRODUCT_API)
      .then((res) => res.json())
      .then((data) => {
        // Find product by slug
        const matchedProduct = data.find(
          (p) => slugify(p.name) === productSlug
        );

        if (matchedProduct) {
          setProduct(matchedProduct);
        } else {
          setError("Product not found");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load product");
        setLoading(false);
      });
  }, [product, productSlug]);

  // ===================== LOADING STATE =====================
  if (loading) {
    return (
      <div className="container my-5 text-center">
        <h4>Loading product details...</h4>
      </div>
    );
  }

  // ===================== ERROR STATE =====================
  if (error || !product) {
    return (
      <div className="container my-5 text-center">
        <h2>{error || "Product details not found!"}</h2>
        <p>Please go back and select a product again.</p>
      </div>
    );
  }

  // ===================== IMAGE DATA =====================
  // Prepare images for slider (remove empty values)
  const sliderImages = [product.image, product.visual_aid].filter(Boolean);

  // ===================== RENDER =====================
  return (
    <>
      {/* ===================== SEO ===================== */}
      <Seo
        title={`${product.name} | Iconic Lifesciences`}
        description={product.composition || "Pharma Product Details"}
        type="webapp"
        name="Iconic Lifesciences"
      />

      {/* ===================== TOP BANNER ===================== */}
      <div className="container-fluid mt-5 p-0">
        <div className="bg_cont__45__products ban__nerrr">
          <h2 style={{ color: "#fff", zIndex: 99 }}></h2>
        </div>
      </div>

      {/* ===================== PRODUCT WRAPPER ===================== */}
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#fafafa",
          padding: "3rem 1rem",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        }}
      >
        {/* ===================== PRODUCT CARD ===================== */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            background: "#fff",
            borderRadius: "30px",
            padding: "40px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
          }}
        >
          {/* ===================== GRID LAYOUT ===================== */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 1fr",
              gap: "40px",
            }}
          >
            {/* ===================== LEFT: IMAGE SECTION ===================== */}
            <div>
              {/* Main Image Slider */}
              <div
                style={{
                  background: "#f4f4f4",
                  padding: "20px",
                  borderRadius: "20px",
                }}
              >
                <ImageSlider images={sliderImages} />
              </div>

              {/* Thumbnail Images */}
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  marginTop: "10px",
                  justifyContent: "center",
                }}
              >
                {sliderImages.map((img, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "12px",
                      background: "#f4f4f4",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={img}
                      alt="thumb"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ===================== RIGHT: PRODUCT DETAILS ===================== */}
            <div style={{ paddingTop: "10px" }}>
              {/* Product Name */}
              <h1
                style={{
                  color: "#c2185b",
                  fontSize: "2.6rem",
                  fontWeight: "800",
                  marginBottom: "1rem",
                }}
              >
                {product.name}
              </h1>

              {/* Composition */}
              <div
                style={{
                  background: "#fff",
                  padding: "20px",
                  borderRadius: "15px",
                  border: "2px solid #f4c7d9",
                  marginBottom: "25px",
                }}
              >
                <h3
                  style={{
                    color: "#c2185b",
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    marginBottom: "6px",
                    fontWeight: "700",
                  }}
                >
                  Composition
                </h3>
                <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>
                  {product.composition}
                </p>
              </div>

              {/* Category & Pack Size */}
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  marginBottom: "25px",
                }}
              >
                {/* Category */}
                <div
                  style={{
                    background: "#fff",
                    padding: "18px",
                    borderRadius: "15px",
                    border: "2px solid #f4c7d9",
                    flex: 1,
                  }}
                >
                  <h4
                    style={{
                      color: "#c2185b",
                      fontWeight: "700",
                      fontSize: "0.9rem",
                      textTransform: "uppercase",
                      marginBottom: "6px",
                    }}
                  >
                    Category
                  </h4>
                  <p style={{ margin: 0, fontWeight: "600" }}>
                    {product.category || category}
                  </p>
                </div>

                {/* Pack Size */}
                <div
                  style={{
                    background: "#fff",
                    padding: "18px",
                    borderRadius: "15px",
                    border: "2px solid #f4c7d9",
                    flex: 1,
                  }}
                >
                  <h4
                    style={{
                      color: "#c2185b",
                      fontWeight: "700",
                      fontSize: "0.9rem",
                      textTransform: "uppercase",
                      marginBottom: "6px",
                    }}
                  >
                    Pack Size
                  </h4>
                  <p style={{ margin: 0, fontWeight: "600" }}>
                    {product.size || "N/A"}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div
                style={{
                  background: "#fff",
                  padding: "20px",
                  borderRadius: "15px",
                  border: "2px solid #f4c7d9",
                }}
              >
                <h4
                  style={{
                    color: "#c2185b",
                    fontWeight: "700",
                    fontSize: "0.9rem",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  Description
                </h4>

                {/* HTML-safe decoded description */}
                <div
                  style={{
                    lineHeight: "1.6",
                    fontSize: "1rem",
                    fontWeight: "500",
                    color: "#333",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: he.decode(product.description),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
