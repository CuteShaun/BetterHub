import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

const querySlice = createSlice({
  name: "query",
  initialState,

  reducers: {
    resetQuery: (state) => {
      state.value = "";
    },
    update: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { update, resetQuery } = querySlice.actions;
export default querySlice.reducer;
