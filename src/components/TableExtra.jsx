import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectListData } from "../redux/slices/dataSlice";
import { getId, requesDele, requesComp, requesCompp } from "../redux/slices/dataSlice";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Button from "@mui/material/Button";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function TableExtra() {
  const { listContent } = useSelector(selectListData);

  const dispatch = useDispatch();

  console.log(listContent);

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log(checked);
    console.log(event.target.value);

    var idCurrent = event.target.value;
    dispatch(getId(idCurrent));
  };

  const handleDelete = () => {
    dispatch(requesDele());
  };

  const handleComplete = () => {
    dispatch(requesCompp());
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            {/* render data in here */}
            {listContent.map((item) => {
              return (
                <div key={""}>
                  <td style={{ color: "red" }}>
                    <FormControlLabel
                      label={item.content}
                      control={
                        <Checkbox
                          //   checked={checked}
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
                  </td>
                </div>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
