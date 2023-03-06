import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//
//import API

const initialState = {
  idDefault: 2,
  idOn: 0,
  contentCurrent: {},
  listContent: [
    {
      id: 0,
      content: "test 1",
      active: true,
    },
    {
      id: 1,
      content: "test 2",
      active: true,
    },
  ],
  listActive: [],
};

// const addData = (state = initialState, action) =>{

// }

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
        active: true,
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
      let newL = [...state.listContent];
      for (let i = 0; i < newL.length; i++) {
        if (newL[i].id * 1 === state.idOn * 1) {
          newL[i].active = false;
        }
      }
      let obj = state.listContent.filter(
        (item) => item.id * 1 === state.idOn * 1
      );
      return {
        ...state,
        contentCurrent: obj,
        listContent: newL,
      };
    },
    requesCompp: (state, action) => {
      let idN = state.idOn * 1;
      let newLi = [...state.listContent];
      let objN = {}
      for (let i = 0; i <= newLi.length; i++) {
        if (idN === newLi[i].id) {
          newLi[i].active = false;
          objN = newLi[i]
        }
      }
      return {
        ...state,
        contentCurrent: objN,
        listContent: newLi,
      };
    },
  },
  extraReducers: "",
});

//export action const {} = dataSlice.actions
export const { getData, getId, requesDele, requesComp, requesCompp } = dataSilce.actions;

//export current data (new data)
export const selectData = (state) => state.todo.content;
//export list Data
export const selectListData = (state) => state.todo;

//push content in listContent (on)

//export dataSlice.reducer
export default dataSilce.reducer;
