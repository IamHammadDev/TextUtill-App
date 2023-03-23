import React, { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";
import Alert from "./Component/Alert";
import About from "./Component/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

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
  // ToggleMode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#23272F";
      showAlert("Dark mode has been enabled!", "success");
      document.title = "TextUtil - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#FFFFFF";
      showAlert("Light mode has been enabled!", "success");
      document.title = "TextUtil - Light Mode";
    }
  };

  return (
    <>
      {/* <Navbar title='TextUtil' aboutText='About Us'/> */}
      {/* <Navbar/> */}
      <BrowserRouter>
        <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-2">
          <Routes>
            <Route exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze"
                  mode={mode}
                />
              }
            />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
