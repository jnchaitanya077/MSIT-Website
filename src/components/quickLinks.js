import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faBookmark,
  faRupeeSign,
  faIndustry,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import "../css/quickLinks.css";

function App() {
  return (
    <div className="row" style={{ marginRight: 0, marginLeft: 0 }}>
      <div className="col-md-6 col-lg links-alignment">
        <Link to="/msit-vision" className="links">
          <FontAwesomeIcon icon={faInfo} size="3x" className="quick-icons" />
        </Link>
        <Link to="/msit-vision" className="links">
          <h3 className="quick-links">
            <strong>MSIT Vision</strong>
          </h3>
        </Link>
      </div>
      <div className="col-md-6 col-lg links-alignment">
        <Link to="#" className="links">
          <FontAwesomeIcon
            icon={faBookmark}
            size="3x"
            className="quick-icons"
          />
        </Link>
        <Link to="/CoursesAndStructure#specializations" className="links">
          <h3 className="quick-links">
            <strong>Specializations</strong>
          </h3>
        </Link>
      </div>
      <div className="col-md-6 col-lg links-alignment">
        <Link to="/fee-structure" className="links">
          <FontAwesomeIcon
            icon={faRupeeSign}
            size="3x"
            className="quick-icons"
          />
        </Link>
        <Link to="/fee-structure" className="links">
          <h3 className="quick-links">
            <strong>Fee Structure</strong>
          </h3>
        </Link>
      </div>
      <div className="col-md-6 col-lg links-alignment">
        <Link to="#" className="links">
          <FontAwesomeIcon
            icon={faIndustry}
            size="3x"
            className="quick-icons"
          />
        </Link>
        <Link to="#" className="links">
          <h3 className="quick-links">
            <strong>Placements</strong>
          </h3>
        </Link>
      </div>
      <div className="col-md-12 col-lg links-alignment">
        <a href="https://msitprogram.net/admissions/" className="links">
          <FontAwesomeIcon icon={faCheck} size="3x" className="quick-icons" />
        </a>
        <a href="https://msitprogram.net/admissions/" className="links">
          <h3 className="quick-links">
            <strong>Apply</strong>
          </h3>
        </a>
      </div>
    </div>
  );
}

export default App;
