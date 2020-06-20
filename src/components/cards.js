import React from "react";

import image1 from "../images/alumini/alumini-engage-sm.jpg";
import "../css/cards.css";

function App() {
  return (
    <div className="row cardsPadding">
      <div className="col-md-4 singleCard">
        <div className="card">
          <img className="card-img-top" src={image1} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Alumni Engage</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-success">
              Go somewhere
            </a>
          </div>
        </div>
      </div>

      <div className="col-md-4 singleCard">
        <div className="card">
          <img className="card-img-top" src={image1} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">MSIT Voice</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-outline-success">
              Go somewhere
            </a>
          </div>
        </div>
      </div>

      <div className="col-md-4 singleCard">
        <div className="card">
          <img className="card-img-top" src={image1} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-outline-success">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
