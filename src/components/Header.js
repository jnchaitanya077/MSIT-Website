import React from "react";
import "../css/header.css";
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
              // id="navbarDropdown"
              // role="button"
              // data-toggle="dropdown"
              // aria-haspopup="true"
              // aria-expanded="false"
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
            <Link
              className="nav-link"
              href="#"
              // id="navbarDropdown"
              // role="button"
              // data-toggle="dropdown"
              // aria-haspopup="true"
              // aria-expanded="false"
            >
              MSIT Advantage
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link
                to="/msit-advantage/#LearningByDoing"
                className="dropdown-item"
              >
                Learning by Doing
              </Link>
              <Link
                to="/msit-advantage/#ProjectCenteredCurriculum"
                className="dropdown-item"
              >
                Project Centered Curriculum
              </Link>
              <Link to="/msit-advantage/#SoftSkills" className="dropdown-item">
                Soft Skills
              </Link>
              <Link
                to="/msit-advantage/#ResourcesForStudents"
                className="dropdown-item"
              >
                Resources for Students
              </Link>
              <Link
                to="/msit-advantage/#Infrastructure"
                className="dropdown-item"
              >
                Infrastructure
              </Link>
              <Link to="/msit-advantage" className="dropdown-item">
                Success Stories
              </Link>
              <Link to="/msit-advantage" className="dropdown-item">
                Specializations
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link"
              href="#"
              // id="navbarDropdown"
              // role="button"
              // data-toggle="dropdown"
              // aria-haspopup="true"
              // aria-expanded="false"
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
              // id="navbarDropdown"
              // role="button"
              // data-toggle="dropdown"
              // aria-haspopup="true"
              // aria-expanded="false"
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
              // id="navbarDropdown"
              // role="button"
              // data-toggle="dropdown"
              // aria-haspopup="true"
              // aria-expanded="false"
            >
              Faculty
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/dean" className="dropdown-item">
                Dean
              </Link>
              <Link to="/it-mentors" className="dropdown-item">
                IT Mentors
              </Link>
              <Link to="/ss-mentors" className="dropdown-item">
                Soft Skills Mentors
              </Link>
              <Link to="admin-staff" className="dropdown-item">
                Administrative Staff
              </Link>
              <Link to="publications" className="dropdown-item">
                Publications
              </Link>
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
