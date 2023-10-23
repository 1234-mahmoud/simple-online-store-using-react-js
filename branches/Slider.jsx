import React from "react";
import "../style/index.css";
import "../style/carousel.rtl.css";
import "../style/carousel.css";

const Slider = () => {
  return (
    <div className="slide-container">
      <link
        rel="canonical"
        href="https://getbootstrap.com/docs/5.3/examples/carousel/"
      />

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@docsearch/css@3"
      />

      <main>
        <div
          id="myCarousel"
          className="carousel slide mb-6 "
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://m.media-amazon.com/images/I/712LFXT5KcL._SX1500_.jpg"
                className="d-block w-100 h-100 "
                alt=""
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://m.media-amazon.com/images/I/51TRPDtYSzL._SX1500_.jpg"
                className="d-block w-100 h-100"
                alt=""
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://m.media-amazon.com/images/I/51tWoNXiGtL._SX1500_.jpg"
                className="d-block w-100 h-100"
                alt=""
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Slider;
