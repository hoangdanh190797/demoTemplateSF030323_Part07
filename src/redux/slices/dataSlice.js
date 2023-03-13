import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
//
//import API

const initialState = {
  isStatus: "All",
  idDefault: 1,
  idOn: 0,
  listContent: [
    {
      id: 0,
      content: "test 1",
      status: "Active",
    },
    {
      id: 1,
      content: "test 2",
      status: "Active",
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
      let idNeed = state.idOn * 1;
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
