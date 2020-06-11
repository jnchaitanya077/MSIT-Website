import React from "react";
import "../css/staff.css";
import HeaderTitle from "../components/headerImage";
import Dean from "../images/faculty/Dean/Dean_cropped.jpg";

function App() {
  return (
    <div>
      <HeaderTitle name="Dean" />
      <div className="row card-body main-body">
        <div className="col-lg-3 dean-img">
          <img src={Dean} className="box  img-fluid" />
        </div>

        <div className="col-lg-8 ml-4">
          <h2 className="dean-title">
            <strong>
              Dr. M. Sreenivasa Rao <span>Phd.</span>
            </strong>
          </h2>
          <h6 className="sub-title">DEAN, MSIT Programme</h6>
          <p className="dean-sub-para">
          MSIT is a two year post-graduate programme in Computer Science started in 2001. 
          It is offered by Consortium of Institutions of Higher Learning (CIHL) formed by different universities in Andhra Pradesh and Telangana. 
          It has an MOU with Carnegie Mellon University (CMU) in USA. 
          The MSIT students are admitted in different learning centres, IIIT Hyderabad, JNTU Hyderabad, JNTU Ananthapur, JNTU Kakinada and SV University. 
          MSIT aims to shape the student as an all-rounder i.e., MSIT not only gives training in IT courses, but also in Soft skills such that student will become a ready-made employable student. 
          MSIT follows a unique pedagogy, ‘Learning By Doing.’ Students understand the concepts by hands-on experience or project-centered curriculum. 
          It also follows sequential learning i.e., one course in one month rather than six courses parallel in a semester so that one can concentrate one course and master that course.
          MSIT offers up-to-date specializations in second year like Machine Learning, Data Analytics and Visualization, Information Security, Full Stack Web Development and Software Engineering. 
          MSIT provides state-of-art infrastructure i.e., every student is given a laptop, 24*7 internet and a cabin. 
          Also, MSIT provides a personalized mentoring i.e., 10 students are given one mentor who can help and guide while he/she is working on IT tasks as well as on soft skills. 
          Thus, MSIT produces an employable student that reflects in the student placements. We could achieve near 100% placements since inception.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
