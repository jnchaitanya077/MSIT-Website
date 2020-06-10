import React from "react";
import "../css/staff.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import avatar from "../images/faculty/IT/images.png";
import HeaderTitle from "../components/headerImage";

const SSstaff = [
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
  { id: 15, name: "TestName", image: avatar, position: "Professor" },
];

class person extends React.Component {
  render() {
    return (
      <div>
        <HeaderTitle name="Soft-Skills" />
        <div className="row card-body pt-5">
          <p className="para">
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
          <hr />
          {SSstaff.map((info) => {
            return (
              <div className="col-lg-6">
                <div className="card-inner box">
                  <div className="media">
                    <img
                      src={info.image}
                      className="avatar rounded-circle p-2"
                      alt="person-image"
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
                        TestName123@msitprogram.net
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
