import React from "react";
import { removeData } from "jquery";
import HeaderTitle from "../components/headerImage.js";
import MsitAdv from "../images/AboutMsit/msitadv.jpg";
import { Link } from "react-router-dom";
function App() {
  return (
    <div>
      <HeaderTitle name="Overview" />
      {/* <div className="myDiv">
        <h1>Overview</h1>
    </div> */}
      &nbsp; &nbsp;
      <h1 style={{ paddingLeft: "200px" }}>MSIT PROGRAM</h1>
      <div className="container about-TajMahal Justify-content-center">
        <div className="row profile-row">
          {/* <!-- text column--> */}
          <div className="col-8">
            <p>
              MSIT program is being offered by “Consortium of Institutions of
              Higher Learning” (CIHL), formed by the universities in Andhra
              Pradesh and Telangana. CIHL has designed the program with inputs
              from major IT companies
            </p>
            &nbsp; &nbsp;
            <h4>
              This is a glimpse of the leading institutions involved in this
              programme:
            </h4>
            <ul>
              <li>IIIT, Hyderabad (IIIT-H)</li>
              <li>JNTU, Hyderabad (JNTUH)</li>
              <li>JNTU, Kakinada (JNTUK)</li>
              <li>JNTU, Anantapur (JNTUA)</li>
              <li>SV University, Tirupati (SVU)</li>
            </ul>
          </div>

          {/* <!-- image column--> */}
          <div className="col-4">
            <img
              src={MsitAdv}
              alt=""
              className="alignright"
              style={{ width: "340px", height: "380px" }}
            />
          </div>
        </div>
        &nbsp; &nbsp;
        <div className="row profile-row">
          {/* <!-- text column--> */}
          <div className="col-12">
            <p>
              MSIT aims to produce skilled Professionals who have knowledge of
              the core principles underlying information technology and an
              understanding of emerging industry trends.The MSIT program was
              started in 2001 and students were admitted to the Learning Centers
              at International Institute of Information Technology (IIIT),
              Hyderabad, School of IT, Jawaharlal Nehru Technological University
              (JNTU), Hyderabad, College of Engineering, Osmania University and
              Regional Engineering College (REC, now NIT), Warangal.
            </p>
            <p>
              The MSIT (MS in IT or Master of Science in Information Technology)
              is a two year post graduate programme in Computer Science. MSIT is
              an innovative multi-university interdisciplinary post-graduate
              programme. MSIT program is being offered by “Consortium of
              Institutions of Higher Learning” (CIHL), formed by the
              Universities.
            </p>
            <p>
              In 2004, the Story/Problem Centered Curriculum was introduced and
              the fourth batch of students were admitted to the MSIT division,
              International Institute of Information Technology (IIIT), College
              of Engineering, Osmania University (OU), Hyderabad and School of
              Information Technology (SIT), Jawaharlal Nehru Technological
              University (JNTU).
            </p>
            <p>
              MSIT offers the latest domain specializations on par with
              international universities. Computer Networks and Information
              Security as domain specializations are offered for the first time
              in the states (AP & Telangana) only in MSIT. Besides these, the
              course also offers specializations in Software Engineering and
              E-commerce which have very high demand in the current software
              industry.
            </p>
          </div>
        </div>
        <h4>
          Eligibility :{" "}
          <span style={{ color: "red" }}> B.Tech / B.E (All Branches)</span>
        </h4>
        {/* <button
          type="button"
          className="btn btn-outline-secondary"
          style={{
            marginTop: "15px",
            marginBottom: "40px",
            backgroundColor: "red",
            padding: "10px 60px",
            fontSize: "larger",
          }}
        >
          <a href="CoursesAndStructure.html">
            <h4>Courses And Structure</h4>
          </a>
        </button> */}
        <Link
          to="/course-and-structure"
          className="btn btn-secondary"
          style={{ color: "white", fontSize: "16px" }}
        >
          Courses And Structure
        </Link>
      </div>
    </div>
  );
}
export default App;
