import React from "react";
import "../css/headerImage.css";

function App(props) {
  return (
    <div className=".container-fluid header-image">
      <div className="outer-spacing">
        <div className="header-title-outer box">
          <h1 className="header-title">{props.branch}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
