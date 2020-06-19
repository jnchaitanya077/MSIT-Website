import React from "react";
import "../css/staff.css";

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
        <blockquote className="sub-para">
          <q>{props.body}</q>
        </blockquote>
      </div>
    </div>
  );
}

export default App;
