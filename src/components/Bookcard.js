import React from 'react'
import ic1 from '../images_2/basket.png'
import ic2 from '../images_2/like.png'
import ic3 from '../images_2/like-1.png'


import sales from "../images_2/sales.png"
function Bookcard(props) {
  return (
    <div className='card bookcard' style={{}}>
    <div className='text-white sale' style={{}}><b>Sale</b></div>
    <img src={props.img} alt="" style={{width:"100%",padding:"0",height:"35vh"}}/>
    <div className='book-icon-div' style={{}}>
        
        <a className="mx-1 book-icons" href="/"><img src={ic1} alt="" /></a>
        <a className="mx-1 book-icons" href="/"><img src={ic2} alt="" /></a>
        <a className="mx-1 book-icons" href="/"><img src={ic3} alt="" /></a>
    </div>
    
      <div className='book-content' style={{margin:"2vh 0 0 1vw", width:"90%",}}>
        <div>
      <p className='my-2' style={{display:"inline-block",color:"#8D5CF6"}}><b>{props.heading}</b></p>
        <div className="text-white review" style={{}}><span style={{color:"yellow"}}>&#9733; </span>4.9</div></div>
        <p className='my-2' style={{}}><b>{props.title}</b></p>
      <p style={{}}>We focus on ergonomics and meeting you....</p>
      <img src={sales} alt="" style={{height:"2.8vh"}} />
      <p className='my-2' style={{}}><b><span style={{color:"#BDBDBD"}}>$16.48</span> <span style={{color:"#FF7B52"}}>$6.48</span></b></p>
      <button type="button" className="btn btn-primary learn-more" style={{}}><b>Learn More {'>'}</b> </button>
      </div>
    </div>
  )
}

export default Bookcard
