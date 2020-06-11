import React from "react";
import HeaderTitle from "../components/headerImage.js";



function App() {
    return (
      <div>
        <HeaderTitle name="MSIT-Advantage" />
        {/* Learning by Doing */}
        <div className="row card-body main-body" id="learningbydoing">
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
                    MSIT’s “Learning by Doing” method involves learning in a project-centric way.
                    This helps students to solve problems by applying concepts.Each course is 
                    broken into manageable modules each of which is offered as a project to be worked on. 
                </p>
            </div>
        </div>
        {/* Project Centered Curriculum */}
        <div className="row card-body main-body" id = "pcc">
            <div className="col-lg-3 Head-img">
                {/* <img src={Founder} className="box  img-fluid" /> */}
            </div>

            <div className="col-lg-8 ml-4">
                <h2 className="Left-title">
                    <strong>
                        Project Centered Curriculum
                    </strong>
                </h2>
                {/* <h6 className="sub-title">Founder, MSIT Programme</h6> */}
                <p className="sub-para">
                    Project centric curriculum offers practical hands on experience to
                    master the implementation aspects of the concepts related to each course.
                    Each course is broken into manageable modules each of which is offered as
                    a project to be worked on. Students work in teams with a corporate like 
                    environment. The students understand the concept while working on the 
                    project and submit the relevant tasks (deliverables) within the deadline
                    specified by their mentors.The students get the required guidance and
                    support at every level from the mentors who have a wide knowledge base
                    which would be helpful for the growth of students.
                </p>
            </div>
        </div>
        {/* Soft Skills */}
        <div className="row card-body main-body" id = "ss">
            <div className="col-lg-3 Head-img">
                {/* <img src={Founder} className="box  img-fluid" /> */}
            </div>

            <div className="col-lg-8 ml-4">
                <h2 className="Left-title">
                    <strong>
                        Soft Skills
                    </strong>
                </h2>
                {/* <h6 className="sub-title">Founder, MSIT Programme</h6> */}
                <p className="sub-para">
                    In a rapidly changing work environment which is technology- driven and
                    customer oriented in an information based economy, the reliance on Soft
                    Skills is more relevant than ever.The training is spread throughout the
                    year and not just limited to a few days. In-house training to develop 
                    LSRW (Listening, Speaking, Reading, Writing) skills, life skills training
                    by corporate professionals and rich digital content (e-modules) represent
                    the threefold approach adopted by MSIT.
                </p>
            </div>
        </div>
        {/* Resources for Students */}
        <div className="row card-body main-body" id = "resources">
            <div className="col-lg-3 Head-img">
                {/* <img src={Founder} className="box  img-fluid" /> */}
            </div>

            <div className="col-lg-8 ml-4">
                <h2 className="Left-title">
                    <strong>
                        Resources for Students
                    </strong>
                </h2>
                {/* <h6 className="sub-title">Founder, MSIT Programme</h6> */}
                <p className="sub-para">
                    State of the Art Infrastructure The students use laptops for performing
                    their tasks, oriented towards their project work and a well established
                    wired and wireless network are made available 24x7. High end communication
                    mechanisms are used for collaborating with globally distributed teams across
                    learning centers.
                    <ul>
                        <li>High band-width internet connectivity</li>
                        <li>24x7 lab facility</li>
                        <li>Expert faculty</li>
                    </ul>
                </p>
            </div>
        </div>
        {/* Infrastructure */}
        <div className="row card-body main-body" id = "infrastructure">
            <div className="col-lg-3 Head-img">
                {/* <img src={Founder} className="box  img-fluid" /> */}
            </div>

            <div className="col-lg-8 ml-4">
                <h2 className="Left-title">
                    <strong>
                        Infrastructure
                    </strong>
                </h2>
                {/* <h6 className="sub-title">Founder, MSIT Programme</h6> */}
                <p className="sub-para">
                    State of the art infrastructural facilities are provided to the MSIT students
                    at each of the learning centers.The learning centers are located in universities
                    with sprawling campuses marked by awesome buildings and spacious lawns. Every
                    learning center has state-of-art computer laboratories which are open for 
                    24x7 with ultra modern workstations.
                    All the systems are intra-networked and a high bandwidth Internet connection is
                    given to all the students for 24x7.Library access is given to all the students 
                    in the respective learning centers.
                </p>
            </div>
        </div>
      </div>
    );
}


export default App;