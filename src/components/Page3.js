import React from 'react'
import Bookcard from './Bookcard'
import card1 from '../images_2/card1.png'
import card2 from '../images_2/card2.png'
import card3 from '../images_2/card3.png'
import card4 from '../images_2/card4.png'
function Page3() {
  return (
    <div
      style={{
        backgroundColor: "#26335D",
        height:"",
        fontFamily: "Montserrat",
      }}
    >
      <div className="container container-3">
        <div style={{ paddingTop: "10%" }}>
          <h6 style={{ color: "#8D5CF6", fontSize: "2vh", fontWeight: "700" }}>
            Courses
          </h6>
          <h1 className="text-white" style={{ fontWeight: "700" , fontSize:"5vh"}}>
            Get Quality Education
          </h1>
          <p className="text-white my-4" style={{ fontWeight: "bold", fontSize:"1.5vh" }}>
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>               
      </div>
      <div
        className="book-container"
        style={{}}
      >
        <div className="" style={{height:"fit-content",width:"fit-content"}}><Bookcard img={card1} heading="Welcome" title="Books Liberary"/></div>
        <div className="" style={{}}><Bookcard img={card2} heading="Join Us" title="Books Liberary"/></div>
        <div className="" style={{}}><Bookcard img={card3} heading="For Better Future" title="Training Courses"/></div>
        <div className="" style={{}}><Bookcard img={card4} heading="Welcome" title="Books Liberary"/></div>      
      </div>
    </div>
  )
}

export default Page3
// {/* <div className="container" style={{paddingBottom:"150px",height:"fit-content"}}>
//       <div className="row" style={{height:"70vh",marginTop:"10vh"}}>
//       <div className="col">
//       <Bookcard img={card1} heading="Welcome" title="Books Liberary"></Bookcard>    
//         </div>
//       <div className="col">
//       <Bookcard img={card2} heading="Join Us" title="Books Liberary"></Bookcard>    
//         </div>
//       <div className="col">
//       <Bookcard img={card3} heading="For Better Future" title="Training Courses"></Bookcard>    
//         </div>
//       <div className="col">
//       <Bookcard img={card4} heading="Welcome" title="Books Liberary"></Bookcard>    
//         </div>
           
//         </div>
//     </div> */}