import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getId,
  requesDele,
  requesComp,
  sortActive,
  sortCompleted,
  clearData,
} from "../redux/slices/dataSlice";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ClearIcon from "@mui/icons-material/Clear";

export default function TableExtra() {
  const dispatch = useDispatch();

  const listContent = useSelector((state) => state.todo.listContent);
  const listActive = useSelector((state) => state.todo.listActive);
  const listCompleted = useSelector((state) => state.todo.listCompleted);
  const isStatus = useSelector((state) => state.todo.isStatus);

  const [isContentRender, setContentRender] = useState(listContent);
  const [isStatusCurrent, setStatusCurrent] = useState("All");

  console.log(isStatus);
  console.log(listContent);

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    let idCurrent = event.target.value;
    setChecked(event.target.checked);
    dispatch(getId(idCurrent));
    if (event.target.checked) {
      dispatch(requesComp());
    }
    console.log(event.target.value);
    console.log(event.target.checked);
  };

  const handleChangeDelete = (event) => {
    let idCurrent = event.target.value;
    dispatch(requesDele(idCurrent));
  };

  useEffect(() => {
    if (isStatusCurrent === "All") {
      setContentRender(listContent);
    }
    if (isStatusCurrent === "Active") {
      setContentRender(listActive);
    }
    if (isStatusCurrent === "Completed") {
      setContentRender(listCompleted);
    }
    if (isStatusCurrent === "Clear") {
      setContentRender(listContent);
    }
  });

  const handleAll = () => {
    setStatusCurrent("All");
  };

  const handleActive = () => {
    dispatch(sortActive("Active"));
    setStatusCurrent("Active");
  };

  const handleCompeleted = () => {
    dispatch(sortCompleted("Completed"));
    setStatusCurrent("Completed");
  };

  const handleClear = () => {
    dispatch(clearData("Active"));
    setStatusCurrent("Clear");
  };

  return (
    <div>
      {/* render data in here */}
      {isContentRender &&
        isContentRender.map((item) => {
          return (
            <div key={item.id} className='dark:bg-white'>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    color: "hsl(234, 39%, 85%)",
                    height: "50px",
                    width: "100%",
                    borderStyle: "solid",
                    borderWidth: "0px 0px 0.5px 0px",
                  }}
                >
                  <div className="dark: text-black">
                    <FormControlLabel
                      label={item.content}
                      control={
                        <Checkbox
                          // checked={checked}
                          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                          icon={<CheckCircleOutlineIcon />}
                          defaultChecked={false}
                          onChange={handleChange}
                          value={item.id}
                          inputProps={{ "aria-label": "controlled" }}
                        />
                      }
                    />
                  </div>
                </div>
                <FormControlLabel
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                  control={
                    <Checkbox
                      // checked={checked}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                      icon={<ClearIcon />}
                      defaultChecked={false}
                      onChange={handleChangeDelete}
                      value={item.id}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                />
              </div>
            </div>
          );
        })}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <div>
          <span
            style={{
              color: "hsl(233, 14%, 35%)",
            }}
          >
            {" "}
            {` 6`}
          </span>
          <span
            style={{
              color: "hsl(233, 14%, 35%)",
            }}
          >
            {" "}
            items left
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <button
              style={{
                border: "none",
                backgroundColor: "hsl(237deg 22% 19%)",
                color: "hsl(233, 14%, 35%)",
              }}
              onClick={() => handleAll()}
            >
              All
            </button>
          </div>
          <div>
            <button
              style={{
                border: "none",
                backgroundColor: "hsl(237deg 22% 19%)",
                color: "hsl(233, 14%, 35%)",
              }}
              onClick={() => handleActive()}
            >
              Active
            </button>
          </div>
          <div>
            <button
              style={{
                border: "none",
                backgroundColor: "hsl(237deg 22% 19%)",
                color: "hsl(233, 14%, 35%)",
              }}
              onClick={() => handleCompeleted()}
            >
              Completed
            </button>
          </div>
        </div>
        <div>
          <button
            style={{
              border: "none",
              backgroundColor: "hsl(237deg 22% 19%)",
              color: "hsl(233, 14%, 35%)",
            }}
            onClick={() => handleClear()}
          >
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  );
}
