import React from 'react'
import Navbar from './Navbar'

function page1() {
  return (
    <div style={{backgroundColor:"#8D5CF6"}}>
        <Navbar></Navbar>
      <div className='pageTitle'>
      <h1 className='text-white title' style={{}}>HIGH QUALITY <br/> COURSES</h1>
      <h4 className='text-white text-center pg-1-body'>Every day brings with it a fresh set of learning possibilities.</h4>
      <div style={{display:"flex",justifyContent:"center",}}>
      <button type="button" className="btn btn-pg-1"><b>Get Quote Now</b></button>
      <button type="button" className="btn btn-pg-1" style={{backgroundColor:"transparent",borderRadius:"5%",border:"1px solid #ff7b52"}}><b>Learn More</b></button>
      </div>
      </div>     
    </div>
  )
}

export default page1
