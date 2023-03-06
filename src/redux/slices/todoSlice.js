import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.json"

console.log(data);

const initialState = {
  data: [{ id: "", content: "" }],
  error:""
};

export const getContent = createAsyncThunk("todo/getContent", async (dataa) => {
    try {
        console.log(dataa);
    } catch (error) {
        throw(error)
    }
}) 

export const todoSlice = createSlice({
  name: "todoTest",
  initialState,
  reducers: {
    todoAdd (state, action){
        state.push(action.payload)
    }

  },
  extraReducers: (builder) => {
    builder.addCase(getContent.pending, (state, action) => {
      return { ...state, error: "" };
    });
    builder.addCase(getContent.fulfilled, (state, action) => {
      return { ...state, error: "", data: action.payload };
    });
    builder.addCase(getContent.rejected, (state, action) => {
      return { ...state, error: action.error.message };
    });
  },
});

// Action creators are generated for each case reducer function
export const { } = todoSlice.actions;

export default todoSlice.reducer;
