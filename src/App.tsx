import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./pages/MainPage";
import AboutMe from "./pages/AboutMe";
import Computer from "./pages/Components/computer";
import "./index.css";
function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
    <Computer/>
    <MainPage/>
    <AboutMe/>
    </div>
  );
}

export default App;
