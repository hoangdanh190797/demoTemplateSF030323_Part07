import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import getContent from '../redux/slices/todoSlice'

export default function Box() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (dataa) => {
    dispatch(getContent(dataa))
  }
  
  return (
    <div>
      <div>
        {/* 1 button
                1 input (textfiel) */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input defaultValue="test" {...register("example")} />

          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("exampleRequired", { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </div>
      <div>{/* Table */}</div>
    </div>
  );
}
