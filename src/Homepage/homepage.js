import React from "react";
import Carousel from "../components/carousel.js";
import Links from "../components/quickLinks.js";
import News from "../components/latestNews.js";
import Placement from "../components/placement.js";
import Cards from "../components/cards.js";

function App() {
  return (
    <div>
      <div className="quick-carousel">
        <Carousel />
        <Links />
      </div>
      <News />
      <Placement />
      <Cards />
    </div>
  );
}

export default App;
