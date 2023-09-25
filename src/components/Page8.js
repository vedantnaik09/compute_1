import React from "react";
import call from "../images_8/Vector.png";
import map from "../images_8/Vector-1.png";
import mail from "../images_8/Vector-2.png";

function Page8() {
  return (
    <div
      style={{
        backgroundColor: "#26335D",
        height: "",
        fontFamily: "Montserrat",
        textAlign: "center",
      }}
    >
      <div className="container">
        <div style={{ paddingTop: "10%" }}>
          <h6 className="page-6-body">
            Newsletter
          </h6>
          <h1
            className="text-white title-6"
          >
            Get Quality Education
          </h1>
          <p
            className="text-white my-4 page-6-body"
          >
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
      </div>
      <div className="mb-3" style={{ marginTop: "13vh" }}>
        <form action="">
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Your Email"
            style={{
              width: "40%",
              display: "inline-block",
              borderRadius: "0",
              height: "7vh",
            }}
          />
          <button
            type="button"
            className="btn btn-primary"
            style={{
              borderRadius: "0",
              height: "7vh",
              backgroundColor: "#8D5CF6",
            }}
          >
            Subscribe
          </button>
        </form>
      </div>
      <div
        className="container"
        style={{ paddingBottom: "150px", height: "fit-content" }}
      ></div>
      <footer style={{ paddingBottom: "45px" }}>
        <table
          className="text-white"
          style={{ margin: "auto", textAlign: "left", paddingBottom: "25px" }}
        >
          <tbody>
          <tr>
            <th>Company Info</th>
            <th>Legal</th>
            <th>Features</th>
            <th>Resources</th>
            <th>Get In Touch</th>
          </tr>
          <tr>
            <td>
              <a href="/">About Us</a>
            </td>
            <td>
              <a href="/">About Us</a>
            </td>
            <td>
              <a href="/">Business Marketing</a>
            </td>
            <td>
              <a href="/">IOS & Android</a>
            </td>
            <td>
              <a href="/">
                <img src={call} alt="" /> {"(480)"} 555-0103
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/">Carrier</a>
            </td>
            <td>
              <a href="/">Carrier</a>
            </td>
            <td>
              <a href="/">User Analytic</a>
            </td>
            <td>
              <a href="/">Watch a Demo</a>
            </td>
            <td rowSpan={2}>
              <a href="/">
                <div
                  style={{
                    display: "flex",
                    alignSelf: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={map} alt="" style={{ display: "inline-block" }} />{" "}
                  <div style={{ display: "inline-block" }}>
                    4517 Washington Ave. Manchester, <br />
                    Kentucky 39495
                  </div>
                </div>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/">We are Hiring</a>
            </td>
            <td>
              <a href="/">We are Hiring</a>
            </td>
            <td>
              <a href="/">Live Chat</a>
            </td>
            <td>
              <a href="/">Customers</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/">Blog</a>
            </td>
            <td>
              <a href="/">Blog</a>
            </td>
            <td>
              <a href="/">Unlimited Support</a>
            </td>
            <td>
              <a href="/">API</a>
            </td>
            <td rowSpan={2}>
              <a href="/">
                <img src={mail} alt="" /> compute@example.com
              </a>
            </td>
          </tr>
          </tbody>
        </table>
      </footer>
    </div>
  );
}

export default Page8;
