import React from "react";
import "../css/staff.css";
import Jumbotron from 'react-bootstrap/Jumbotron'

function App(props) {
  return (
    // <div className="row card-body main-body">
    //   <div className="col-lg-8 order-2 order-md-2 order-lg-1 ml-4">
    //     <h2 className="Right-title">
    //       <strong>
    //         {props.name}
    //         <span> {props.qualification}</span>
    //       </strong>
    //     </h2>
    //     <h6 className="sub-title right">{props.subtitle}</h6>
    //     <blockquote className="sub-para">
    //       <q>{props.body}</q>
    //     </blockquote>
    //   </div>
    //   <div className="col-lg-3 order-1 order-md-1 order-lg-2 ml-4 Head-img">
    //     <img src={props.image} className="box  img-fluid" alt="photo" />
    //   </div>
    // </div>
    <Jumbotron fluid style= {{ height: "auto" , padding:"0px" , margin:"0px"}}>
        <Collapsible trigger={props.courseName}>
            <h5>Course Description</h5>
            <p>{props.description}</p>
        </Collapsible>
  </Jumbotron>

  );
}

export default App;