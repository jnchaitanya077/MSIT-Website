import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
//Bootstrap imports

import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./css/index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//About Msit imports
import MsitProgram from "./AboutMsit/MsitProgram.js";
import Charter from "./AboutMsit/Charter.js";
import CoursesAndStructure from "./AboutMsit/CoursesAndStructure.js";
import Curriculum from "./AboutMsit/Curriculum.js";
//Homepage imports
import Header from "./components/Header.js";
import Footer from "./components/footer.js";
import Hompage from "./Homepage/homepage.js";
//MSIT Vision imports
import MsitVision from "./Vision/MSIT-Vision.js";
//MSIT Advantage imports
import MSITAdvantage from "./Advantage/MSIT-Advantage.js";
//Faculty page imports
import Dean from "./faculty/Dean.js";
import ITmentors from "./faculty/ITmentors.js";
import SSmentors from "./faculty/SSmentors.js";
import AdminStaff from "./faculty/AdminStaff.js";
import Publications from "./faculty/publications.js";
import * as serviceWorker from "./serviceWorker";
//Admissions page imports
import AdmissionInfo from "./Admissions/admissionProcedure.js";
import HowToApply from "./Admissions/howToApply.js";
import WalkInProcess from "./Admissions/walkInProcess.js";
import Schedule from "./Admissions/Schedule.js";
import Fee from "./Admissions/feeStructure.js";
import SampleTestQuestions from "./Admissions/sample_test_qs.js";
import EntranceSyllabus from "./Admissions/entranceSyllabus.js";
import FAQ from "./Homepage/faq.js";

// Recruiters page imports
import Placements from "./Recruiters/placements.js";
import Corp_relations from "./Recruiters/Corp_relations.js";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      {/* index */}
      <Route exact path="/" component={Hompage} />
      {/* MSIT Vision */}
      <Route exact path="/msit-vision" component={MsitVision} />
      {/* MSIT Advantage */}
      <Route exact path="/msit-advantage" component={MSITAdvantage} />
      <Route
        exact
        path="/msit-advantage/#LearningByDoing"
        component={MSITAdvantage}
      />
      {/* Amissions */}
      <Route exact path="/admission" component={AdmissionInfo} />
      <Route exact path="/schedule" component={Schedule} />
      <Route exact path="/fee-structure" component={Fee} />
      <Route exact path="/entranceSyllabus" component={EntranceSyllabus} />
      <Route
        exact
        path="/sample-test-questions"
        component={SampleTestQuestions}
      />
      {/* faculty */}
      <Route exact path="/dean" component={Dean} />
      <Route exact path="/it-mentors" component={ITmentors} />
      <Route exact path="/ss-mentors" component={SSmentors} />
      <Route exact path="/admin-staff" component={AdminStaff} />
      <Route exact path="/publications" component={Publications} />
      <Route exact path="/faq" component={FAQ} />
      <Route exact path="/placements" component={Placements} />
      <Route exact path="/corp_relations" component={Corp_relations} />
      <Route exact path="/MsitProgram" component={MsitProgram} />
      <Route exact path="/Charter" component={Charter} />
      <Route
        exact
        path="/CoursesAndStructure"
        component={CoursesAndStructure}
      />
      <Route exact path="/Curriculum" component={Curriculum} />

      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
