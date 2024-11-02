import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import galleryImages from "./galleryImages";

const MasonryImagesGallery = () => {
  const imageStyle = {
    width: "100%",
    display: "block",
    borderRadius: "10px",
    height: "250px", 
    objectFit: "cover", // Crop images to fit the height
    transition: "transform 0.3s ease", // Add a transition for hover effect
  };

  const masonryStyle = {
    marginBottom: "1rem", // Add bottom margin to the Masonry container
  };

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter="1rem" style={masonryStyle}>
        {galleryImages.map((item, index) => (
          <img
            className="masnory__img"
            src={item}
            key={index}
            alt=""
            style={imageStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)"; // Scale on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)"; // Reset scale on leave
            }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryImagesGallery;
