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
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Button from "@mui/material/Button";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

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
    setChecked(event.target.checked);
    console.log(event.target.value);
    var idCurrent = event.target.value;
    dispatch(getId(idCurrent));
  };

  const handleDelete = () => {
    dispatch(requesDele());
  };

  const handleComplete = () => {
    dispatch(requesComp());
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
            <div key={item.id}>
              <div
                style={{
                  color: "hsl(234, 39%, 85%)",
                  height: "50px",
                  width: "100%",
                  borderStyle: "solid",
                  borderWidth: "0px 0px 0.5px 0px",
                }}
              >
                <FormControlLabel
                  label={item.content}
                  control={
                    <Checkbox
                      // checked={checked}
                      defaultChecked={false}
                      onChange={handleChange}
                      value={item.id}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                />
                <Button onClick={() => handleDelete()}>
                  <DeleteOutlinedIcon />
                </Button>
                <Button onClick={() => handleComplete()}>
                  <CheckCircleOutlineIcon />
                </Button>
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
            {` 2`}
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
