import { createSlice } from "@reduxjs/toolkit";

const InitialStateValue = "";

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: InitialStateValue },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;
