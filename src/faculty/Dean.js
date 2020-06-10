import React from "react";
import "../css/staff.css";
import HeaderTitle from "../components/headerImage.js";
import Dean from "../images/faculty/Dean/Dean_cropped.jpg";

function App() {
  return (
    <div>
      <HeaderTitle name="Dean" />
      <div className="row card-body main-body">
        <div className="col-lg-3 Head-img">
          <img src={Dean} className="box  img-fluid" />
        </div>

        <div className="col-lg-8 ml-4">
          <h2 className="Left-title">
            <strong>
              Dr. M. Sreenivasa Rao <span>Phd.</span>
            </strong>
          </h2>
          <h6 className="sub-title">DEAN, MSIT Programme</h6>
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
    </div>
  );
}

export default App;
