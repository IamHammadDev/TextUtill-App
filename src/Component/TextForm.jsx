import React, { useState } from "react";

const TextForm = (props) => {
  const [Text, setText] = useState("");
  const handleUpClick = () => {
    // console.log("Clicked" + Text);
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase!", "success");
  };
  const handleClClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been Cleared!", "success");
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  };
  const handleOnChange = (e) => {
    // console.log("onChange");
    setText(e.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#23272F" : "#FFFFFF",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            onChange={handleOnChange}
            rows="8"
            value={Text}
          ></textarea>
        </div>
        <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button disabled={Text.length===0} className="btn btn-warning mx-1 my-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button disabled={Text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClClick}>
          Clear Text
        </button>
        <button disabled={Text.length===0} className="btn btn-success mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {
            Text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          } words and {Text.length} characters
        </p>
        <p>
          {0.008 *
            Text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length} Minutes to read
        </p>
        <h2>Preview</h2>
        <p>
          {Text.length > 0
            ? Text
            : "Nothing to preview."}
        </p>
      </div>
    </>
  );
};

export default TextForm;
