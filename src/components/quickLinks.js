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
      <div className="col-md-6 col-lg links-alignment">
        <FontAwesomeIcon icon={faInfo} size="3x" className="quick-icons" />
        <Link to="/msit-vision" className="links">
          <h3 className="title-card">MSIT Vision</h3>
        </Link>
      </div>
      <div className="col-md-6 col-lg links-alignment">
        <FontAwesomeIcon
          icon={faGraduationCap}
          size="3x"
          className="quick-icons"
        />
        <h3 className="title-card">Specializations</h3>
      </div>
      <div className="col-md-6 col-lg links-alignment">
        <FontAwesomeIcon icon={faRupeeSign} size="3x" className="quick-icons" />
        <h3 className="title-card">Fee Structure</h3>
      </div>
      <div className="col-md-6 col-lg links-alignment">
        <FontAwesomeIcon icon={faIndustry} size="3x" className="quick-icons" />
        <h3 className="title-card">Placements</h3>
      </div>
      <div className="col-md-12 col-lg links-alignment">
        <FontAwesomeIcon icon={faCheck} size="3x" className="quick-icons" />
        <h3 className="title-card">Apply</h3>
      </div>
    </div>
  );
}

export default App;
