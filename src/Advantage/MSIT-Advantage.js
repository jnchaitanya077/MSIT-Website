import React, { Fragment } from "react";
import HeaderTitle from "../components/headerImage.js";
import RightGrid from "../components/gridRight.js";
import LeftGrid from "../components/gridLeft.js";
import LBD from "../images/faculty/IT/learn1.jpg";
import PCC from "../images/faculty/IT/pcc1.jpg";
import SS from "../images/faculty/IT/ss.jpg";
// import Resources from "../images/faculty/IT/ss.jpg";
import Infrastructure from "../images/faculty/IT/infra.png";

const info = [
    {
      id: 1,
      name: "Learning By Doing",
      image: LBD,
      body:
        "The methodology of “Learning By Doing” is a unique one adopted by MSIT. It aims at giving hands - on experience which helps the students understand the practical implementation aspects and the concepts associated with it. MSIT’s “Learning by Doing” method involves learning in a project-centric way. This helps students to solve problems by applying concepts. Each course is broken into manageable modules each of which is offered as a project to be worked on.",
    },
    {
      id: 2,
      name: "Project Centered Curriculum",
      image: PCC,
      body:
        "Project centric curriculum offers practical hands on experience to master the implementation aspects of the concepts related to each course. Each course is broken into manageable modules each of which is offered as a project to be worked on. Students work in teams with a corporate like environment. The students understand the concept while working on the project and submit the relevant tasks (deliverables) within the deadline specified by their mentors. The students get the required guidance and support at every level from the mentors who have a wide knowledge base which would be helpful for the growth of students.",
    },
    {
      id: 3,
      name: "Soft Skills",
      image: SS,
      body:
        "In a rapidly changing work environment which is technology- driven and customer oriented in an information based economy, the reliance on Soft Skills is more relevant than ever. The training is spread throughout the year and not just limited to a few days. In-house training to develop LSRW (Listening, Speaking, Reading, Writing) skills, life skills training by corporate professionals and rich digital content (e-modules) represent the threefold approach adopted by MSIT.",
    },
    {
      id: 4,
      name: "Resources For Students",
    //   image: Resources,
      body:
        "State of the Art Infrastructure: The students use laptops for performing their tasks, oriented towards their project work and a well-established wired and wireless network are made available 24x7. High end communication mechanisms are used for collaborating with globally distributed teams across learning centers. We will be providing high band-width internet connectivity, 24x7 lab facility, expert faculty.",
    },
    {
      id: 5,
      name: "Infrastructure",
      image: Infrastructure,
      body:
        "State of the art infrastructural facilities are provided to the MSIT students at each of the learning centers.The learning centers are located in universities with sprawling campuses marked by awesome buildings and spacious lawns. Every learning center has state-of-art computer laboratories which are open for 24x7 with ultra-modern workstations. All the systems are intra-networked and a high bandwidth Internet connection is given to all the students for 24x7.Library access is given to all the students in the respective learning centers.",
    },
  ];
function App() {
    return (
      <div>
        <HeaderTitle name="MSIT-Advantage" />
        {info.map((post) => {
          if (post.id % 2 == 0) {
            return (
              <Fragment key={post.id}>
                <RightGrid
                  name={post.name}
                  image={post.image}
                //   qualification={post.qualification}
                //   subtitle={post.subtitle}
                  body={post.body}
                />
              </Fragment>
            );
          } else {
            return (
              <Fragment key={post.id}>
                <LeftGrid
                  name={post.name}
                  image={post.image}
                //   qualification={post.qualification}
                //   subtitle={post.subtitle}
                  body={post.body}
                />
              </Fragment>
            );
          }
        })}
      </div>
    );
  }

export default App;