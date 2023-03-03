import React, { useState } from "react";
import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";

export default function Input() {
  const [value, setValue] = useState();
  console.log(value);
  return (
    <>
      <div style={{ backgroundColor: "gray" }}>
        <TextField
          id="outlined-basic"
          label="Test"
          onChange={(e) => console.log(e.target.value)}
          variant="outlined"
          value={value}
        />
      </div>
    </>
  );
}
