import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { getData } from "../redux/slices/dataSlice";
import TableExtra from "./TableExtra";

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
      <input
        {...register("data")}
        defaultValue="Create a new tode..."
      ></input>{" "}
      <input type="submit" value="Create" />
      <TableExtra></TableExtra>
    </form>
  );
}
