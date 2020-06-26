import React from "react";
import HeaderImage from "../components/headerImage.js";

class App extends React.Component {
  componentDidMount() {
    console.log("mount");
    const myId = window.location.hash.slice(1);
    const elem = document.getElementById(myId);
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
  componentDidUpdate() {
    console.log("mount");
    const myId = window.location.hash.slice(1);
    const elem = document.getElementById(myId);
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  render() {
    return (
      <div id="top">
        <HeaderImage name="Fee" />
        <div className=" container shadows-courses box-styles mt-5 mb-5">
          <h1>Fees & Tuition</h1>
          <div className="container">
            <table className="table" style={{ backgroundColor: "#e9ecef" }}>
              <thead>
                <tr>
                  <th>Learning Center</th>
                  <th>Annual Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> IIITH </td>
                  <td>Rs. 2,00,000/- </td>
                </tr>
                <tr>
                  <td> JNTUH </td>
                  <td>Rs. 1,70,000/-</td>
                </tr>
                <tr>
                  <td> JNTUK, JNTUA, SVU </td>
                  <td>Rs. 1,50,000/-</td>
                </tr>
              </tbody>
            </table>
            <div className="border mt-5 mb-5 pr-2 pl-3 bg-light">
              <h3>Admission Fee</h3>
              <p className="general-text">
                Those who get direct admission into the MSIT main program should
                pay a non- refundable admission fee of Rs. 30,000/- (part of the
                annual fee) at the time of counseling.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
