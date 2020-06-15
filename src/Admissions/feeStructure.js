import React from "react";
import HeaderImage from "../components/headerImage.js";

function App() {
  return (
    <div>
      <HeaderImage name="Fee" />
      <div className="card-body author-block mt-5 mb-5 pr-2">
        <h2 className="title">Fees & Tuition</h2>
        <div className="container">
          <table className="table" style={{ backgroundColor: "#e3f2fd" }}>
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
            <h3 className="title">Admission Fee</h3>
            <p>
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

export default App;
