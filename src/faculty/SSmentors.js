import React from "react";
import "../css/staff.css";
import avatar from "../images/faculty/IT/images.png";
import HeaderTitle from "../components/headerImage";
import Info from "../components/Infocard.js";

// Can import images in two ways
// 1.Import the image and just place it in the List.
// 2.Use require to import directly without.
//example:
// image: require("../images/faculty/IT/avatar.jpeg"),

const SSstaff = [
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
    position: "Professor",
    email: "testname123@msitprogram.net",
  },
  {
    id: 3,
    name: "TestName",
    image: avatar,
    position: "Professor",
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
    image: avatar,
    position: "Professor",
    email: "testname123@msitprogram.net",
  },
];

class person extends React.Component {
  render() {
    return (
      <div>
        <HeaderTitle name="Soft-Skills" />
        <div className="row main-body pt-5">
          <p className="general-text">
            There are Associate Mentors for Soft skills in MSIT who mentor the
            students throughout their course. It follows a pattern of mentor
            student ratio of 1:10. The Resource Principal Mentor is responsible
            for creating the content, generating and delivering it to the
            students according to their learning needs which includes lectures
            and organizing other activities. The writing assignments, weekly
            presentations are conducted by the Associate Mentors and each
            learning centre has course coordinators in addition, to ensure the
            smooth running of the program. Resources are gathered from numerous
            learning sources and integrated into the program.
          </p>

          <div className="card-deck">
            {SSstaff.map((info) => {
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
      </div>
    );
  }
}
export default person;
