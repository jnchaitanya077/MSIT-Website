import React from "react";
import "../css/staff.css";
import Info from "../components/Infocard.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import HeaderTitle from "../components/headerImage";
import avatar from "../images/faculty/IT/images.png";

// Can import images in two ways
// 1.Import the image and just place it in the List.
// 2.Use require to import directly without.
//example:
// image: require("../images/faculty/IT/avatar.jpeg"),

const ITstaff = [
  {
    id: 1,
    name: "TestName",
    image: avatar,
    position: "Professor",
    email: "testname123@msitprogram.net",
  },
  {
    id: 2,
    name: "TestName",
    image: avatar,
    position: "Associate Professor",
    email: "testname123@msitprogram.net",
  },
  {
    id: 3,
    name: "TestName",
    image: avatar,
    position: "Assistant Professor",
    email: "testname123@msitprogram.net",
  },
  {
    id: 4,
    name: "TestName",
    image: avatar,
    position: "Professor",
    email: "testname123@msitprogram.net",
  },
  {
    id: 5,
    name: "TestName",
    image: avatar,
    position: "Professor",
    email: "testname123@msitprogram.net",
  },
  {
    id: 6,
    name: "TestName",
    image: avatar,
    position: "Professor",
    email: "testname123@msitprogram.net",
  },
  {
    id: 7,
    name: "TestName",
    image: avatar,
    position: "Professor",
    email: "testname123@msitprogram.net",
  },
  {
    id: 8,
    name: "TestName",
    image: avatar,
    position: "Professor",
    email: "testname123@msitprogram.net",
  },
  {
    id: 9,
    name: "TestName",
    image: avatar,
    position: "Professor",
    email: "testname123@msitprogram.net",
  },
  {
    id: 10,
    name: "TestName",
    image: avatar,
    position: "Professor",
    email: "testname123@msitprogram.net",
  },
  {
    id: 11,
    name: "TestName",
    image: avatar,
    position: "Professor",
    email: "testname123@msitprogram.net",
  },
  {
    id: 12,
    name: "TestName",
    image: avatar,
    position: "Professor",
    email: "testname123@msitprogram.net",
  },
  {
    id: 13,
    name: "TestName",
    image: avatar,
    position: "Professor",
    email: "testname123@msitprogram.net",
  },
  {
    id: 14,
    name: "TestName",
    image: avatar,
    position: "Professor",
    email: "testname123@msitprogram.net",
  },
  {
    id: 15,
    name: "TestName",
    image: require("../images/faculty/IT/avatar.jpeg"),
    position: "Professor",
    email: "testname123@msitprogram.net",
  },
];

class person extends React.Component {
  render() {
    return (
      <div>
        <HeaderTitle name="IT-Staff" />
        <div className="row main-body pt-5">
          <p className="para">
            There are associate mentors, physically available for the students,
            to guide them through all the courses. MSIT maintains a
            student:mentor ratio of less than 10:1. i.e. for every 10 students
            there is one mentor available. There are domain experts, who create
            the course content and are called principal mentors. Apart from
            this, each learning center has a course coordinator, who is a
            computer science professor in the department. The students also have
            access to digital lectures from various renowned professors world
            wide. We try to pick the best lectures available in the domain and
            deliver it to the students.
          </p>
          {ITstaff.map((info) => {
            return (
              <Info
                image={info.image}
                name={info.name}
                position={info.position}
                email={info.email}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default person;
