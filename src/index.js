import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/Header.js";
import Footer from "./components/footer.js";
import Hompage from "./Homepage/homepage.js";
import ITmentors from "./faculty/ITmentors.js";
import SSmentors from "./faculty/SSmentors.js";
import AdminStaff from "./faculty/AdminStaff.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Hompage} />
      <Route exact path="/it-mentors" component={ITmentors} />
      <Route exact path="/ss-mentors" component={SSmentors} />
      <Route exact path="/admin-staff" component={AdminStaff} />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
