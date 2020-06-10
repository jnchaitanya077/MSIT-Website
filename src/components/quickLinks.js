import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faGraduationCap,
  faRupeeSign,
  faIndustry,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import "../css/quickLinks.css";

function App() {
  return (
    <div className="row" style={{ marginRight: 0, marginLeft: 0 }}>
      <div className="col-md links">
        <FontAwesomeIcon icon={faInfo} size="3x" className="quick-icons" />
        <Link to="/msit-vision">
          <h3>MSIT Vision</h3>
        </Link>
      </div>
      <div className="col-md links">
        <FontAwesomeIcon
          icon={faGraduationCap}
          size="3x"
          className="quick-icons"
        />
        <h3>Specializations</h3>
      </div>
      <div className="col-md links">
        <FontAwesomeIcon icon={faRupeeSign} size="3x" className="quick-icons" />
        <h3>Fee Structure</h3>
      </div>
      <div className="col-md links">
        <FontAwesomeIcon icon={faIndustry} size="3x" className="quick-icons" />
        <h3>Placements</h3>
      </div>
      <div className="col-md links">
        <FontAwesomeIcon icon={faCheck} size="3x" className="quick-icons" />
        <h3>Apply</h3>
      </div>
    </div>
  );
}

export default App;
