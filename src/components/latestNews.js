import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss, faBullhorn } from "@fortawesome/free-solid-svg-icons";

import "../css/latestNews.css";
import image1 from "../images/events/slider_1.jpg";
import image2 from "../images/events/slider_2.jpg";
import image3 from "../images/events/slider_3.jpg";

function App() {
  return (
    <div className="newsLayout">
      <div className="row">
        <div className="col-lg-8">
          <h2 className="title">MSIT</h2>
          <p className="about-paragraph">
            MSIT (MS in IT or Master of Science in Information Technology) is a
            two year post graduate program in Computer Science started in 2001.
            MSIT is an innovative multi-university interdisciplinary
            post-graduate program. MSIT program is being offered by “Consortium
            of Institutions of Higher Learning” (CIHL), formed by the
            Universities. Under MOU with CMU, some Carnegie Mellon Researchers
            are providing guidance on the course content.
          </p>{" "}
          <h2 className="title">How It All Started?</h2>
          <p className="about-paragraph">
            MSIT programme has been there for over 17 years now and we have seen
            almost 2000 students graduate from this programme. This programme
            has been created with a very fresh idea in the year 2001. That is
            when the Hitech-City was actually coming up. There are lot of
            companies coming into Hyderabad and investing. These companies
            needed programmers, professionals who can come and work for them. At
            that time, the rate of employability from the other programmes has
            been extremely low. That was because; the industry has been taking
            about employability skills.
            <br />
            <br />
            Lot of students from the M.Tech programmes had classical education
            which involved attending lectures, doing assignments, some projects
            and taking exams. As a result of that, there was not much practice
            that they actually got since most of time was spent in the classroom
            listening to some lectures. It didn’t translate into hands-on
            employability skills. That was when the ‘Learn By Doing’ module of
            education was taken up and MSIT programme was established in several
            universities in Andhra Pradesh and Telangana.
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
            <h2 className="news-title">Latest news</h2>

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
            <h2 className="news-title">Events</h2>

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
