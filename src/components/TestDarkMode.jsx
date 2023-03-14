import React from "react";
import Switcher from "../components/Switcher";

export default function TestDarkMode() {
  return (
    <div style={{ height: "500px" }}>
      <Switcher />
      <section className="bg-image-one dark:bg-none bg-image-two w-full h-2/6 flex-wrap"></section>
    </div>
  );
}
