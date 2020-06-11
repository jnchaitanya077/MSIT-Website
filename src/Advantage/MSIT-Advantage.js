import React from "react";
import HeaderTitle from "../components/headerImage.js";



function App() {
    return (
      <div>
        <HeaderTitle name="MSIT-Advantage" />
        {/* Learning by Doing */}
        <div className="row card-body main-body">
        <div className="col-lg-3 Head-img">
          {/* <img src={Founder} className="box  img-fluid" /> */}
        </div>

        <div className="col-lg-8 ml-4">
          <h2 className="Left-title">
            <strong>
              Learning By Doing
            </strong>
          </h2>
          {/* <h6 className="sub-title">Founder, MSIT Programme</h6> */}
          <p className="sub-para">
          The methodology of “Learning By Doing” is a unique one adopted by MSIT. 
          It aims at giving hands - on experience which helps the students understand
          the practical implementation aspects and the concepts associated with it.
          </p>
        </div>
      </div>
      </div>
    );
}


export default App;