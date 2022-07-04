import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

const querySlice = createSlice({
  name: "query",
  initialState,

  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { update } = querySlice.actions;
export default querySlice.reducer;
