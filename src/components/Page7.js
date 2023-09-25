import React from 'react'
import Teacher from './teacher';
import teacher1 from "../images_7/user-cover-1.png"
import teacher2 from "../images_7/user-cover-2.png"
import teacher3 from "../images_7/user-cover-3.png"
import teacher4 from "../images_7/user-cover-4.png"

function Page7() {
  return (
    <div
      style={{
        backgroundColor: "#26335D",
        height: "fit-content",
        fontFamily: "Montserrat",
      }}
    >
      <div className="container">
        <div style={{ paddingTop: "10%" }}>
          <h6 className='page-6-body'>
            Team
          </h6>
          <h1
            className="text-white title-6"
            
          >
            Our Expert Teachers
          </h1>
          <p
            className="text-white my-4 page-6-body"
           
          >
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
      </div>
      <div
        className="container"
        style={{ paddingBottom: "150px", height: "fit-content" }}
      >
        <div
          className="book-container"
          style={{ height: "fit-content", marginTop: "15vh",width:"90%"}}
        >
          <div className="" >
            <Teacher img={teacher1} ></Teacher>
          </div>
          <div className="">
            <Teacher img={teacher2}></Teacher>
          </div>
          <div className="">
            <Teacher img={teacher3}></Teacher>
          </div>
          <div className="">
            <Teacher img={teacher4}></Teacher>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page7
