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
          <blockquote className="sub-para">
            <q>
              The MSIT Program aims at shaping up students to be well-rounded
              professionals, invoking their dormant capabilities through a
              constant process of individual mentoring. The course follows a
              unique pedagogy of learning by doing, which facilitates students
              to learn theory as well as the practical nuances of foundation IT
              courses. Students also undertake a specialization in a particular
              domain in their second year of study. As part of this process, the
              program also includes soft skills training that follows a holistic
              approach to teach students the life skills required to excel in
              corporate life. MSIT produces 'employable students' and adds great
              value to its students, which reflects in its placements.
            </q>
          </blockquote>
        </div>
      </div>
      <hr />
      {/* Dean */}
      <div className="row card-body main-body">
        <div className="col-lg-8 order-2 order-md-2 order-lg-1 ml-4">
          <h2 className="Right-title">
            <strong>
              Dr. M. Sreenivasa Rao <span>Phd.</span>
            </strong>
          </h2>
          <h6 className="sub-title right">Dean, MSIT Programme</h6>
          <blockquote className="sub-para">
            <q>
              There are associate mentors physically available for the students
              to guide them through all the courses. MSIT maintains a
              student:mentor ratio of less than 10:1. i.e. for every 10 students
              there is one mentor available. There are domain experts, who
              create the course content and are called Principal Mentors. Apart
              from this, each learning center has a Course Coordinator, who is a
              Computer Science Professor in the department. The students also
              have access to digital lectures from various renowned professors
              world wide. We try to pick the best lectures available in the
              domain and deliver it to the students.
            </q>
          </blockquote>
        </div>
        <div className="col-lg-3 order-1 order-md-1 order-lg-2 ml-4 Head-img">
          <img src={Dean} className="box  img-fluid" />
        </div>
      </div>
      <hr />
      {/* Associate Dean */}
      <div className="row card-body main-body">
        <div className="col-lg-3 dean-img">
          <img src={AssocDean} className="box  img-fluid" />
        </div>

        <div className="col-lg-8 ml-4">
          <h2 className="Left-title">
            <strong>
              Praveen Garimella <span></span>
            </strong>
          </h2>
          <h6 className="sub-title">Associate Dean, MSIT Programme</h6>
          <blockquote className="sub-para">
            <q>
              Students typically don’t attend lot of classroom sessions in our
              program. Every day, they have some video lectures that they would
              listen to and they have projects.Most of the student time goes
              into doing projects. While the students are doing projects, they
              need help,that’s when the concept of a mentor comes in. Mentor is
              almost at the age of students, he is very friendly with the
              students,he is supposed to be guiding them on an hourly basis,
              helping them whenever they are stuck with the project by giving
              them guidance on how to go forward. The students have to basically
              use that advice and keep working on the projects. The idea is, as
              a result of working on the projects, the students end up spending
              more than 80% of their time here doing hands on work. As a result
              of that, the repeated practice, they actually gain lot of
              confidence whenever projects of that kind are given to them when
              they get into industry. This is how the “Learn By Doing” is
              broadly laid out.
            </q>
          </blockquote>
        </div>
      </div>
      <hr />
      {/* Head */}
      <div className="row card-body main-body">
        <div className="col-lg-8 order-2 order-md-2 order-lg-1  ml-4">
          <h2 className="Right-title">
            <strong>
              M. Manjunath <span></span>
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
        <div className="col-lg-3 order-1 order-md-1 order-lg-2  Head-img">
          <img src={Head} className="box  img-fluid" />
        </div>
      </div>
    </div>
  );
}
export default App;
