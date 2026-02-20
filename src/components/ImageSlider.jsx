import React, { useState } from "react";

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  // Only 1 image → show static image
  if (images.length === 1) {
    return (
      <img
        src={images[0]}
        alt="product"
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "contain",
          borderRadius: "10px",
          background: "#f8f9fa",
          padding: "1rem",
        }}
      />
    );
  }

  // Multiple images → slider
  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <img
        src={images[current]}
        alt="product"
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "contain",
          borderRadius: "10px",
          background: "#f8f9fa",
          padding: "1rem",
        }}
      />

      {/* Arrows */}
      {images.length > 1 && (
	  
        <>

          <button
            onClick={prev}
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              background: "#fff",
              border: "1px solid #ddd",
              padding: "5px 10px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            ❮
          </button>

          <button
            onClick={next}
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              background: "#fff",
              border: "1px solid #ddd",
              padding: "5px 10px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            ❯
          </button>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
