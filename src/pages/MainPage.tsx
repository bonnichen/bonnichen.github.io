import React from "react";
import "./mainPage.css"
import "./Components/SocialMediaButtons"
import SocialMediaButtons from "./Components/SocialMediaButtons";
import ViewProjectButton from "./Components/ViewProjectButton";

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

      <div style={{ display: "flex", gap: "100px"}}>
      <SocialMediaButtons/>
      <ViewProjectButton/>
      </div>
    </div>
    </div>
  );
};

export default MainPage;
