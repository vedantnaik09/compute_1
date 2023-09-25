import React from 'react'


function teachercard(props) {
  return (
    <div className='card teacher-card-main' style={{backgroundColor: props.theme? "":"#8D5CF6" ,color: props.theme? "":"white"}}>
      <div className='teacher-card-content'>
      <img src={props.image} alt="" style={{height:"2rem", maxWidth:"100%"}}/>
      <p className='my-2' style={{}}><b>{props.title}</b></p>
      <div className='my-3' style={{width:"50px",height:"2px", backgroundColor: props.theme? "#E74040":"white"}}></div>
      <p style={{paddingBottom:"1rem"}}>The gradual accumulation of information about </p>
      </div>
    </div>
  )
}


export default teachercard
// position:"relative",bottom: props.bottom?'0':'',