import React from "react";

function LearningCenters(props) {
  return (
    <div
      className="col shadows mb-3"
      style={{ height: "auto", paddingBottom: "0" }}
    >
      <h3 id="section1">{props.university}</h3>
      <p>
        {props.body}
        <a href={props.link}>
          <span>Here</span>
        </a>
      </p>
      <div
        className="jumbotron jumbotron-fluid"
        style={{ height: "50px", width: "30%", padding: "1%" }}
      >
        <div>
          <a
            href={props.fullLink}
            target="_blank"
            className="links"
            style={{
              //   color: "rgb(6, 44, 59)",
              fontWeight: "bolder",
              fontSize: "larger",
            }}
          >
            Know More About {props.university}
          </a>
        </div>
      </div>
    </div>
  );
}

export default LearningCenters;
