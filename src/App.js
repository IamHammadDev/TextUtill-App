import React, { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";
import Alert from "./Component/Alert";
import About from "./Component/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // All states
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  // Show Alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-info");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-secondary");
  };
  // ToggleMode
  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#23272F";
      showAlert("Dark mode has been enabled!", "success");
      // document.title = "TextUtil - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#FFFFFF";
      showAlert("Light mode has been enabled!", "success");
      // document.title = "TextUtil - Light Mode";
    }
  };

  return (
    <>
      {/* <Navbar title='TextUtil' aboutText='About Us'/> */}
      {/* <Navbar/> */}
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-2">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="TextUtils - Word counter - Character counter - Text copier"
                  mode={mode}
                />
              }
            />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
