import React from "react";
import "../css/placement.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="row placement">
      <div className="col-sm placement-heading md">
        <h2>
          MSIT Alumni Work in Leading
          <br /> Organizations Of the World.
        </h2>
        <div className="horizontal"></div>
        <p className="general-text placement-body">
          Year 2018 – 11 students placed with a salary package in excess
          <br /> of 20 Lakhs Per Annum
          <br />
          <Link to="/placements/#top" className="btn btn-success .btn-sm mt-3">
            View More
          </Link>
        </p>
      </div>
    </div>
  );
}
export default App;
