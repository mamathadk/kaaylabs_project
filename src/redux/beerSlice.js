import { createSlice } from "@reduxjs/toolkit";

const beerData = createSlice({
  name: "beerData",
  initialState: {
    beers: [],
  },
  reducers: {
    FETCH_BEERS_SUCCESS: (state, action) => {
      state.beers = action.payload;
    },
  },
});

export default beerData.reducer;

export const { FETCH_BEERS_SUCCESS } = beerData.actions;
