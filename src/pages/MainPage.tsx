import React from "react";
import "./mainPage.css"
import "./Components/SocialMediaButtons"
import SocialMediaButtons from "./Components/SocialMediaButtons";

const MainPage = () => {
  return (
    <div className="container">
    <div className = "introduction">
      <h2>Hello,</h2>
      <h1 style={{ fontSize: "96 px", fontWeight: "bold" }} >I'm Bonnie Chen</h1>
      <h3>
        A Computer Science student passionate about software, <br />
        security, and AI
      </h3>
      <SocialMediaButtons/>
    </div>
    </div>
  );
};

export default MainPage;
