import React from "react";
import "../css/admissions.css";
import HeaderTitle from "../components/headerImage.js";

function App() {
    return(

        <div>
            <HeaderTitle name="Admission Procedure"/>
            <div className="content">
            <div className="container">
            <div className="row ">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="post-holder">
                    <div className="author-block">
                        <div className="author-content">
                            <div className="author-header p" >
                                <h5 className="author-title" style={{color:"#0a3dab"}}>Eligibility</h5>
                                <span align="justify"  >B.Tech / B.E (All Branches) <br/> Admissions are based on ranks obtained in the entrance exam called <font style={{color:"#0a3dab"}}> Graduate Aptitude Test (GAT).</font></span>
                            </div>

                      <div className="author-content">
                        <div className="author-header p">
                           <h5 className="author-title" style={{color:"#0a3dab"}}>Graduate Aptitude Test (GAT) will be conducted by CIHL in two ways:</h5><br/>
                                <span  align="justify"><b>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Walk-in Entrance – Candidates have the option to choose the date of
                                the exam.<br/><br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Regular GAT Entrance – Exam is conducted on a fixed date.</b>
                                <br/><br/>
                                <p>Due to the COVID-19 situation the Graduate Aptitude Test (GAT), both Walk-
                                in Entrance and Regular GAT Entrance are conducted online i.e. candidates can
                                take the test from home. Hence candidates can stay home and stay safe.</p>
                                
                                <p>Candidates can appear either for Walk-in OR Regular GAT Entrance OR both
                                tests. Before COVID-19 situation Candidates can appear for <font style={{color:"#0a3dab"}}>Walk-ins three times and
                                Regular GAT one time i.e, maximum 4 times.</font></p>
                                
                                <p>Due to the COVID-19 situation, Walk-in can be attempted one time and the
                                Regular GAT can be attempted one time, i.e. candidate can take the test for a
                                maximum of 2 times. The best of these two will be considered for the rankings.</p>
                                
                                <p>For every attempt a non-refundable amount of Rs.1000 has to be paid online by
                                Credit / Debit card or net banking from our website (www.msitprogram.net).</p>
                                
   </span>
   </div>
</div>

 {/* Table to show the dates for respective mode of examination with dates displayed. --> */}
                <div className="author-content">
                    <div className="author-header p">
                        <h5 className="author-title" style={{color:"#0a3dab"}}>Walk-in Entrance Test</h5>
                        <span align="justify" >Eligible candidates can apply online for walk-in Entrance Test <b><a href="http://msitprogram.net/admissions/" target="_blank">Aply here</a></b> from need to update 
   
                        <table width="70%"  align="center" cellpadding="10" cellspacing="5" >
                            <tr>
                                <td width="66%" height="25" align="left" valign="middle" bgcolor="#9edaf7">Due to the COVID-19 Situation</td>
                                <td width="66%" height="25" align="left" valign="middle" bgcolor="#9edaf7"></td>
                            </tr>
                            <tr>
                                <td width="66%" height="25" align="left" valign="middle" bgcolor="#9edaf7" >Walk-In Entrance GAT (online) starts on</td>
                                <td width="34%" height="25" align="center" valign="middle" bgcolor="#9edaf7" > 15<sup>th</sup> June 2020 </td>
                            </tr>
                            <tr>
                                <td width="66%" height="25" align="left" valign="middle" bgcolor="#9edaf7" >Walk-In Entrance GAT (online) ends on</td>
                                <td width="34%" height="25" align="center" valign="middle" bgcolor="#9edaf7" > 26<sup>th</sup> June 2020 </td>
                            </tr>
                        </table>
                
                {/* <!-- Links that can be navigable to their repective pages. --> */}
                <p> * Please find the URL that has instructions and process that need to be followed to take the exam.
                <a href="https://online.cbexams.com/RPS/MSIT/Default.aspx" target="_blank"><font style={{color:"#0a3dab"}}>https://online.cbexams.com/RPS/MSIT/Default.aspx"</font></a></p>
                <p> * Practice Tests :
                <a href="https://online.cbexams.com/RPS/MSIT/Practice_Instructions.aspx" target="_blank"><font style={{color:"#0a3dab"}}>https://online.cbexams.com/RPS/MSIT/Practice_Instructions.aspx"</font></a></p>
                  
                        </span>
                    </div>
                </div>

                {/* <!-- Table to show the dates and deadline to submit application form. --> */}
                <div className="author-header p">
                        <h5 className="author-title" style={{color:"#0a3dab"}}>Regular GAT</h5>
                        <span align="justify" >Regular Entrance Test is conducted from Candidates can apply for this test online <a href="http://msitprogram.net/admissions/" target="_blank"> Apply</a>
                        <table width="70%" border="0" align="center" cellpadding="10" cellspacing="5" >
                            <tr>
                                <td width="66%" height="25" align="left" valign="middle" bgcolor="#9edaf7">Last date for applying for Regular GAT Entrance(online)</td>
                                <td width="34%" height="25" align="center" valign="middle" bgcolor="#9edaf7">15<sup>th</sup> June 2020</td>
                            </tr>
                            <tr>
                                <td width="66%" height="25" align="left" valign="middle" bgcolor="#9edaf7">Regular GAT Entrance (online) Examination is conducted on</td>
                                <td width="34%" height="25" align="center" valign="middle" bgcolor="#9edaf7"> 28<sup>th</sup> June 2020 </td>
                            </tr>
                        </table>
                        </span>
                </div>
                </div>

                <div className="author-header p">
                        <h5 className="author-title" style={{color:"#0a3dab"}}>Entrance test waived</h5>
                        <span align="justify" ><b>GRE:</b> Candidates who have taken the GRE after 2019 are exempted from the entrance test (GAT) if they have a score of update GRE score</span>
                </div>
                </div>

                <div className="author-header p">
                    <h5 className="author-title" style={{color:"#0a3dab"}}>Allotment of Learning Center</h5><br/>
                                 
                    <span align="justify" > Admissions are based on ranks obtained in the entrance test. In the MSIT
                  Counseling 2020, candidates would be asked to select learning centers and the
                  seats are allotted in the order of their rank. Candidates admitted into IIITH &amp;
                  JNTUH will be given direct admission into MSIT main program. Candidates
                  admitted into JNTUK, JNTUA &amp; SVU have to undergo a 4-week preparatory
                  program. After the successful completion of the preparatory program, they will be
                  admitted into the MSIT main program.</span>
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