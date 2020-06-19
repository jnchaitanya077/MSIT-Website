import React from "react";
import "../css/staff.css";
import HeaderTitle from "../components/headerImage";
import avatar from "../images/faculty/IT/images.png";
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
    image: avatar,
    position: "Professor",
    email: "testname123@msitprogram.net",
  },
];

class person extends React.Component {
  render() {
    return (
      <div>
        <HeaderTitle name="Admin-Staff" />

        <div className="row main-body pt-5">
          <p className="para">
            The CIHL (Consortium of Institutions of Higher Learning) coordinates
            the MSIT program and ensures its smooth run between the leaning
            centres of IIIT and JNTU. The support of the active administrative
            staff which includes the Network Administrators, Systems
            Administrators, Accounts and Office Administration, HR Management
            and Office Management staff through person and resources, are a
            great backing for us.
          </p>
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
    );
  }
}
export default person;
