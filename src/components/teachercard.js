import React from 'react'


function teachercard(props) {
  return (
    <div className='card' style={{width:"14vw",height:"35vh",position:"absolute", bottom: props.bottom?'0':'',backgroundColor: props.theme? "":"#8D5CF6" ,color: props.theme? "":"white"}}>
      <div style={{margin:"4vh 0 0 2vw", width:"80%",}}>
      <img src={props.image} alt="" style={{height:"8vh ", maxWidth:"100%"}}/>
      <p className='my-2' style={{fontSize:"2vh"}}><b>{props.title}</b></p>
      <div className='my-3' style={{width:"50px",height:"2px", backgroundColor: props.theme? "#E74040":"white"}}></div>
      <p style={{fontSize:"1.8vh"}}>The gradual accumulation of information about </p>
      </div>
    </div>
  )
}


export default teachercard
