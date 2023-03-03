import React from "react";
import bgOn from "../images/bg-desktop-dark.jpg";
import "./styles.scss";
import Input from "../components/Input";
import Table from "../components/Table";
import Box from "../components/Box";
import Icon from "@mui/material/Icon";

export default function Home() {
  return (
    <div className="home">
      <div className="bgHome-top">
        <img src={bgOn} alt="error" />
        <Input></Input>
        <Table></Table>
        <Box></Box>
        <h1>Drag and drop to reorder list</h1>
      </div>
    </div>
  );
}
