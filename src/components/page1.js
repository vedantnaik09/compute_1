import React from 'react'
import Navbar from './Navbar'

function page1() {
  return (
    <div style={{backgroundColor:"#8D5CF6",height:"100vh"}}>
        <Navbar></Navbar>
      <h1 className='text-white' style={{fontFamily:"Montserrat",textAlign:"center",marginTop:"25vh", fontSize:"5vh",fontWeight:"700",lineHeight:"8vh",letterSpacing:"0.2px"}}>HIGH QUALITY <br/> COURSES</h1>
      <h4 className='text-white text-center' style={{width:"30%", margin:"auto", fontSize:"2.5vh",marginBottom:"5vh",marginTop:"5vh"}}>Every day brings with it a fresh set of learning possibilities.</h4>
      <div style={{display:"flex",justifyContent:"center",}}>
      <button type="button" className="btn" style={{backgroundColor:"#ff7b52", color:"white",borderRadius:"5%", padding:"1vh",width:"12vw",fontSize:"2vh",height:"7vh",marginRight:"20px"}}><b>Get Quote Now</b></button>
      <button type="button" className="btn" style={{backgroundColor:"transparent", color:"white",borderRadius:"5%", padding:"1vh" ,border:"1px solid #ff7b52",width:"12vw",fontSize:"2vh",height:"7vh"}}><b>Learn More</b></button>
      </div>
      
    </div>
  )
}

export default page1
