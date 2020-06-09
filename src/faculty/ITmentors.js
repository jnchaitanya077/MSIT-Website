import React from "react";
import HeaderTitle from "../components/headerImage";
import "../css/staff.css";
import avatar from "../images/faculty/IT/images.png";

// Can import images in two ways
// 1.Import the image and just place it in the List.
// 2.Use require to import directly without.

const ITstaff = [
  { id: 1, name: "TestName", image: avatar, position: "Professor" },
  { id: 2, name: "TestName", image: avatar, position: "Professor" },
  { id: 3, name: "TestName", image: avatar, position: "Professor" },
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
        <HeaderTitle branch="IT-Staff" />
        <div className="row card-body ">
          {ITstaff.map((info) => {
            return (
              <div className="col-lg-4 ">
                <div className="card-inner box" style={{ borderRadius: 0 }}>
                  <div className="media">
                    <img
                      src={info.image}
                      className="avatar rounded-circle p-2"
                    />
                    <div className="media-body">
                      <h5 className="mt-0">
                        {info.name}{" "}
                        <small>
                          <i>{info.position}</i>
                        </small>
                      </h5>
                      <p>This is really an excellent feature! </p>
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
