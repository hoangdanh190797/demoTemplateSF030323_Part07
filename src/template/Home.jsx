import React from "react";
import bgOn from "../images/bg-desktop-dark.jpg";
import InputExtra from "../components/InputExtra";
import TableExtra from "../components/TableExtra";
import "./styles.scss";

export default function Home() {
  return (
    <div className="home">
      <img src={bgOn} alt="error" />
      <div className="content_parent">
        <div className="content_">
          <div className="header_">
            <h1>T O D O</h1>
          </div>
          <div className="input_">
            <InputExtra></InputExtra>
          </div>
          <div className="box_">
            <TableExtra></TableExtra>
          </div>
        </div>
      </div>

      <h2>Drag and drop to reorder list</h2>
    </div>
  );
}
