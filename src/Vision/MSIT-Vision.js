import React from "react";
import HeaderTitle from "../components/headerImage.js";
import Founder from "../images/faculty/Dean/RajReddy.jpg";
import Dean from "../images/faculty/Dean/Dean_cropped.jpg";
import AssocDean from "../images/faculty/Dean/Praveen.png";
import Head from "../images/faculty/Dean/Manjunath.png";
import "../css/staff.css";

function App() {
  return (
    <div>
      <HeaderTitle name="MSIT-Vision" />
      {/* Founder */}
      <div className="row card-body main-body">
        <div className="col-lg-3 Head-img">
          <img src={Founder} className="box  img-fluid" />
        </div>

        <div className="col-lg-8 ml-4">
          <h2 className="Left-title">
            <strong>
              Dr. Raj Reddy <span>Phd.</span>
            </strong>
          </h2>
          <h6 className="sub-title">Founder, MSIT Programme</h6>
          <p className="sub-para">
            There are associate mentors physically available for the students to
            guide them through all the courses. MSIT maintains a student:mentor
            ratio of less than 10:1. i.e. for every 10 students there is one
            mentor available. There are domain experts, who create the course
            content and are called Principal Mentors. Apart from this, each
            learning center has a Course Coordinator, who is a Computer Science
            Professor in the department. The students also have access to
            digital lectures from various renowned professors world wide. We try
            to pick the best lectures available in the domain and deliver it to
            the students.
          </p>
        </div>
      </div>
      {/* Dean */}
      <div className="row card-body main-body">
        <div className="col-lg-8 ml-4">
          <h2 className="Right-title">
            <strong>
              Dr. M. Sreenivasa Rao <span>Phd.</span>
            </strong>
          </h2>
          <h6 className="sub-title right">Dean, MSIT Programme</h6>
          <p className="sub-para">
            There are associate mentors physically available for the students to
            guide them through all the courses. MSIT maintains a student:mentor
            ratio of less than 10:1. i.e. for every 10 students there is one
            mentor available. There are domain experts, who create the course
            content and are called Principal Mentors. Apart from this, each
            learning center has a Course Coordinator, who is a Computer Science
            Professor in the department. The students also have access to
            digital lectures from various renowned professors world wide. We try
            to pick the best lectures available in the domain and deliver it to
            the students.
          </p>
        </div>
        <div className="col-lg-3 Head-img">
          <img src={Dean} className="box  img-fluid" />
        </div>
      </div>
      {/* Associate Dean */}
      <div className="row card-body main-body">
        <div className="col-lg-3 dean-img">
          <img src={AssocDean} className="box  img-fluid" />
        </div>

        <div className="col-lg-8 ml-4">
          <h2 className="Left-title">
            <strong>
              Praveen Garimella <span>Phd.</span>
            </strong>
          </h2>
          <h6 className="sub-title">Associate Dean, MSIT Programme</h6>
          <p className="sub-para">
            MSIT programme has been there for over 17 years now and we have seen
            almost 2000 students graduate from this programme. This programme
            has been created with a very fresh idea in the year 2001. That is
            when the Hitech-City was actually coming up. There are lot of
            companies coming into Hyderabad and investing. These companies
            needed programmers, professionals who can come and work for them. At
            that time, the rate of employability from the other programmes has
            been extremely low. That was because; the industry has been taking
            about employability skills. Lot of students from the M.Tech
            programmes had classical education which involved attending
            lectures, doing assignments, some projects and taking exams. As a
            result of that, there was not much practice that they actually got
            since most of time was spent in the classroom listening to some
            lectures. It didn’t translate into hands-on employability skills.
            That was when the ‘Learn By Doing’ module of education was taken up
            and MSIT programme was established in several universities in Andhra
            Pradesh and Telangana.
          </p>
        </div>
      </div>
      {/* Head */}
      <div className="row card-body main-body">
        <div className="col-lg-8 ml-4">
          <h2 className="Right-title">
            <strong>
              M. Manjunath <span>Phd.</span>
            </strong>
          </h2>
          <h6 className="sub-title right">Head, MSIT Programme</h6>
          <blockquote className="sub-para">
            <q>
              MSIT is a very unique program started in 2001. Ever since 2001, we
              have been seeing really great success stories that helped so many
              engineers transform themselves into IT professionals. In MSIT, we
              emphasize more on hands-on, we emphasize more on how you would
              react to different situations in the industry. All the courses in
              MSIT are designed around problem-solving. MSIT also helps you with
              lot of peer learning and how would you cope up when a new
              technology is introduced to you.
            </q>
          </blockquote>
        </div>
        <div className="col-lg-3 Head-img">
          <img src={Head} className="box  img-fluid" />
        </div>
      </div>
    </div>
  );
}
export default App;
