import React from "react";

const Carousel = ({ imagenes }) => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide border"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active ">
          <img
            src={imagenes[0]}
            className="carousel-img d-block img-fluid w-100"
            alt={"active"}
          />
        </div>
        {imagenes.map((img,index) => (
          <div key={index} className="carousel-item ">
            <img
              src={img}
              className="d-block carousel-img img-fluid w-100"
              alt={img}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
