import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";


import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';


const ResumeRedirect = () => {
  useEffect(() => {
    window.location.href = "/resume.pdf"; // Redirects to the actual PDF
  }, []);

  return null; // Render nothing
};

function AppContent({ load }) {
  const location = useLocation();
  // Define routes where you don't want the Navbar to appear
  const hideNavbarRoutes = ["/resume"];
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Preloader load={load} />
      {showNavbar && <Navbar /> }
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        {/* <Route path="/resume" element={<Resume />} /> */}
        <Route path="*" element={<Navigate to="/"/>} />
        <Route
          path="/Agentic_Agenda_Setting"
          element={
            <div style={{ height: "100vh" }}>
              <iframe
                src="/AGENTAGENDASETTING.pdf"
                title="Towards a Real-time Clinical Agenda Setting System for Enhancing Clinical Interactions in Primary Care Visits"
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
                title="Towards a Real-time Clinical Agenda Setting System for Enhancing Clinical Interactions in Primary Care Visits"
                style={{ width: "100%", height: "100%", border: "none" }}
              />
            </div>
          }
        />
        <Route
          path="/transcript"
          element={
            <div style={{ height: "100vh" }}>
              <iframe
                src="/transcript.pdf"
                title="Transcript"
                style={{ width: "100%", height: "100%", border: "none" }}
              />
            </div>
          }
        />
        

        <Route path="/resume" element={<ResumeRedirect />} />

      </Routes>
    </div>
  );
}

export default function App({ load }) {
  return (
    <Router>
      <AppContent load={load} />
    </Router>
  );
}