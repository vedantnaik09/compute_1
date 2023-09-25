import React from "react";
import Mancard from "./Mancard";
import man1 from "../images_6/man1.png"
import man2 from "../images_6/man2.png"


function Page6() {
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
          <h6 className="page-6-body" style={{ }}>
            Testimonials
          </h6>
          <h1
            className="text-white title-6"
            style={{  }}
          >
            Most Popular Courses
          </h1>
          <p
            className="text-white my-4 page-6-body"
            style={{}}
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
          style={{ height: "fit-content", marginTop: "10vh",width:"100%" }}
        >
          <div className="" style={{width:"fit-content",display:"inline-block"}}>
            <Mancard img={man1}></Mancard>
          </div>
          <div className="">
            <Mancard img={man2}></Mancard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page6;
