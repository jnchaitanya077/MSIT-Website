import React from "react";
import Collapsible from "react-collapsible";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link } from "react-router-dom";
import HeaderTitle from "../../components/headerImage";
import "../../css/AboutMsit.css";

class courses extends React.Component {
  componentDidUpdate() {
    console.log("mount");
    const myId = window.location.hash.slice(1);
    const elem = document.getElementById(myId);

    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "start",
        // inline: "nearest",
      });
    }
  }

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

  render() {
    return (
      <div id="top">
        <HeaderTitle
          name="Courses And Structure"
          element={this.props.element}
        />
        <div className="newsLayout Courses-overview">
          <div
            className="row profile-row"
            style={{ paddingTop: "40px", paddingBottom: "40px" }}
          >
            {/* <!-- text column--> */}
            <div className="col-12">
              <p>
                MSIT employs a unique ‘Sequential Learning’ technique by which a
                student only moves on to the next course after thoroughly
                mastering the preceding course as against the conventional
                BTECH/MTECH programs which offer courses in a parallel fashion.
                This sequential pattern would enable a student to master one
                course a time, understand the relevant concepts, give him some
                scope to explore in depth into core concepts and move on with
                the next course. The Mastery Model of assessment requires a
                student to score 70% and above. This motivates students to
                stretch their abilities and reach the required target
                percentage. An academic year is divided into 6 mini semesters.
                Duration of each mini semester is eight weeks. The first year
                has five IT and Soft Skills mini semesters each and 1 practicum
                mini semester. The Second year has four IT and Soft Skills mini
                semesters each and 2 practicum mini semesters. There would be a
                4 - week vacation spread over the year.
              </p>
              <h2>MSIT offers spectrum of courses including: </h2>

              <div
                className="shadows-courses"
                id="ITCore"
                style={{
                  height: "auto",
                  paddingTop: "10px",
                  marginBottom: "15px",
                  marginTop: "15px",
                }}
              >
                <div className="row" style={{ marginRight: 0, marginLeft: 0 }}>
                  <div
                    className="col-md-6 col-lg links-alignment"
                    style={{
                      marginTop: "1%",
                      marginBottom: "1%",
                      paddingTop: "0%",
                      paddingBottom: "3px",
                    }}
                  >
                    <Link to="/CoursesAndStructure/#ITCore" className="links">
                      <h3 className="title-text">IT Core</h3>
                    </Link>
                  </div>
                  <div
                    className="col-md-6 col-lg links-alignment"
                    style={{
                      marginTop: "1%",
                      marginBottom: "1%",
                      paddingTop: "0%",
                      paddingBottom: "3px",
                    }}
                  >
                    <Link
                      to="/CoursesAndStructure/#ITElectives"
                      className="links"
                    >
                      <h3 className="title-text">IT Electives</h3>
                    </Link>
                  </div>
                  <div
                    className="col-md-6 col-lg links-alignment"
                    style={{
                      marginTop: "1%",
                      marginBottom: "1%",
                      paddingTop: "0%",
                      paddingBottom: "3px",
                    }}
                  >
                    <Link
                      to="/CoursesAndStructure/#SSCourses"
                      className="links"
                    >
                      <h3 className="title-text">SS Courses</h3>
                    </Link>
                  </div>
                  <div
                    className="col-md-6 col-lg links-alignment"
                    style={{
                      marginTop: "1%",
                      marginBottom: "1%",
                      paddingTop: "0%",
                      paddingBottom: "3px",
                    }}
                  >
                    <Link
                      to="/CoursesAndStructure/#specializations"
                      className="links"
                    >
                      <h3 className="title-text">Specializations</h3>
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="shadows-courses p-5"
                style={{
                  height: "auto",
                  marginBottom: "15px",
                  marginTop: "15px",
                }}
              >
                <h2
                  className="title-text"
                  style={{ color: "rgb(119, 11, 11)" }}
                >
                  IT Core
                </h2>
                {ITCore.map((info) => {
                  return (
                    <ul
                      className="list-items"
                      style={{ listStylePosition: "initial" }}
                    >
                      <li style={{ margin: "8px" }}>
                        <Jumbotron
                          fluid
                          style={{
                            height: "auto",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          <Collapsible trigger={info.courseName}>
                            <h5>Course Description</h5>
                            <p>{info.description}</p>
                          </Collapsible>
                        </Jumbotron>
                      </li>
                      <div id="ITElectives"></div>
                    </ul>
                  );
                })}
              </div>

              <div
                className="shadows-courses p-5"
                style={{
                  height: "auto",
                  marginBottom: "15px",
                  marginTop: "15px",
                }}
              >
                <h2
                  className="title-text"
                  style={{ color: "rgb(119, 11, 11)" }}
                  id="SSCourses"
                >
                  IT Electives
                </h2>

                {ITElectives.map((info) => {
                  return (
                    <ul style={{ listStylePosition: "initial" }}>
                      <li style={{ margin: "8px" }}>
                        <Jumbotron
                          fluid
                          style={{
                            height: "auto",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          <Collapsible trigger={info.courseName}>
                            <h5>{info.courseName + " Electives"}</h5>
                            <ul>
                              {info.electives.map((elective) => (
                                <li>{elective}</li>
                              ))}
                            </ul>
                          </Collapsible>
                        </Jumbotron>
                      </li>
                    </ul>
                  );
                })}
              </div>

              <div
                className="shadows-courses p-5"
                style={{
                  height: "auto",
                  marginBottom: "15px",
                  marginTop: "15px",
                }}
              >
                <h2
                  className="title-text"
                  style={{ color: "rgb(119, 11, 11)" }}
                  id="specializations"
                >
                  Soft Skills
                </h2>
                {SSCourses.map((info) => {
                  return (
                    <ul style={{ listStylePosition: "initial" }}>
                      <li style={{ margin: "8px" }}>
                        <Jumbotron
                          fluid
                          style={{
                            height: "auto",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          <Collapsible trigger={info.courseName}>
                            <h5>Course Description</h5>
                            <p>{info.description}</p>
                          </Collapsible>
                        </Jumbotron>
                      </li>
                    </ul>
                  );
                })}
              </div>

              <div
                className="shadows-courses p-5"
                style={{
                  height: "auto",
                  marginBottom: "15px",
                  marginTop: "15px",
                }}
              >
                <h2
                  className="title-text"
                  id=""
                  style={{ color: "rgb(119, 11, 11)" }}
                >
                  Domain Specializations
                </h2>
                {Specializations.map((info) => {
                  return (
                    <ul style={{ listStylePosition: "initial" }}>
                      <li style={{ margin: "8px" }}>
                        <Jumbotron
                          fluid
                          style={{
                            height: "auto",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          <Collapsible trigger={info.courseName}>
                            <h5>Course Description</h5>
                            <p>{info.description}</p>
                          </Collapsible>
                        </Jumbotron>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default courses;

const ITCore = [
  {
    id: 1,
    courseName: "IT Workshop",
    description:
      "By the end of the course, students will be able to use digital tools to enhance productivity and collaboration.",
  },
  {
    id: 2,
    courseName: "Computer Science Principles and Programming",
    description:
      "By the end of the course, students will be able to write clear, robust, and efficient code in python and develop programs to effectively solve medium-sized tasks and also able to describe the difference between programming and computer science.",
  },
  {
    id: 3,
    courseName: "Introduction to Data science",
    description:
      "In this course, students will be able to apply the full data science pipeline like collect data from unstructured sources and store them using appropriate structures such as relational databases, graphs, matrices, etc. And also they will learn how to visualize and analyze the data ",
  },
  {
    id: 4,
    courseName: "Principles of Software Construction",
    description:
      "In this course students will be able to learn and apply object oriented concepts using Java. Design medium scale systems with patterns and also learn how to test and analyze software.",
  },
  {
    id: 5,
    courseName: "Algorithms and Data Structures",
    description:
      " In this course students will learn and know how to apply elementary Data Structures (Bags, Queues, Stacks) and also analyze Sorting and Searching Searching algorithms.",
  },
  {
    id: 6,
    courseName: "Database Management Systems",
    description:
      "In this course Students will learn about realtional database model and how to query relational databases using SQL. ",
  },
  {
    id: 7,
    courseName: "Computer Networks",
    description:
      "This course aims to introduce the fundamentals concepts of data communication and networking protocols, and routing technologies and the principles behind the OSI layers.",
  },
];

const ITElectives = [
  {
    id: 1,
    courseName: "Computer Science",
    electives: [
      "Graph Algorithms (2 credit points)",
      "String Algorithms (2 credit points)",
      "Algorithm Design Techniques (2 credit points)",
      "Computer Systems Programming (2 credit points)",
      "Network Programming (2 credit points)",
    ],
  },
  {
    id: 2,
    courseName: "Software Engineering",
    electives: ["Software Engineering Foundations (4 credit points)"],
  },
  {
    id: 3,
    courseName: "Software App Development",
    electives: [
      "Microservices (2 credit points)",
      "Web APIs using Node.js and JavaScript (2 credit points)",
      "Frontend Web Programming with React (2 credit points)",
      "Frontend Web Programming with Angular (2 credit points)",
      "Android Programming with Java/Kotlin (2 credit points)",
      "Mobile Apps using React Native (2 credit points)",
      "Mobile Apps using Flutter (2 credit points)",
      "Continuous Integration and Continuous Delivery (2 credit points)",
    ],
  },
  {
    id: 4,
    courseName: "Information Security",
    electives: [
      "Introduction to Cyber Security (2 credit points)",
      "Introduction to Cryptography (4 credit points)",
      " Vulnerability scanners and penetration testing (2 credit points)",
      " Web Application Vulnerabilities (4 credit points)",
      " Privacy in Online and Social Media (2 credit points)",
      " Introduction to System Administration (2 credit points)",
      " Crypto Currencies (2 credit points)",
      " Network Programming (4 credit points)",
      " Cyber Security - Emergency Response and Incident Management (2 credit points)",
      "Digital Forensics (2 credit points)",
      " Malware and system security (4 credit points)",
    ],
  },
  {
    id: 5,
    courseName: "Artificial Intelligence",
    electives: [
      " Introduction to Artificial Intelligence (2 credit points)",
      " Computational Foundations for Machine Learning (2 credit points)",
      " Mathematical Foundations for Machine Learning (2 credit points)",
      " Supervised Machine Learning (2 credit points)",
      " Unsupervised Machine Learning (2 credit points)",
      " Reinforcement Learning (2 credit points)",
      " Deep Learning (2 credit points)",
      " Natural Language Processing (2 credit points)",
      " Computer Vision (2 credit points)",
      " Speech (2 credit points)",
    ],
  },
  {
    id: 6,
    courseName: "Data Science",
    electives: [
      "Linear Algebra for Data Scientists (2 credit points)",
      "Statistics and Probability (2 credit points)",
      "Data Scraping and Data Analytics (2 credit point)",
      "Data Visualization (2 credit points)",
      "Big Data (4 credit points)",
      "Machine Learning (4 credit points)",
      "Data Mining (4 credit points)",
      "Mining Massive Datasets (4 credit points)",
    ],
  },
];

const SSCourses = [
  {
    id: 1,
    courseName: "Learning How to Learn",
    description:
      "By the end of the course, student will be able to know how learning works and different techniques for learning like Renaissance learning, chunking and how it works.",
  },
  {
    id: 2,
    courseName:
      "Listening, Speaking, Reading and Writing Skill Development(LSRW)",
    description:
      "By the end of the course, students will be able to understand the main ideas and explicitly stated important details. Keep track of conceptually complex, sometimes conflicting, information. And also learn how to speak clearly and use intonation to support meaning. And learn how to produce clear, well-developed, and well-organized text.",
  },
  {
    id: 3,
    courseName: "Professional Communication",
    description:
      "By the end of the course, students will be able to apply all the components of a good email message. They will also learn to manage team projects, conduct meetings, and write executive summaries.",
  },
  {
    id: 4,
    courseName: "Advanced Interview Facing Skills",
    description:
      "By the end of the course, students will be able to develop STAR Technique and build a personal brand. Identify essentials of Interview Etiquette",
  },
  {
    id: 5,
    courseName:
      "General aptitude and mental ability & continuous programming assessment",
    description:
      "By the end of the course, students will be able to co-relate behavioral Profiles and build a social brand.",
  },
];

const Specializations = [
  {
    id: 1,
    courseName: "Computer Networks and Information Security",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    courseName: "E-Business Technologies",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    courseName: "Software Engineering",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    courseName: "Data Analytics and Data Visualization",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 5,
    courseName: "Machine Learning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 6,
    courseName: "Blockchain Technologies",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
