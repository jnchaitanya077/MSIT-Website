import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Logo from "../images/logos/logo.png";
import "../css/header.css";

function Navigation({ sticky }) {
  useEffect(() => {
    const myId = window.location.hash.slice(1);
    const elem = document.getElementById(myId);
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });

  return (
    <nav
      className={
        sticky
          ? "navbar navbar-expand-lg navbar-light fixed-top"
          : "navbar navbar-expand-lg navbar-light"
      }
    >
      <Link class="navbar-brand col-md-3 col-8" to="/">
        <img src={Logo} alt="logo" className="img-fluid" />
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse d-lg-flex flex-lg-row-reverse"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li className="nav-item dropdown">
            <Link
              className="nav-link"
              href=".."
              id="navbarDropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              About MSIT
              <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
            </Link>

            <div
              className="dropdown-menu"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              aria-labelledby="navbarDropdown"
            >
              <Link to="/MsitProgram/#charter" className="dropdown-item">
                MSIT Charter
              </Link>
              <Link to="/MsitProgram/#MsitProgram" className="dropdown-item">
                MSIT Program
              </Link>
              <Link to="/CoursesAndStructure/#top" className="dropdown-item">
                Courses and Structure
              </Link>
              <Link to="/Curriculum/#top" className="dropdown-item">
                Curriculum
              </Link>

              <Link
                to="/CertificationAndLearningCenters/#top"
                className="dropdown-item"
              >
                Certification and Learning Centers
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link"
              to="#"
              id="navbarDropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              MSIT Advantage
              <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
            </Link>
            <div
              className="dropdown-menu"
              data-toggle="collapse"
              aria-labelledby="navbarDropdown"
              data-target=".navbar-collapse.show"
            >
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
              <Link
                to="/CoursesAndStructure/#specializations"
                className="dropdown-item"
              >
                Specializations
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link"
              href=".."
              id="navbarDropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Admissions
              <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
            </Link>
            <div
              className="dropdown-menu"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              aria-labelledby="navbarDropdown"
            >
              <Link
                to="/admission/#AdmissionProcedure"
                className="dropdown-item"
              >
                Admission Procedure
              </Link>
              <Link to="/admission/#HowToApply" className="dropdown-item">
                How to Apply?
              </Link>
              <Link to="/admission/#WalkinProcess" className="dropdown-item">
                Walk-in Process
              </Link>

              <Link
                className="dropdown-item"
                href="https://online.cbexams.com/RPS/MSIT/Practice_Instructions.aspx"
              >
                Mock-Test
              </Link>
              <Link
                className="dropdown-item"
                href="https://www.msitprogram.net/admissions/"
              >
                Apply Online
              </Link>
              <Link to="/schedule/#top" className="dropdown-item">
                Schedule
              </Link>
              <Link to="/fee-structure/#top" className="dropdown-item">
                Fee for MSIT
              </Link>

              <Link to="/entranceSyllabus/#top" className="dropdown-item">
                Entrance Test Syllabus
              </Link>

              <Link to="/sample-test-questions/#top" className="dropdown-item">
                GAT-Sample Questions
              </Link>
            </div>
          </li>

          <li className="nav-item dropdown">
            <Link
              className="nav-link"
              href=".."
              id="navbarDropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Recruiters
              <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
            </Link>
            <div
              className="dropdown-menu"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              aria-labelledby="navbarDropdown"
            >
              <Link to="/placements/#top" className="dropdown-item">
                Placements
              </Link>

              <Link
                className="dropdown-item"
                href="https://www.msitprogram.net/Placementhistory.php"
              >
                Placements History
              </Link>

              <Link to="/corp_relations/#top" className="dropdown-item">
                Corporate Relationships
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link"
              href=".."
              id="navbarDropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Faculty
              <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
            </Link>
            <div
              className="dropdown-menu"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              aria-labelledby="navbarDropdown"
            >
              <Link to="/dean/#top" className="dropdown-item">
                Dean
              </Link>
              <Link to="/it-mentors/#top" className="dropdown-item">
                IT Mentors
              </Link>
              <Link to="/ss-mentors/#top" className="dropdown-item">
                Soft Skills Mentors
              </Link>
              <Link to="/admin-staff/#top" className="dropdown-item">
                Administrative Staff
              </Link>
              <Link to="/publications/#top" className="dropdown-item">
                Publications
              </Link>
            </div>
          </li>
          <li
            className="nav-item"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            <Link className="nav-link" to="/gallery/#top">
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
