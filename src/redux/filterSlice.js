import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brewedBefore: null,
  brewedAfter: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterBrewedBefore: (state, action) => {
      state.brewedBefore = action.payload;
    },
    setFilterBrewedAfter: (state, action) => {
      state.brewedAfter = action.payload;
    },
  },
});

export const { setFilterBrewedBefore, setFilterBrewedAfter } =
  filterSlice.actions;
export default filterSlice.reducer;
