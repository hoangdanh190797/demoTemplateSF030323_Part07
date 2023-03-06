import React from "react";
import bgOn from "../images/bg-desktop-dark.jpg";
import "./styles.scss";
import InputExtra from "../components/InputExtra";

export default function Home() {
  return (
    <div className="home">
      <div className="bgHome-top">
        <img src={bgOn} alt="error" />
        <InputExtra></InputExtra>
        <h1>Drag and drop to reorder list</h1>
      </div>
    </div>
  );
}
