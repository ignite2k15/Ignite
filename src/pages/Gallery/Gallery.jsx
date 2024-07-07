import React from "react";
import "./Gallery.css";
import Pick1 from "../../assets/pick1.jpg";
import Pick2 from "../../assets/pick2.jpg";
import Pick3 from "../../assets/pick3.jpg";
import Pick4 from "../../assets/pick4.jpg";
import Pick5 from "../../assets/pick5.jpg";
import Pick6 from "../../assets/pick6.jpg";

const Gallery = () => {
  return (
    <div className="news-main">
      <h2 className="news-heading">Our Top Stories</h2>
      <div className="gallery">
        <img src={Pick1} alt="ln" className="gallery-image" />
        <img src={Pick2} alt="ln" className="gallery-image" />
        <img src={Pick3} alt="ln" className="gallery-image" />
        <img src={Pick4} alt="ln" className="gallery-image" />
        <img src={Pick5} alt="ln" className="gallery-image" />
        <img src={Pick6} alt="ln" className="gallery-image" />
      </div>
    </div>
  );
};

export default Gallery;
