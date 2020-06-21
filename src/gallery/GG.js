import React, { Component } from "react";
import Images from "./Images.js";
import HeaderTitle from "../components/headerImage.js";
import "../css/GG.css";

//Gallery page
//This page routes to Images page
class Gallery extends Component {
  render() {
    return (
      <div className="App">
        <HeaderTitle name="Gallery" />
        <Images />
      </div>
    );
  }
}

export default Gallery;
