import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
//Bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./css/index.css";
//Homepage imports
import Header from "./components/Header.js";
import Footer from "./components/footer.js";
import Hompage from "./Homepage/homepage.js";
//MSIT Vision imports
import MsitVision from "./Vision/MSIT-Vision.js";
//Faculty page imports
import Dean from "./faculty/Dean.js";
import ITmentors from "./faculty/ITmentors.js";
import SSmentors from "./faculty/SSmentors.js";
import AdminStaff from "./faculty/AdminStaff.js";
import Publications from "./faculty/publications.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Hompage} />
      <Route exact path="/msit-vision" component={MsitVision} />
      <Route exact path="/dean" component={Dean} />
      <Route exact path="/it-mentors" component={ITmentors} />
      <Route exact path="/ss-mentors" component={SSmentors} />
      <Route exact path="/admin-staff" component={AdminStaff} />
      <Route exact path="/publications" component={Publications} />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();