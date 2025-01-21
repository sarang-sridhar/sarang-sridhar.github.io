import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
          <Route
            path="/Agentic_Agenda_Setting"
            element={
              <div style={{ height: "100vh" }}>
                <iframe
                  src="/AGENTAGENDASETTING.pdf"
                  title="Towards a Real-time Clinical Agenda Setting System for Enhancing Clinical Interactions in Primary Care Visits
"
                  style={{ width: "100%", height: "100%", border: "none" }}
                />
              </div>
            }
          />
          <Route
            path="/AAAIworkshop2025"
            element={
              <div style={{ height: "100vh" }}>
                <iframe
                  src="/AAAIworkshop2025.pdf"
                  title="Towards a Real-time Clinical Agenda Setting System for Enhancing Clinical Interactions in Primary Care Visits
"
                  style={{ width: "100%", height: "100%", border: "none" }}
                />
              </div>
            }
          />
        </Routes>
        <Route
            path="/transcript"
            element={
              <div style={{ height: "100vh" }}>
                <iframe
                  src="/transcript.pdf"
                  title="transcript
"
                  style={{ width: "100%", height: "100%", border: "none" }}
                />
              </div>
            }
          />
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
