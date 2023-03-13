import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { getData } from "../redux/slices/dataSlice";

export default function InputExtra() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ data }) => {
    dispatch(getData(data));
  };
  //   console.log(watch("ex"));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        style={{ backgroundColor: "hsl(235, 24%, 19%)", display:'flex'}}
      >
        <input
          style={{
            backgroundColor: "hsl(235, 24%, 19%)",
            marginBottom: "30px",
            margin:'20px 20px'
          }}
          type="submit"
          value="+"
        />
        <input
          style={{
            height: "40px",
            width: "80%",
            color: "hsl(0, 0%, 98%)",
            margin:'10px 10px',
            backgroundColor: "hsl(235, 24%, 19%)",
          }}
          {...register("data")}
          defaultValue="Create a new todo..."
        ></input>{" "}
      </div>
    </form>
  );
}
