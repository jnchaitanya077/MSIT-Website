import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss, faBullhorn } from "@fortawesome/free-solid-svg-icons";

import "../latestNews.css";
import image1 from "../images/events/slider_1.jpg";
import image2 from "../images/events/slider_2.jpg";
import image3 from "../images/events/slider_3.jpg";

function App() {
  return (
    <div className="newsLayout">
      <div className="row">
        <div className="col-lg-8">
          <h1>MSIT</h1>
          <p className="about-paragraph">
            MSIT (MS in IT or Master of Science in Information Technology) is a
            two year post graduate program in Computer Science started in 2001.
            MSIT is an innovative multi-university interdisciplinary
            post-graduate program. MSIT program is being offered by “Consortium
            of Institutions of Higher Learning” (CIHL), formed by the
            Universities. Under MOU with CMU, some Carnegie Mellon Researchers
            are providing guidance on the course content. MSIT is currently
            offered at International Institute of Information Technology
            (IIIT-H), Hyderabad, School of IT, Jawaharlal Nehru Technological
            University Hyderabad (JNTUH), College of Engineering, Jawaharlal
            Nehru Technological University Kakinada (JNTUK), College of
            Engineering, Jawaharlal Nehru Technological University Anantapur
            (JNTUA) and Sri Venkateswara University Tirupati (SVU).
          </p>
          {/* Carousel Starting */}
          <div>
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
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
                href="#carouselExampleIndicators"
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
          </div>
        </div>
        {/* News Section */}
        <div className="col-lg-4 ">
          {/* Latest News*/}
          <div className="col news">
            <FontAwesomeIcon
              icon={faRss}
              size="3x"
              className="latestNews-icon-one"
            />
            <h2>Latest news</h2>

            <p>
              <strong>MSIT 2020 Admissions</strong>
            </p>
            <p>
              <strong>GAT 2020 Scorecard</strong>
            </p>
            <p>
              <strong>Walk-ins Info</strong>
            </p>
            <p>
              <strong>Python Workshop</strong>
            </p>
            <hr />
            <p>Read More</p>
          </div>

          {/*Events*/}
          <div className="col news">
            <FontAwesomeIcon
              icon={faBullhorn}
              size="3x"
              className="latestNews-icon-two"
            />
            <h2>Events</h2>

            <p>
              <strong>Alumni Engage Events</strong>
            </p>
            <p>
              <strong>How MSIT fighting the Pandameic</strong>
            </p>
            <p>
              <strong>MSIT Culture</strong>
            </p>
            <p>
              <strong>MSITN's Blog</strong>
            </p>
            <hr />
            <p>See More</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
