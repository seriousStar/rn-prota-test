import { createSlice } from "@reduxjs/toolkit";

const home = createSlice({
  name: "home",
  initialState: {
    nameListData: [],
    error: null,
  },
  reducers: {
    fetchNameListData: (state) => {
      state.nameListData = [];
    },
    fetchNameListDataSuccess: (state, { payload }) => {
      state.nameListData = [...payload];
    },
    fetchNameListDataFailure: (state, { payload }) => {
      state.nameListData = [];
      state.error = "No data stored on local storage";
    },
    addName: (state) => {},
    addNameSuccess: (state, { payload }) => {
      state.nameListData = payload;
    },
    addNameFailure: (state, { payload }) => {
      state.error = "Unable to add the new name. Please try again!";
    },
  },
});

export default home;
