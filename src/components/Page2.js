import React from "react";
import Teachercard from "./teachercard";
import card1 from '../images/card1.png'
import card2 from '../images/card2.png'
import card3 from '../images/card3.png'
import card4 from '../images/card4.png'
function Page2() {
  return (
    <div
      style={{
        backgroundColor: "#26335D",
        
        fontFamily: "Montserrat",
      }}
    >
      <div className="container">
        <div style={{ paddingTop: "10%" }}>
          <h6 style={{ color: "#8D5CF6", fontSize: "2vh", fontWeight: "700" }}>
            Practice Advice
          </h6>
          <h1 className="text-white" style={{ fontWeight: "700" , fontSize:"5vh"}}>
            Our Expert Teachers
          </h1>
          <p className="text-white my-4" style={{ fontWeight: "bold", fontSize:"1.5vh" }}>
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>               
      </div>
      <div className="container" style={{paddingBottom:"150px"}}>
      <div class="row" style={{height:"45vh",marginTop:"10vh"}}>
            <div class="col" style={{position:"relative"}}>
              <Teachercard bottom={false} image={card1} title="Books Liberary" theme={true}></Teachercard>
            </div>
            <div class="col" style={{position:"relative"}}>
              <Teachercard bottom={true} image={card2} title="Certified Teacher" theme={true}></Teachercard>
            </div>
            <div class="col" style={{position:"relative"}}>
              <Teachercard bottom={false} image={card3} title="Training Courses" theme={false}></Teachercard>
            </div>
            <div class="col" style={{position:"relative"}}>
              <Teachercard bottom={true} image={card4} title="2,769 online courses" theme={true}></Teachercard>
            </div>            
          </div>
          </div>
    </div>
  );
}

export default Page2;
