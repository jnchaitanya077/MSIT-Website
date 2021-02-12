import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// Hooks
import useSticky from "./Hooks/useSticky";
// alert
import Alert from "./components/info";
//Bootstrap imports
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./css/index.css";
//About Msit imports
import MsitProgram from "./pages/AboutMsit/MsitProgram.js";
import Charter from "./pages/AboutMsit/Charter.js";
import CoursesAndStructure from "./pages/AboutMsit/CoursesAndStructure.js";
import Curriculum from "./pages/AboutMsit/Curriculum.js";
import Certification from "./pages/AboutMsit/CertificationAndLearningCenters.js";
//Homepage imports
import Navigation from "./components/Header.js";
import Footer from "./components/footer.js";
import Hompage from "./pages/Homepage/homepage.js";
//MSIT Vision imports
import MsitVision from "./pages/Vision/MSIT-Vision.js";
//MSIT Advantage imports
import MSITAdvantage from "./pages/Advantage/MSIT-Advantage.js";
// Gallery
import Gallery from "./gallery/GG.js";
//Faculty page imports
import Dean from "./pages/Faculty/Dean.js";
import ITmentors from "./pages/Faculty/ITmentors.js";
import SSmentors from "./pages/Faculty/SSmentors.js";
import AdminStaff from "./pages/Faculty/AdminStaff.js";
import Publications from "./pages/Faculty/publications.js";
//Admissions page imports
import AdmissionInfo from "./pages/Admissions/admissionProcedure.js";
import Schedule from "./pages/Admissions/Schedule.js";
import Fee from "./pages/Admissions/feeStructure.js";
import SampleTestQuestions from "./pages/Admissions/sample_test_qs.js";
import EntranceSyllabus from "./pages/Admissions/entranceSyllabus.js";
import FAQ from "./pages/Homepage/faq";
// Recruiters page imports
import Placements from "./pages/Recruiters/placements.js";
import CorpRelations from "./pages/Recruiters/Corp_relations.js";
// import Test from "./components/test.js";

//FooterLinks
import TermsAndConditions from "./pages/FooterLinks/TermsAndConditions.js";
import PrivacyPolicy from "./pages/FooterLinks/PrivacyPolicy.js";
import RefundCancellation from "./pages/FooterLinks/RefundCancellation.js";

// Blog
import Blog from "./pages/Blog/blog.js";
import Blog_page from "./pages/Blog/blog-page1.js";
import Blog_page2 from "./pages/Blog/blog-page2.js";
import Blog_page3 from "./pages/Blog/blog-page3.js";

function App() {
  const { isSticky, element } = useSticky();

  return (
    <React.StrictMode>
      <BrowserRouter>
        {/* <Alert /> */}
        <Navigation sticky={isSticky} />
        {/* index */}
        <Route exact path="/" render={() => <Hompage element={element} />} />
        {/* MSIT Vision */}
        <Route
          exact
          path="/msit-vision"
          render={() => <MsitVision element={element} />}
        />
        {/* MSIT Advantage */}
        <Route
          exact
          path="/msit-advantage"
          render={() => <MSITAdvantage element={element} />}
        />
        <Route
          exact
          path="/msit-advantage/#LearningByDoing"
          render={() => <MSITAdvantage element={element} />}
        />
        {/* Amissions */}
        <Route
          exact
          path="/admission"
          render={() => <AdmissionInfo element={element} />}
        />
        <Route
          exact
          path="/schedule"
          render={() => <Schedule element={element} />}
        />
        <Route
          exact
          path="/fee-structure"
          render={() => <Fee element={element} />}
        />
        <Route
          exact
          path="/entranceSyllabus"
          render={() => <EntranceSyllabus element={element} />}
        />
        <Route
          exact
          path="/sample-test-questions"
          render={() => <SampleTestQuestions element={element} />}
        />
        {/* faculty */}
        <Route exact path="/dean" render={() => <Dean element={element} />} />
        <Route
          exact
          path="/it-mentors"
          render={() => <ITmentors element={element} />}
        />
        <Route
          exact
          path="/ss-mentors"
          render={() => <SSmentors element={element} />}
        />
        <Route
          exact
          path="/admin-staff"
          render={() => <AdminStaff element={element} />}
        />
        <Route
          exact
          path="/publications"
          render={() => <Publications element={element} />}
        />
        {/* Recruiters */}
        <Route exact path="/faq" render={() => <FAQ element={element} />} />
        <Route
          exact
          path="/placements"
          render={() => <Placements element={element} />}
        />
        <Route
          exact
          path="/corp-relations"
          render={() => <CorpRelations element={element} />}
        />
        {/* About MSIT */}
        <Route
          exact
          path="/msit-program"
          render={() => <MsitProgram element={element} />}
        />
        <Route
          exact
          path="/Charter"
          render={() => <Charter element={element} />}
        />
        <Route
          exact
          path="/CoursesAndStructure"
          render={() => <CoursesAndStructure element={element} />}
        />
        <Route
          exact
          path="/Curriculum"
          render={() => <Curriculum element={element} />}
        />
        <Route
          exact
          path="/CertificationAndLearningCenters"
          render={() => <Certification element={element} />}
        />
        {/* Gallery */}
        <Route
          exact
          path="/gallery"
          render={() => <Gallery element={element} />}
        />

        {/* FooterLinks */}
        <Route
          exact
          path="/TermsAndConditions"
          render={() => <TermsAndConditions element={element} />}
        />
        <Route
          exact
          path="/PrivacyPolicy"
          render={() => <PrivacyPolicy element={element} />}
        />
        <Route
          exact
          path="/RefundCancellation"
          render={() => <RefundCancellation element={element} />}
        />
        {/* Blog */}
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog-page" component={Blog_page} />
        <Route exact path="/blog-page2" component={Blog_page2} />
        <Route exact path="/blog-page3" component={Blog_page3} />

        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
