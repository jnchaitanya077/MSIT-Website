import React from "react";
import "../css/admissions.css";
import HeaderTitle from "../components/headerImage.js";
import {
  gatFee,
  walkInDateStart,
  walkInEndDate,
  gatApplyLastDate,
  gatExamDate,
} from "./examDates.js";

function App() {
  return (
    <div>
      <HeaderTitle name="Admission-Procedure" />
      <div className="card-body border mt-5 mb-5 pr-2 bg-light ">
        {/* Eligibility Section */}
        <div>
          <h2 className="title">Eligibility</h2>
          <p>B.Tech / B.E(All Branches)</p>
          <p>
            Admissions are based on ranks obtained in the entrance exam called
            Graduate Aptitude Test(GAT).
          </p>
        </div>
        <hr />

        <div>
          {/* GAT Exam Pattern */}
          <h2 className="title">
            Graduate Aptitude Test (GAT) will be conducted by CIHL in two ways:
          </h2>
          <ol>
            <li>
              <strong>
                Walk-in Entrance – Candidates have the option to choose the date
                of the exam.
              </strong>
            </li>
            <li>
              <strong>
                Regular GAT Entrance – Exam is conducted on a fixed date.
              </strong>
            </li>
          </ol>
          <p>
            Due to the COVID-19 situation the Graduate Aptitude Test (GAT), both
            Walk- in Entrance and Regular GAT Entrance are conducted online i.e.
            candidates can take the test from home. Hence candidates can stay
            home and stay safe.
          </p>

          <p>
            Candidates can appear either for Walk-in OR Regular GAT Entrance OR
            both tests.&nbsp;
            <strong className="title">
              Before COVID-19 situation Candidates can appear for Walk-ins three
              times and Regular GAT one time i.e, maximum 4 times
            </strong>
            .
          </p>

          <p>
            Due to the COVID-19 situation, Walk-in can be attempted one time and
            the Regular GAT can be attempted one time, i.e.
            <strong className="title">
              candidate can take the test for a maximum of 2 times.
            </strong>
            The best of these two will be considered for the rankings.
          </p>

          <p>
            For every attempt a non-refundable amount of Rs.{gatFee} has to be
            paid online by Credit / Debit card or net banking from our website
            (www.msitprogram.net).
          </p>
        </div>

        <hr />

        {/* Walkin Dates and info*/}
        <h2 className="title">Walk-in Entrance Test</h2>
        <p>
          Eligible candidates can apply online for walk-in Entrance Test
          <a href="" className="links title">
            &nbsp;<strong>Apply</strong>&nbsp;
          </a>
          here from {walkInDateStart}.
        </p>
        <div className="container">
          <table className="table" style={{ backgroundColor: "#e3f2fd" }}>
            <thead>
              <tr>
                <th scope="col">Due to the COVID-19 Situation</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Walk-In Entrance GAT (online) starts on</td>
                <td>{walkInDateStart}</td>
              </tr>
              <tr>
                <td>Walk-In Entrance GAT (online) ends on</td>
                <td>{walkInEndDate}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          * Please find the URL that has instructions and process that need to
          be followed to take the exam. &nbsp;
          <a
            href="https://online.cbexams.com/RPS/MSIT/Default.aspx"
            className="links title"
          >
            Exam Instructions
          </a>
        </p>
        <p>
          * Practice Tests :
          <a
            href=" https://online.cbexams.com/RPS/MSIT/Practice_Instructions.aspx"
            className="links title"
          >
            {" "}
            Test Link
          </a>
        </p>
        <hr />

        {/* GAT Info */}
        <h2 className="title">Regular GAT</h2>
        <p>
          Regular Entrance Test is conducted from {gatExamDate}. Candidates can
          apply for this test online
          <a
            href="https://www.msitprogram.net/admissions/"
            className="links title"
          >
            &nbsp;<strong>Apply</strong>&nbsp;
          </a>
        </p>
        <div className="container">
          <table className="table" style={{ backgroundColor: "#e3f2fd" }}>
            <tbody>
              <tr>
                <td>
                  Last date for applying for Regular GAT Entrance (online)
                </td>
                <td>{gatApplyLastDate}</td>
              </tr>
              <tr>
                <td>
                  Regular GAT Entrance (online) Examination is conducted on
                </td>
                <td>{gatExamDate}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />

        {/* GRE Info */}
        <h2 className="title">Entrance test waived</h2>
        <p>
          <strong>GRE:</strong> Candidates who have taken the GRE after July
          2016 are exempted from the entrance test (GAT) if they have a score of
          301/3.5
        </p>
      </div>
    </div>
  );
}

export default App;
