import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function App(props) {
  return (
    <div className="col-lg-6 ">
      <div className="card-inner box">
        <div className="media">
          <img
            src={props.image}
            className="avatar rounded-circle p-2"
            alt="Person-image"
          />
          <div className="media-body">
            <h5 className="mt-0">
              {props.name}
              <small>
                <i>{props.position}</i>
              </small>
            </h5>
            <p>
              <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: 5 }} />
              {props.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
