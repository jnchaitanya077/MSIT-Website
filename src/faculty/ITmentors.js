import React from "react";
import "../css/staff.css";
import Info from "../components/Infocard.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import HeaderTitle from "../components/headerImage";

// Can import images in two ways
// 1.Import the image and just place it in the List.
// 2.Use require to import directly without.
//example:
// image: require("../images/faculty/IT/avatar.jpeg"),

const ITstaff = [
  {
    id: 1,
    name: "newName",
    image: require("../images/faculty/IT/12451.carter.jpg"),
    position: "Professor",
    email: "newName123@msitprogram.net",
  },
  {
    id: 2,
    name: "newName",
    image: require("../images/faculty/IT/Praveen_optimized.jpg"),
    position: "Associate Professor",
    email: "newName123@msitprogram.net",
  },
  {
    id: 3,
    name: "newName",
    image: require("../images/faculty/IT/Manjunath_optimized.jpg"),
    position: "Assistant Professor",
    email: "newName123@msitprogram.net",
  },
  {
    id: 4,
    name: "newName",
    image: require("../images/faculty/IT/420899957.arunk.jpg"),
    position: "Professor",
    email: "newName123@msitprogram.net",
  },
  {
    id: 5,
    name: "newName",
    image: require("../images/faculty/IT/Mohan_Krishna_New.jpg"),
    position: "Professor",
    email: "newName123@msitprogram.net",
  },
  {
    id: 6,
    name: "newName",
    image: require("../images/faculty/IT/Veerusir.jpg"),
    position: "Professor",
    email: "newName123@msitprogram.net",
  },
  {
    id: 7,
    name: "newName",
    image: require("../images/faculty/IT/382929675.sridevi.jpg"),
    position: "Professor",
    email: "newName123@msitprogram.net",
  },
  {
    id: 8,
    name: "newName",
    image: require("../images/faculty/IT/Sriram_murthy.jpg"),
    position: "Professor",
    email: "newName123@msitprogram.net",
  },
  {
    id: 9,
    name: "newName",
    image: require("../images/faculty/IT/madhutavva.jpg"),
    position: "Professor",
    email: "newName123@msitprogram.net",
  },
  {
    id: 10,
    name: "newName",
    image: require("../images/faculty/IT/Satya.jpg"),
    position: "Professor",
    email: "newName123@msitprogram.net",
  },
  {
    id: 11,
    name: "newName",
    image: require("../images/faculty/IT/13045.RenukaBandi.jpg"),
    position: "Professor",
    email: "newName123@msitprogram.net",
  },
  {
    id: 12,
    name: "newName",
    image: require("../images/faculty/IT/Siva_shankar.jpg"),
    position: "Professor",
    email: "newName123@msitprogram.net",
  },
  {
    id: 13,
    name: "newName",
    image: require("../images/faculty/IT/V_Lakshmikanth.jpg"),
    position: "Professor",
    email: "newName123@msitprogram.net",
  },

  {
    id: 14,
    name: "newName",
    image: require("../images/faculty/IT/rehana1.jpg"),
    position: "Professor",
    email: "newName123@msitprogram.net",
  },
  {
    id: 15,
    name: "newName",
    image: require("../images/faculty/IT/Santhosh_Miryala.jpg"),
    position: "Professor",
    email: "newName123@msitprogram.net",
  },
  {
    id: 16,
    name: "newName",
    image: require("../images/faculty/IT/Murthy.jpg"),
    position: "Professor",
    email: "newName123@msitprogram.net",
  },
  {
    id: 17,
    name: "newName",
    image: require("../images/faculty/IT/Deepak.jpg"),
    position: "Professor",
    email: "newName123@msitprogram.net",
  },
  {
    id: 18,
    name: "newName",
    image: require("../images/faculty/IT/Manasa.jpg"),
    position: "Professor",
    email: "newName123@msitprogram.net",
  },
  {
    id: 19,
    name: "newName",
    image: require("../images/faculty/IT/Rajesh_Kakumanu.jpg"),
    position: "Professor",
    email: "newName123@msitprogram.net",
  },
];

class person extends React.Component {
  render() {
    return (
      <div>
        <HeaderTitle name="IT-Staff" />
        <div className="row main-body pt-5">
          <p className="general-text">
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
          <div className="card-deck">
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
      </div>
    );
  }
}
export default person;
