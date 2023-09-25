import React from "react";
import Teachercard from "./teachercard";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";
import card4 from "../images/card4.png";
function Page2() {
  return (
    <div
      style={{
        backgroundColor: "#26335D",

        fontFamily: "Montserrat",
      }}
    >
      <div className="container container-2" style={{ width: "65vw" }}>
        <div style={{ paddingTop: "10%" }}>
          <h6 className="page-2-body">Practice Advice</h6>
          <h1 className="text-white title-2">Our Expert Teachers</h1>
          <p className="text-white my-4 page-2-body">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
      </div>
      <div
        className="teacher-container"
        style={{}}
      >
        <div className="teachercard " style={{}}><Teachercard bottom={false} image={card1} title="Books Liberary" theme={true}/></div>
        <div className="teachercard teacher-down" style={{}}><Teachercard bottom={true} image={card2} title="Certified Teacher" theme={true}/></div>
        <div className="teachercard " style={{}}><Teachercard bottom={false} image={card3} title="Training Courses" theme={false}/></div>
        <div className="teachercard teacher-down" style={{}}><Teachercard bottom={true} image={card4} title="2,769 online courses" theme={true}/></div>      
      </div>
    </div>
  );
}

export default Page2;
// {
//   /* <div style={{height:"50%"}}>
//             <div className="" style={{position:"absolute"}}>
//               <Teachercard bottom={false} image={card1} title="Books Liberary" theme={true}></Teachercard>
//             </div>
//             <div className="" style={{position:"absolute"}}>
//               <Teachercard bottom={true} image={card2} title="Certified Teacher" theme={true}></Teachercard>
//             </div>
//             <div className="" style={{position:"absolute"}}>
//               <Teachercard bottom={false} image={card3} title="Training Courses" theme={false}></Teachercard>
//             </div>
//             <div className="" style={{position:"absolute"}}>
//               <Teachercard bottom={true} image={card4} title="2,769 online courses" theme={true}></Teachercard>
//             </div>            
//             </div> */
// }
