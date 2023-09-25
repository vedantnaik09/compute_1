import React from "react";
import facebook from "../images_7/facebook.png"
import insta from "../images_7/instagram.png"
import twitter from "../images_7/twitter.png"
function Teacher(props) {
  return (
    <div className="bookcard">
      <div className="card " style={{borderRadius:"20px"}}>
        <img
          src={props.img}
          className="card-img-top"
          alt="..."
          style={{
            width: "100%",
            margin: "auto",
            borderRadius:"20px 20px 0 0"
          }}
        />
        <div style={{width:"60%",margin:"auto",textAlign:"center"}}>
        <h6 className='my-3'><b>Julian Jameson</b></h6>
    <p style={{fontSize:"1.5vh",color:"#737373"}}><b>Profession</b></p>
    <div className='' style={{width:"fit-content",margin:"auto",maxHeight:"5vh", paddingBottom:"3vh"}}>
        
        <a className="mx-2" href="/"><img className="social-icons" src={facebook} alt="" /></a>
        <a className="mx-2" href="/"><img className="social-icons" src={insta} alt="" /></a>
        <a className="mx-2" href="/"><img className="social-icons" src={twitter} alt="" /></a>
    </div>
        </div>
      </div>
    </div>
  );
}

export default Teacher;
