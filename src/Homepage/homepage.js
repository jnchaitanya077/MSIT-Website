import React, { useEffect } from "react";
import Carousel from "../components/carousel.js";
import Links from "../components/quickLinks.js";
import News from "../components/latestNews.js";
import Placement from "../components/placement.js";
import Cards from "../components/cards.js";

function Hompage({ element }) {
  useEffect(() => {
    const myId = window.location.hash.slice(1);
    const elem = document.getElementById(myId);
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });

  return (
    <div id="top">
      <div className="quick-carousel">
        <Carousel />
        <Links element={element} />
      </div>
      <News />
      <Placement />
      <Cards />
    </div>
  );
}

export default Hompage;
