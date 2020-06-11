import React from "react";
import "../css/staff.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import HeaderTitle from "../components/headerImage";
import avatar from "../images/faculty/IT/images.png";

// Can import images in two ways
// 1.Import the image and just place it in the List.
// 2.Use require to import directly without.

const ITstaff = [
  { id: 1, name: "TestName", image: avatar, position: "Professor" },
  { id: 2, name: "TestName", image: avatar, position: "Associate Professor" },
  { id: 3, name: "TestName", image: avatar, position: "Assistant Professor" },
  { id: 4, name: "TestName", image: avatar, position: "Professor" },
  { id: 5, name: "TestName", image: avatar, position: "Professor" },
  { id: 6, name: "TestName", image: avatar, position: "Professor" },
  { id: 7, name: "TestName", image: avatar, position: "Professor" },
  { id: 8, name: "TestName", image: avatar, position: "Professor" },
  { id: 9, name: "TestName", image: avatar, position: "Professor" },
  { id: 10, name: "TestName", image: avatar, position: "Professor" },
  { id: 11, name: "TestName", image: avatar, position: "Professor" },
  { id: 12, name: "TestName", image: avatar, position: "Professor" },
  { id: 13, name: "TestName", image: avatar, position: "Professor" },
  { id: 14, name: "TestName", image: avatar, position: "Professor" },
  {
    id: 15,
    name: "TestName",
    image: require("../images/faculty/IT/avatar.jpeg"),
    position: "Professor",
  },
];

class person extends React.Component {
  render() {
    return (
      <div>
        <HeaderTitle name="IT-Staff" />
        <div className="row card-body pt-5">
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
              <div className="col-lg-6">
                <div className="card-inner box" style={{ borderRadius: 0 }}>
                  <div className="media">
                    <img
                      src={info.image}
                      className="avatar rounded-circle p-2"
                      alt="Person-image"
                    />
                    <div className="media-body">
                      <h5 className="mt-0">
                        {info.name}{" "}
                        <small>
                          <i>{info.position}</i>
                        </small>
                      </h5>
                      <p>
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          style={{ marginRight: 5 }}
                        />
                        TestName123@msitprogram.net{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default person;
