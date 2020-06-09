import React from "react";
import "../header.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
      <Link className="navbar-brand" to="/">
        <img
          src="https://www.msitprogram.net/images/logo.png"
          className="img-fluid"
          alt="MSIT-Logo"
          loading="lazy"
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              About MSIT
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Charter
              </a>
              <a className="dropdown-item" href="#">
                MSIT Program
              </a>
              <a className="dropdown-item" href="#">
                Courses and Structure
              </a>
              <a className="dropdown-item" href="#">
                Curriculum
              </a>
              <a className="dropdown-item" href="#">
                Certification and Learning Centers
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              MSIT Advantage
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Learning by Doing
              </a>
              <a className="dropdown-item" href="#">
                Project Centered Curriculum{" "}
              </a>
              <a className="dropdown-item" href="#">
                Soft Skills
              </a>
              <a className="dropdown-item" href="#">
                Resources for Students
              </a>
              <a className="dropdown-item" href="#">
                Infrastructure{" "}
              </a>
              <a className="dropdown-item" href="#">
                Success Stories{" "}
              </a>
              <a className="dropdown-item" href="#">
                Specializations{" "}
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Admissions
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Admission Procedure
              </a>
              <a className="dropdown-item" href="#">
                How to Apply?
              </a>
              <a className="dropdown-item" href="#">
                Walk-in Process
              </a>
              <a className="dropdown-item" href="#">
                Mock-Test
              </a>
              <a className="dropdown-item" href="#">
                Apply Online
              </a>
              <a className="dropdown-item" href="#">
                Schedule
              </a>
              <a className="dropdown-item" href="#">
                Fee for MSIT
              </a>
              <a className="dropdown-item" href="#">
                Entrance Test Syllabus{" "}
              </a>
              <a className="dropdown-item" href="#">
                Sample Test Questions
              </a>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Recruiters
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Placements
              </a>
              <a className="dropdown-item" href="#">
                Placements History
              </a>
              <a className="dropdown-item" href="#">
                Corporate Relationships
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Faculty
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Dean
              </a>
              <Link to="/it-mentors" className="dropdown-item">
                IT Mentors
              </Link>
              <Link to="/ss-mentors" className="dropdown-item">
                Soft Skills Mentors
              </Link>
              <Link to="admin-staff" className="dropdown-item">
                Administrative Staff
              </Link>
              <a className="dropdown-item" href="#">
                Publications
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Gallery{" "}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default App;
