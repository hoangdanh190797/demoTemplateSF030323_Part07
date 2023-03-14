import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
//
//import API

const initialState = {
  isStatus: "All",
  idDefault: 5,
  idOn: 0,
  listContent: [
    {
      id: 0,
      content: "Complete Todo App on Frontend Mentor",
      status: "Active",
    },
    {
      id: 1,
      content: "Pick up groceries",
      status: "Active",
    },
    {
      id: 2,
      content: "Read for 1 hour",
      status: "Active",
    },
    {
      id: 3,
      content: "10 minites meditation",
      status: "Active",
    },
    {
      id: 4,
      content: "Jog around the park 3x",
      status: "Active",
    },
    {
      id: 5,
      content: "Completed online Javascript course",
      status: "Completed",
    },
  ],
  listActive: [],
  listCompleted: [],
};

console.log(initialState.listContent);

//export function AsyncThunk
export const dataSilce = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getData: (state, action) => {
      let nextId = state.idDefault + 1;
      let nextContent = {
        id: nextId,
        content: action.payload,
        status: "Active",
      };
      return {
        ...state,
        idDefault: nextId,
        listContent: [...state.listContent, nextContent],
      };
    },
    getId: (state, action) => {
      let currentId = action.payload;
      return {
        ...state,
        idOn: currentId,
      };
    },
    requesDele: (state, action) => {
      let idNeed = action.payload;
      let newList = state.listContent.filter(
        (item) => item.id * 1 !== idNeed * 1
      );
      return {
        ...state,
        listContent: newList,
      };
    },
    requesComp: (state, action) => {
      let idNeed = Number(state?.idOn) || 0;
      const newTodo = state.listContent.find((item) => {
        if (+item.id === idNeed) {
          item.status = "Completed";
        }
      });
    },
    sortActive: (state, action) => {
      let isStatusCurrent = action.payload;
      console.log(action.payload);
      const listActiveNew = state.listContent.filter(
        (item) => item.status === isStatusCurrent
      );
      console.log(current(state));
      return {
        ...state,
        listActive: listActiveNew,
      };
    },
    sortCompleted: (state, action) => {
      let isStatusCurrent = action.payload;
      console.log(action.payload);
      const listCompletedNew = state.listContent.filter(
        (item) => item.status === isStatusCurrent
      );
      console.log(current(state));
      return {
        ...state,
        listCompleted: listCompletedNew,
      };
    },
    clearData: (state, action) => {
      state.listContent = [];
    },
  },
  extraReducers: "",
});

//export action const {} = dataSlice.actions
export const {
  getData,
  getId,
  requesDele,
  requesComp,
  sortActive,
  sortCompleted,
  clearData,
} = dataSilce.actions;

//export current data (new data)
export const selectData = (state) => state.todo.content;

//export list Data
export const selectListData = (state) => state.todo;

//push content in listContent (on)

//export dataSlice.reducer
export default dataSilce.reducer;
