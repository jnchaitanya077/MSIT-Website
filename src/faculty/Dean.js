import React from "react";
import "../css/staff.css";
import HeaderTitle from "../components/headerImage";
import Dean from "../images/faculty/Dean/Dean_cropped.jpg";

function App() {
  return (
    <div>
      <HeaderTitle name="Dean" />
      <div className="">
        <img src={Dean} />
      </div>
    </div>
  );
}
