import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {BrowserRouter as Router,Routes,Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Router>
        <Navbar title="TextAnalyzer" aboutText="About TextAnalyzer" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
        <Route exact path="/" element={<TextForm heading="Enter the test to analyze below:" mode={mode} showAlert={showAlert} />} />
        <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
