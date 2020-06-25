import React from "react";
import "../css/staff.css";
import Collapsible from "react-collapsible";

function App(props) {
  return (
    <div className="row main-body-adv" id={props.id}>
      <div className="col-lg-3 Head-img">
        <img src={props.image} className="box  img-fluid" />
      </div>

      <div className="col-lg-8 left-spacing">
        <h2 className="Left-title">
          <strong>
            {props.name} <span>{props.qualification}</span>
          </strong>
        </h2>
        <h6 className="sub-title">{props.subtitle}</h6>

        <blockquote className="sub-para general-text">
          {props.body}

          <Collapsible
            trigger="See More"
            className="test"
            style={{ display: "inline", color: "red" }}
          >
            {props.body}
          </Collapsible>
        </blockquote>
      </div>
    </div>
  );
}

export default App;
