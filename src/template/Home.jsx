import React from "react";
import InputExtra from "../components/InputExtra";
import TableExtra from "../components/TableExtra";
import Switcher from "../components/Switcher";
import "./styles.scss";
// import TestDarkMode from "../components/TestDarkMode";

export default function Home() {
  return (
    <>
      <div className="home dark:bg-white">
        <section className="bg-image-two dark:bg-image-one w-full h-2/6 bg-fixed flex flex-wrap"></section>
        <div className="content_parent">
          <div className="content_">
            <div className="header_">
              <h1 className=" dark:text-black">T O D O</h1>
              <Switcher
                style={{ width: "40px", height: "40px", marginTop: "20px" }}
              />
            </div>
            <div className="input_">
              <InputExtra></InputExtra>
            </div>
            <div className="box_ ">
              <TableExtra></TableExtra>
            </div>
            <div>
              <h2 className="">Drag and drop to reorder list</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
