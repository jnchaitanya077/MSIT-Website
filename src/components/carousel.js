import React from "react";
import "../css/header.css";
import slider_1 from "../images/slider/slider_1.jpg";
import slider_2 from "../images/slider/slider_2.jpg";
import slider_3 from "../images/slider/slider_3.jpg";
import slider_4 from "../images/slider/slider_4.jpg";

function App() {
  return (
    <section>
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active c-item" data-pause="hover">
            <img
              src={slider_1}
              className="d-block w-100 h-50"
              alt="slider-image"
            />
          </div>
          <div className="carousel-item c-item">
            <img src={slider_2} className="d-block w-100" alt="slider-image" />
          </div>
          <div className="carousel-item c-item">
            <img src={slider_3} className="d-block w-100" alt="slider-image" />
          </div>
          <div className="carousel-item c-item">
            <img src={slider_4} className="d-block w-100" alt="slider-image" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleInterval"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleInterval"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
}

export default App;
