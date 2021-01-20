import React from "react";
import HeaderTitle from "../components/headerImage";
import Collapsible from "react-collapsible";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import "../css/AboutMsit.css";

const ITCredits = [
  {
    id: 1,
    MiniSemister: "I",
    courseName: "IT Workshop",
    Credits: "4",
  },
  {
    id: 2,
    MiniSemister: "",
    courseName: "Computer Science Principles and Programming",
    Credits: "4",
  },
  {
    id: 3,
    MiniSemister: "",
    courseName: "Soft skills - I (LSRW, Learning how to Learn)",
    Credits: "2",
  },
  {
    id: 4,
    MiniSemister: "II",
    courseName: "Introduction to Data Science",
    Credits: "4",
  },
  {
    id: 5,
    MiniSemister: "",
    courseName: "Principles of Software Construction",
    Credits: "4",
  },
  {
    id: 6,
    MiniSemister: "",
    courseName: "Algorithms and Data Structures",
    Credits: "4",
  },
  {
    id: 6,
    MiniSemister: "",
    courseName: "Databases",
    Credits: "2",
  },
  {
    id: 7,
    MiniSemister: "",
    courseName: "Computer Networks ",
    Credits: "2",
  },
  {
    id: 8,
    MiniSemister: "",
    courseName: "LSRW & Professional Communication Skills ",
    Credits: "2",
  },
  {
    id: 9,
    MiniSemister: "III",
    courseName: "Computer Science Elective",
    Credits: "8",
  },
  {
    id: 10,
    MiniSemister: "",
    courseName: "Capstone Project",
    Credits: "8",
  },
  {
    id: 11,
    MiniSemister: "",
    courseName:
      "Soft skills(Placement Preparation, Advanced Interview Facing Skills)	",
    Credits: "2",
  },
];

const secondYear = [
  {
    id: 13,
    MiniSemister: "IV",
    courseName: "Placement elective course ",
    Credits: "8",
  },
  {
    id: 14,
    MiniSemister: "",
    courseName: "Specialization course ",
    Credits: "8",
  },
  {
    id: 15,
    MiniSemister: "",
    courseName: "Soft Skills elective",
    Credits: "1",
  },
  {
    id: 16,
    MiniSemister: "V",
    courseName: "Specialization course",
    Credits: "8",
  },
  {
    id: 17,
    MiniSemister: "",
    courseName: "Computer Science Elective ",
    Credits: "8",
  },
  {
    id: 18,
    MiniSemister: "",
    courseName: "Soft Skills elective",
    Credits: "1",
  },
  {
    id: 19,
    MiniSemister: "VI",
    courseName: "Specialization Project/Internship",
    Credits: "16",
  },
];

class curriculum extends React.Component {
  componentDidMount() {
    console.log("mount");
    const myId = window.location.hash.slice(1);
    const elem = document.getElementById(myId);
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
  componentDidUpdate() {
    console.log("mount");
    const myId = window.location.hash.slice(1);
    const elem = document.getElementById(myId);
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }

  render() {
    return (
      <div id="top">
        <HeaderTitle name="Curriculum" element={this.props.element} />
        <div
          className="newsLayout"
          style={{ paddingTop: "40px", paddingBottom: "20px" }}
        >
          <div className="row profile-row">
            <div className="col-12">
              <p className="general-text">
                MSIT offers Project centric curriculum which lends practical
                experience and helps the students to muster the implementation
                details of all the concepts related to each course. Each course
                is broken down into modules, each of which is offered as a
                project to be worked on. The students understand the concept
                while working on the project and submit the relevant tasks
                (deliverables) within the deadline specified by their mentors.
                The students get the required guidance and support at every
                level from the mentors who have a wide knowledge base.
              </p>
              <p className="general-text">
                Soft Skills training is embedded into curriculum and each
                mini-semester has one soft skills workshop in addition to
                continuous coaching in language training on a daily basis.
              </p>
              <div
                className="shadows-courses p-5 mb-4"
                style={{ height: "auto" }}
              >
                <h2 className="title-text">MSIT First year Syllabus:</h2>
                <p className="general-text">
                  An academic year is divided into 6 mini semesters. Duration of
                  each mini semester is eight weeks. The first year has five IT
                  and Soft Skills mini semesters and 1 practicum mini semester.
                </p>
                <p className="general-text">
                  All core courses of computer science are offered in the first
                  year. The final mini-semester in the first year is catered for
                  practicum
                </p>
                <Jumbotron
                  fluid
                  style={{ height: "auto", padding: "10px", margin: "0px" }}
                >
                  <Collapsible trigger="Click here for further details">
                    <Table>
                      {/* striped bordered hover */}
                      <thead>
                        <tr>
                          <th>Mini Semester</th>
                          <th>Courses</th>
                          <th>Credits</th>
                        </tr>
                      </thead>

                      {ITCredits.map((info) => {
                        return (
                          <tbody>
                            <tr>
                              <td>{info.MiniSemister}</td>
                              <td>{info.courseName}</td>
                              <td>{info.Credits}</td>
                            </tr>
                          </tbody>
                        );
                      })}
                    </Table>
                  </Collapsible>
                </Jumbotron>
              </div>

              <div
                className="shadows-courses p-5 mb-5"
                style={{
                  height: "auto",
                }}
              >
                <h2 className="title-text">MSIT Second year Syllabus:</h2>
                <p className="general-text">
                  The Second year has three mini semesters of IT and Soft
                  skills, and three mini semesters of practicum. During the
                  Second year, Software Engineering Foundation course is offered
                  in the first mini semester followed by domain specializations.
                  Last three mini semesters are catered for practicum.
                </p>
                <Jumbotron
                  fluid
                  style={{ height: "auto", padding: "10px", margin: "0px" }}
                >
                  <Collapsible trigger="Click here for further details">
                    <Table>
                      {/* striped bordered hover */}
                      <thead>
                        <tr>
                          <th>Mini Semester</th>
                          <th>Courses</th>
                          <th>Credits</th>
                        </tr>
                      </thead>

                      {secondYear.map((info) => {
                        return (
                          <tbody>
                            <tr>
                              <td>{info.MiniSemister}</td>
                              <td>{info.courseName}</td>
                              <td>{info.Credits}</td>
                            </tr>
                          </tbody>
                        );
                      })}
                    </Table>
                  </Collapsible>
                </Jumbotron>
                <ul className="general-text mt-3">
                  <li>Software Engineering Domain</li>
                  <li>Computer Networks Domain</li>
                  <li>E- Business Technologies</li>
                  <li>Information Security</li>
                  <li>Data Science</li>
                  <li>Machine Learning</li>
                  <li>Blockchain Technologies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default curriculum;
