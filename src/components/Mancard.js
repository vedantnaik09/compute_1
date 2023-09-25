import React from 'react'
import star from "../images_6/stars sec-.png"
function Mancard(props) {
  return (
    <div className='' style={{height:"fit-content",display:"inline-block"}}>
      <div className="card mancard" style={{}}>
  <img src={props.img} className="card-img-top" alt="..." style={{borderRadius:"50%",width:"7vw",margin:"auto", marginTop:"3%",marginBottom:"5%"}}/>
  <div className="card-body" style={{width:"60%",margin:"auto",textAlign:"center"}}>
    <p className="card-text" style={{fontSize:"1.8vh"}}>Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p> 
   </div>
   
    <img className='star' src={star} alt="" style={{}} />
    <div className="card-body" style={{width:"60%",margin:"auto",textAlign:"center"}}>
    <h6 className='my-3'><b>Regina Miles</b></h6>
    <p>Designer</p>
  </div>
 
</div>
    </div>
  )
}

export default Mancard
