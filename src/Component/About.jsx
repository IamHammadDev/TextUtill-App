import React, { useState } from "react";

const About = (props) => {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#23272F",
    backgroundColor: props.mode === "dark" ? "#23272F" : "white",
    border: "2px solid",
    borderColor: props.mode === "dark" ? "white" : "#23272F",
  };
  let about = {
    color: props.mode === "dark" ? "white" : "black",
  };
  // const [btnText, setBtnText] = useState("Enable Dark Mode");
  // let toggleStyle = () => {
  //   if (myStyle.color === "black") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px solid white",
  //     });
  //     setBtnText("Enable Light Mode");
  //   } else {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   }
  // };

  return (
    <>
      <div className="container">
        <h1 className="my-3" style={about}>About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Analyze Your Text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Text analysis (TA) is a machine learning technique used to
                automatically extract valuable insights from unstructured text
                data. Companies use text analysis ...
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                All content (e.g. images, videos, music) on Pixabay can be used
                for free for commercial and noncommercial use across print and
                digital, except in the cases mentioned in "What is not allowed".
                Attribution is not required. Giving credit to the artist or
                Pixabay is not necessary but is always appreciated by our
                community.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Get answers faster than ever. Chrome is a fast, secure browser
                for all your devices. Add apps, extensions, and themes to
                personalize your Chrome browser. Install Now. One browser, all
                devices. Type less with autofill. Designed to keep you safe
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container my-3">
          <button
            type="button"
            className="btn btn-warning"
            onClick={toggleStyle}
          >
            {btnText}
          </button>
        </div> */}
      </div>
    </>
  );
};

export default About;
