import React from "react";
import { UncontrolledCollapse, Button } from "reactstrap";
class Welcome extends React.Component {
  render() {
    return (
      <div>
        <div className="myDiv" style={{ paddingTop: 0 }}>
          <h1>Courses And Structure</h1>
        </div>
        &nbsp; &nbsp;
        <div className="container about-TajMahal Justify-content-center">
          <div className="row profile-row">
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
            </div>
          </div>
          &nbsp; &nbsp;
          <h2>MSIT offers spectrum of courses including:</h2>
          &nbsp;
          <h1 style={{ color: "rgb(9, 7, 31)" }}>IT Core</h1>
          <Button id="toggler" className="collapsible">
            <li>Digital Literacy (Prerequisite)</li>
          </Button>
          <div className="content">
            <p></p>
          </div>
          <Button id="toggle" className="collapsible">
            <li>Computer Science programming and principles</li>
          </Button>
          <UncontrolledCollapse toggler="#toggle">
            <h5>Course Description</h5>
            <p>
              Most students who start the MSIT program are not from Computer
              Science or Information Technology branches of engineering.
              Independent of that, almost all the students do not have the
              necessary CS background knowledge when they join MSIT. So, in
              CSPP1 the fundamental concepts in computer science are covered
              along with a very popular introductory programming language called
              python. Upon successful completion of this course, students will
              be able to read and write python programs.
            </p>
          </UncontrolledCollapse>
          <br />
          <Button id="IDS" className="collapsible">
            <li>Introduction to Data science</li>
          </Button>
          <UncontrolledCollapse toggler="IDS">
            <h5>Course Description</h5>
            <p>
              Learning from data in order to gain useful predictions and
              insights. This course introduces methods for five key facets of an
              investigation: data wrangling, cleaning, and sampling to get a
              suitable data set; data management to be able to access big data
              quickly and reliably; exploratory data analysis to generate
              hypotheses and intuition; prediction based on statistical methods
              such as regression and classNameification; and communication of
              results through visualization, stories, and interpretable
              summaries.
            </p>
          </UncontrolledCollapse>
          <Button id="toggler" className="collapsible">
            <li>Object oriented programming</li>
          </Button>
          <div className="content">
            <h5>Course Description</h5>
            <p>
              This course will give you a foundation in Java syntax that will
              start your journey towards becoming a successful Java developer.
              Intensive and hands-on, the course emphasizes more on becoming
              productive quickly as a Java developer. This course quickly covers
              the Java language syntax and then moves into the object-oriented
              features of the language. Students will then learn the I/O streams
              and collections API packages. The goal of this course is to
              introduce techniques used in computer science to solve complex
              problems.
            </p>
          </div>
          <Button id="toggler" className="collapsible">
            <li>Algorithms and Data Structures-1</li>
          </Button>
          <div className="content">
            <h5>Course Description</h5>
            <p>
              The study of algorithms and data structures is fundamental to any
              computer- science curriculum, but it is not just for programmers
              and computer-science students. Everyone who uses a computer wants
              it to run faster or to solve larger problems. They have become
              essential tools in engineering; and from database systems to
              internet search engines, they have become essential parts of
              modern software systems. And these are but a few examples as the
              scope of computer applications continues to grow. This course
              covers the essential information that every serious programmer
              needs to know about algorithms and data structures, with emphasis
              on applications and scientific performance analysis of Java
              implementations which covers elementary data structures, sorting,
              and searching algorithms.
            </p>
          </div>
          <span id="dots"></span>
          <span id="more">
            <Button id="toggler" className="collapsible">
              <li>Database Management Systems</li>
            </Button>
            <div className="content">
              <h5>Course Description</h5>
              <p>
                A database is an organized collection of data. A relational
                database, more restrictively, is a collection of schemas,
                tables, queries, reports, views, and other elements. Database
                designers typically organize the data to model aspects of
                reality in a way that supports processes requiring information,
                such as (for example) modelling the availability of rooms in
                hotels in a way that supports finding a hotel with vacancies. A
                database-management system (DBMS) is a computer-software
                application that interacts with end-users, other applications,
                and the database itself to capture and analyze data. A
                general-purpose DBMS allows the definition, creation, querying,
                update, and administration of databases. A database is not
                generally portable across different DBMSs, but different DBMSs
                can interoperate by using standards such as SQL and ODBC or JDBC
                to allow a single application to work with more than one DBMS.
              </p>
            </div>
            <Button id="toggler" className="collapsible">
              <li>Software Engineering Foundations</li>
            </Button>
            <div className="content">
              <h5>Course Description</h5>
              <p>
                The goal of this course is to lay a solid Software Engineering
                Foundation for graduate students moving into their final year of
                studies in the MSIT program. Programming skills are crucial, but
                producing workable code without industry standards is not
                sufficient. Professionals in the industry produce workable
                software products that seamlessly map design into code. A
                successful software professional must have many skills as well
                as a wealth of experience in order to predictably deliver
                quality products on time and within budget.
              </p>
            </div>
            <Button id="toggler" className="collapsible">
              <li>Algorithms and Data Structures-2</li>
            </Button>
            <div className="content">
              <h5>Course Description</h5>
              <p>
                This course is fundamental to any computer science curriculum,
                but it is not just for programmers and computer-science
                students. Everyone who uses a computer wants it to run faster or
                to solve larger problems. The algorithms in this course
                represent a body of knowledge developed over the last 50 years
                that has become indispensable. Pairwise connections between
                items play a critical role in a vast array of computational
                applications. The relationships implied by these connections
                lead immediately to a host of natural questions: Is there a way
                to connect one item to another by following the connections? How
                many other items are connected to a given item? What is the
                shortest chain of connections between this item and this other
                item? To model such situations, we use abstract mathematical
                objects called graphs. In this course, we examine basic
                properties of graphs in detail, setting the stage for us to
                study a variety of algorithms that are useful for answering
                questions of the type just posed.We communicate by exchanging
                strings of characters. Accordingly, numerous important and
                familiar applications are based on processing strings. We
                consider classic algorithms for addressing the underlying
                computational challenges surrounding applications.
              </p>
            </div>
            <Button id="toggler" className="collapsible">
              <li>Introduction to computer systems</li>
            </Button>
            <div className="content">
              <h5>Course Description</h5>
              <p></p>
            </div>
            <Button id="toggler" className="collapsible">
              <li>Computer Networks</li>
            </Button>
            <div className="content">
              <h5>Course Description</h5>
              <p>
                This course aims to introduce the fundamentals concepts of data
                communication and networking protocols, and routing
                technologies. Students will learn to design, install and manage
                networks and develop socket programming
              </p>
            </div>
            <Button id="toggler" className="collapsible">
              <li>Web programming</li>
            </Button>
            <div className="content">
              <h5>Course Description</h5>
              <p>
                Software App Development is a 12-week project-based course.
                Modern apps are seamlessly made available both on computers and
                on mobile devices. This course has 3 parts. Part 1 covers web
                app development. Part 2 is mobile app development. Part 3
                culminates the first 2 course parts into a capstone project. The
                first part, web app development, is designed to train the
                students in the following areas
              </p>
              <ol>
                <li>Technologies used to develop full-stack apps</li>
                <ul>
                  <li>Frontend dev, backend dev</li>
                </ul>
                <li></li>
                <ul>
                  <li>Version control with git</li>
                  <li>Git workflow for teams</li>
                </ul>
              </ol>
            </div>
            <Button id="toggler" className="collapsible">
              <li>Cloud computing</li>
            </Button>
            <div className="content">
              <h5>Course Description</h5>
              <p></p>
            </div>
            <Button id="toggler" className="collapsible">
              <li>Cyber Security</li>
            </Button>
            <div className="content">
              <h5>Course Description</h5>
              <p>
                Introduction to cyber security is a two week course offered to
                MSIT first year students for 2 credits. This course provides
                concepts behind security, along with hands on exercises to solve
                aspects around device level security, network host discovery,
                human behavioral attacks, privacy on online and social media,
                network security through pen testing, physical and personal
                security, and cryptographic primitives. Students are supposed to
                prepare cyber security awareness posters for their batchmates
                and society. Students also get to work on cryptography and
                public key certificates, along with tools that help them defend
                against most cyber attacks.
              </p>
            </div>
            <Button id="toggler" className="collapsible">
              <li>Practicum - I</li>
            </Button>
            <div className="content">
              <h5>Course Description</h5>
              <p></p>
            </div>
          </span>
          <Button
            onclick="handleSubmit()"
            id="myBtn"
            style={{
              backgroundColor: "rgb(26, 36, 56)",
              color: "aliceblue",
              width: "150px",
              fontSize: "large",
              fontWeight: "bolder",
            }}
          >
            Show more
          </Button>
          <h1 style={{ color: "rgb(9, 7, 31)", paddingTop: "20px" }}>
            IT Electives
          </h1>
          <Button id="toggler" className="collapsible">
            <li>Privacy Technologies</li>
          </Button>
          <div className="content">
            <h5>Course Description</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <Button id="toggler" className="collapsible">
            <li>Computer Networks</li>
          </Button>
          <div className="content">
            <h5>Course Description</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          &nbsp; &nbsp;
          <h1 style={{ color: "rgb(9, 7, 31)" }}>Soft Skills</h1>
          <Button id="toggler" className="collapsible">
            <li>Communication Skills</li>
          </Button>
          <div className="content">
            <h5>Course Description</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <Button id="toggler" className="collapsible">
            <li>Career Management Course</li>
          </Button>
          <div className="content">
            <h5>Course Description</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <Button id="toggler" className="collapsible">
            <li>Effective Relationship Building Course</li>
          </Button>
          <div className="content">
            <h5>Course Description</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <Button id="toggler" className="collapsible">
            <li>Interview Facing Skills</li>
          </Button>
          <div className="content">
            <h5>Course Description</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <Button id="toggler" className="collapsible">
            <li>
              General aptitude and mental ability & continuous programming
              assessment
            </li>
          </Button>
          <div className="content">
            <h5>Course Description</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          &nbsp; &nbsp;
          <h1 style={{ color: "rgb(9, 7, 31)" }}>Domain Specializations</h1>
          <Button id="toggler" className="collapsible">
            <li>Computer Networks and Information Security</li>
          </Button>
          <div className="content">
            <h5>Course Description</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <Button id="toggler" className="collapsible">
            <li>E-Business Technologies</li>
          </Button>
          <div className="content">
            <h5>Course Description</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <Button id="toggler" className="collapsible">
            <li>Software Engineering</li>
          </Button>
          <div className="content">
            <h5>Course Description</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <Button id="toggler" className="collapsible">
            <li>Data Analytics &amp; Data Visualization</li>
          </Button>
          <div className="content">
            <h5>Course Description</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <Button id="toggler" className="collapsible">
            <li>Machine Learning</li>
          </Button>
          <div className="content">
            <h5>Course Description</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <Button id="toggler" className="collapsible">
            <li>Blockchain Technologies</li>
          </Button>
          <div className="content">
            <h5>Course Description</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Welcome;

// <!DOCTYPE html>
// <html>
//   <script
//     language="javascript"
//     type="text/javascript"
//     src="header.txt"
//   ></script>
//   <head>
//     <link rel="stylesheet" href="AboutMsitStyleSheet.css" />
//     <meta name="viewport" content="width=device-width, initial-scale=1" />

//     <link
//       rel="stylesheet"
//       href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
//       integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
//       crossorigin="anonymous"
//     />

//     <style>
//       #more {
//         display: none;
//       }

//       li {
//         font-size: medium;
//       }
//     </style>
//   </head>

//   &nbsp; &nbsp;

//   <script
//     language="javascript"
//     type="text/javascript"
//     src="footer.txt"
//   ></script>
// </html>
