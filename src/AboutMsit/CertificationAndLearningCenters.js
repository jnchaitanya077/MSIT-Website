import React from "react";
import HeaderTitle from "../components/headerImage.js"

import "../css/Certification.css";

function App() {
  return (

    <div>
      {/* Header Title */}
      <HeaderTitle name = "Certification &Learning Centers"/>

        &nbsp;
        &nbsp;
        {/* <!-- blog-single  --> */}

        <div className="container Justify-content-center">
        <div className="row profile-row">

            {/* <!-- text column--> */}
            
            <div className="col-12" id ="para">
              <div className="col news" style={{height:"auto",paddingBottom:"3%"}}>
                <h3>Certification</h3>
                <p>MSIT is a 2 year Postgraduate program offered by a consortium of universities. Each university offers the course in its learning centers with the state of the art infrastructure and similar content. Students get admitted into the programme based on their scores in the entrance exam GAT. After completion of the course for two years the host university awards the degrees. For example, if a student belongs to JNTUH, JNTUH would award the Master’s degree and similarly if it is IIIT-H, IIIT-H University would award the MSIT degree.</p>
              </div>


              <div className="col news" style={{height:"auto",paddingBottom:"3%"}}>
                <h3>Learning Centers</h3>
                <p>The Learning Centers where this programme is being offered are shown below in the table along with the progammes that they offer and the number of seats available.</p>
                  
                <table>
                  <tr style={{backgroundColor: "#757070", color: "white"}}>
                    <th>Sl. No</th>
                    <th><h4>Learning Center</h4></th>
                    <th><h4>University</h4></th>
                    <th><h4>Intake</h4></th>
                  </tr>

                  <tr>
                    <th>1</th>
                    <th><a href="#section1">MSIT division, International Institute of Information Technology (IIIT)</a></th>
                    <th>IIIT is a deemed University at Gachibowli, Hyderabad, Telangana</th>
                    <th>110</th>
                  </tr>

                  <tr>
                    <th>2</th>
                    <th><a href="#section2">School of Information Technology, JNTU, Kukatpally</a></th>
                    <th>Jawaharlal Nehru Technological University, Hyderabad, Telangana</th>
                    <th>100</th>
                  </tr>

                  <tr>
                    <th>3</th>
                    <th><a href="#section3">JNTU Kakinada</a></th>
                    <th>Jawaharlal Nehru Technological University Kakinada, Andhra Pradesh</th>
                    <th>50</th>
                  </tr>

                  <tr>
                    <th>4</th>
                    <th><a href="#section4">JNTU Anantapur</a></th>
                    <th>Jawaharlal Nehru Technological University Anantapur, Andhra Pradesh</th>
                    <th>50</th>
                  </tr>

                  <tr>
                    <th>5</th>
                    <th><a href="#section5">SV University Tirupati</a></th>
                    <th>Sri Venkateswara University Tirupati, Andhra Pradesh</th>
                    <th>50</th>
                  </tr>
                        
                </table>
              </div>


              <h1 style={{marginBottom: "40px", marginTop: "60px"}}>Want to know something about Universities ? Go ahead </h1>


              <div className="col news" style={{height:"auto",paddingBottom:"3%"}}>
                <h3 id = "section1">IIIT - Hyderabad</h3> 
                <p>IIIT, Hyderabad has been established in 1998. Ever since its inception it has achieved remarkable goals and contributed significantly to R&D. IIIT has a sprawling campus of 62 acres and is located in Gachibowli. Some of the most renowned seats of learning like ISB, HCU are located in a radius of 4 km from IIIT. IIIT has various tie-ups with national and internationals institutes. These include Carnegie Mellon University, Massachusetts Institute of Technology, University of Pennsylvania, University of Washington to name a few. In IIIT there are various research centers that are autonomous, yet working in concert with each other. The major research centers at IIIT are in the areas of Bio Informatics, Computer Vision, Data Engineering, Language Technologies and Robotics. MSIT programme was started in IIIT in 2001 and batches were inducted in 2002 - 2004.
                visit us <a href = "https://iith.ac.in/"> <span >Here</span></a></p>
                <div className="jumbotron jumbotron-fluid" style = {{height: "50px", width: "400px" ,padding:"1%"}}>
                  <div className="container">
                    <a href="https://www.iiit.ac.in/academics/msit/" target="_blank" className="blink" style={{color: "rgb(6, 44, 59)", fontWeight: "bolder", fontSize: "larger"}}>Know More About IIIT-Hyderabad</a>
                  </div>
                </div> 
              </div>  


              <div className="col news" style={{height:"auto",paddingBottom:"3%"}}> 
                <h3 id = "section2">JNTU - Hyderabad</h3>    
                <p>Under a broad policy framework of providing new technological education required for the industrial growth of the country in general and more particularly for the State of Andhra Pradesh, "Jawaharlal Nehru Technological University" was established on 2nd October, 1972, by an act of State Legislature. On its formation, the Government Engineering Colleges at Anantapur, Kakinada and Hyderabad, became its Constituent Colleges. The first two colleges were established in 1946 and last one in 1965. MSIT Programme is offered in the School of IT in the University campus in Kukatpally, Hyderabad. This programme was started in JNTU in 2001. MSIT center in the School of IT has state of the art Infrastructure. The Lab is open 24x7x365 with a 2 MBPS Internet Connection and the labs are designed to provide an environment that matches the very best in the field. There are labs exclusively earmarked for MSIT students at JNTU.
                visit us <a href = "http://jntuh.ac.in"> <span >Here</span></a></p>
                <div className="jumbotron jumbotron-fluid" style = {{height: "50px", width: "400px" ,padding:"1%"}}>
                  <div className="container">
                    <a href="http://sit.jntuh.ac.in/cmu" target="_blank" className="blink" style={{color: "rgb(6, 44, 59)", fontWeight: "bolder", fontSize: "larger"}}>Know More About JNTU-Hyderabad</a>
                  </div>
                </div>
              </div>


              <div className="col news" style={{height:"auto",paddingBottom:"3%"}}>        
                <h3 id = "section3">JNTU - Kakinada</h3>    
                  <p>Jawaharlal Nehru Technological University (JNTU), Kakinada was set up in 1946 as a public university. JNTU, Kakinada at the time of its establishment was known as The College of Engineering, Visakhapatnam. It is located near the East Godavari district, north of the Indian state of Andhra Pradesh.
                  JNTU, Kakinada is one of the leading universities that majorly focus on the engineering domain. The university has been affiliated by the National Assessment and Accreditation Council (NAAC) of the University Grants Commission (UGC) with an "A" grade.
                  Visit us  <a href = "http://jntuk.edu.in/"> <span >Here</span></a></p>
                  <div className="jumbotron jumbotron-fluid" style = {{height: "50px", width: "400px" ,padding:"1%"}}>
                    <div className="container">
                      <a href="https://www.jntuk.edu.in/master-of-science-in-information-technology/" target="_blank" className="blink" style={{color: "rgb(6, 44, 59)", fontWeight: "bolder", fontSize: "larger"}}>Know More About JNTU-Kakinada</a>
                    </div>
                  </div>
              </div>


              <div className="col news" style={{height:"auto",paddingBottom:"3%"}}>
                <h3 id = "section4">JNTU - Anantapur</h3>    
                <p>JNT University Anantapur was established in 2008 through A.P. Govt. Act NO.30 and has started functioning from the 155 acre campus of one of its Constituent Colleges at Anantapur. Since its inception, JNTUA is committed to develop and nurture Technical Education System in the four districts of Rayalaseema viz., Anantapur, Chittoor, YSR, Kurnool districts and SPSR Nellore district by producing technical manpower of high quality comparable to the best in the world. The University is working towards the vision of producing quality technical graduates, competent teachers, scientists and leaders in the academics, research, industry and administration. University aims to be ranked among the top technological universities globally by virtue of the quality of its academic programs. JNT University Anantapur is a dream destination for those who wish to be the best in the domain of Technology and Management.
                Visit us  <a href = "http://jntua.ac.in"> <span >Here</span></a></p>
                <div className="jumbotron jumbotron-fluid" style = {{height: "50px", width: "400px" ,padding:"1%"}}>
                  <div className="container">
                    <a href="https://www.jntua.ac.in/" target="_blank" className="blink" style={{color: "rgb(6, 44, 59)", fontWeight: "bolder", fontSize: "larger"}}>Know More About JNTU-Anantapur</a>
                  </div>
                </div>
              </div>


              <div className="col news" style={{height:"auto",paddingBottom:"3%"}}>
                <h3 id = "section5">SV University,Tirupati</h3>    
                  <p>Sri Venkateswara University, Tirupati (SVU), is established in 1954 in the world famous holy temple town of Tirupati on the sprawling campus of 1000 acres. Teaching, research and extension activities in different subjects have been emphasized by the University right from its inception.
                  Visit us <a href = "https://svuniversity.edu.in/"> <span>Here</span></a></p>
                  <div className="jumbotron jumbotron-fluid" style = {{height: "50px", width: "400px" ,padding:"1%"}}>
                    <div className="container">
                      <a href=" https://www.svuniversity.edu.in/" target="_blank" className="blink" style={{color: "rgb(6, 44, 59)", fontWeight: "bolder", fontSize: "larger"}}>Know More About SV University</a>
                    </div>
                  </div>
              </div>
            </div>
            

        </div>
        </div>
        
    </div>

  );
}
export default App;

