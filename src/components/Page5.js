import React from "react";
import video from "../images_5/video.png";
import play from "../images_5/play.png";

function Page5() {
  return (
    <div style={{
      backgroundColor: "#26335D",
      fontFamily: "Montserrat",
      height:""
    }}>
      <div className="container-5 container ">
        <div className="pg-5-body">
        <div
            className="red-bar-5"
            style={{ }}
          ></div>
          <h1
            className="text-white py-4"
            style={{fontWeight: "700",fontSize: "5vh",display: "inline-block",
            }}
          >
            Every Client Matters
          </h1>
          <p
            className="text-white body-5"
            style={{ fontWeight: "bold", fontSize: "1.5vh", width: "70%" ,}}
          >
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics{" "}
          </p>
          <h6 className="py-4" style={{ fontSize: "2vh", fontWeight: "700" ,margin:"auto"}}>
            <a href="/" style={{ textDecoration: "none", color: "#8D5CF6" }}>
              Learn More {">"}
            </a>
          </h6>
        </div>
        <div className="img-div" style={{}}>
        <img
            src={play}
            alt=""
            style={{position: "absolute",top: "50%",left: "50%",transform: "translate(-50%, -50%)",WebkitTransform: "translate(-50%, -50%)",
            }}
          />
          <img
            src={video}
            alt=""
            style={{display: "inline-block",maxWidth: "100%",borderRadius: "20px",height: "40vh",verticalAlign:"top"
            }}
          />
        </div>
      </div>
      
    </div>
  );
}

export default Page5;
// {/* <div
//       style={{
//         backgroundColor: "#26335D",
//         height: "fit-content",
//         fontFamily: "Montserrat",
//         minHeight: "",
//       }}
//     >
//       <div
//         className="container"
//         style={{paddingTop: "15%",width: "60%",paddingBottom: "15%",
//         }}
//       >
//         <div
//           style={{display: "inline-block",width: "50%",verticalAlign: "middle",maxWidth: "50%",
//           }}
//         >
//           <div
//             className="my-3"
//             style={{ width: "94px", height: "7px", backgroundColor: "#E74040" }}
//           ></div>
//           <h1
//             className="text-white my-2"
//             style={{fontWeight: "700",fontSize: "5vh",display: "inline-block",
//             }}
//           >
//             Every Client Matters
//           </h1>
//           <p
//             className="text-white my-4"
//             style={{ fontWeight: "bold", fontSize: "1.5vh", width: "70%" }}
//           >
//             Problems trying to resolve the conflict between <br /> the two major
//             realms of Classical physics: Newtonian mechanics{" "}
//           </p>
//           <h6 className="my-5" style={{ fontSize: "2vh", fontWeight: "700" }}>
//             <a href="/" style={{ textDecoration: "none", color: "#8D5CF6" }}>
//               Learn More {">"}
//             </a>
//           </h6>
//         </div>
//         <div
//           style={{height: "fit-content",display: "block",float: "right",position: "relative",
//           }}
//         >
//           <img
//             src={play}
//             alt=""
//             style={{position: "absolute",top: "50%",left: "50%",transform: "translate(-50%, -50%)",WebkitTransform: "translate(-50%, -50%)",
//             }}
//           />
//           <img
//             src={video}
//             alt=""
//             style={{display: "inline-block",maxWidth: "100%",borderRadius: "20px",height: "40vh",
//             }}
//           />
//         </div>
//       </div>
//     </div> */}