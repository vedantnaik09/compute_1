import React from 'react'
import girl from '../images_4/thumb-concept.png'

function Page4() {
  return (
    <div
      style={{
        backgroundColor: "#26335D",
        height:"fit-content",
        fontFamily: "Montserrat",
        minHeight:""
      }}
    >
      <div className="container" style={{ paddingTop:"5%", width:"100%",paddingBottom:"10%" }}>
        <div className='girl-container' style={{}}>
        <img src={girl} className='img-girl' alt="" style={{}}/>
        <div className='container-4' style={{}}>
        <div className='my-3 red-bar' style={{}}></div>
        <h1 className="text-white" style={{ fontWeight: "700" , fontSize:"5vh",display:"inline-block"}}>
            Our Expert Teacher
        </h1>
          <p className="text-white my-4" style={{ fontWeight: "bold", fontSize:"1.5vh" }}>
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics{" "}
          </p>
          <h6 style={{fontSize: "2vh", fontWeight: "700" }}>
            <a href="/" style={{textDecoration:"none",color: "#8D5CF6"}}>Learn More {'>'}</a>
          </h6>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Page4
