import React from "react";

import image1 from "../images/alumini/alumini-engage.jpg";
import "../css/cards.css";

function App() {
  return (
    <div className="row cardsPadding">
      <div className="col-md-4 ">
        <div class="card">
          <img class="card-img-top" src={image1} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Alumni Engage</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-success">
              Go somewhere
            </a>
          </div>
        </div>
      </div>

      <div className="col-md-4 ">
        <div class="card">
          <img class="card-img-top" src={image1} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">MSIT Voice</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-outline-success">
              Go somewhere
            </a>
          </div>
        </div>
      </div>

      <div className="col-md-4 ">
        <div class="card">
          <img class="card-img-top" src={image1} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-outline-success">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
