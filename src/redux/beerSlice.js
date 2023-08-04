import { createSlice } from "@reduxjs/toolkit";

const beerData = createSlice({
  name: "beerData",
  initialState: {
    beers: [],
    filters: {
      brewed_before: "",
      brewed_after: "",
    },
  },
  reducers: {
    FETCH_BEERS_SUCCESS: (state, action) => {
      state.beers = action.payload;
    },
    SET_FILTERS: (state, action) => {
      //state.filters = action.payload;
      let beerValue = action.payload;
      state.filters.brewed_before = beerValue.brewed_before;
      state.filters.brewed_after = beerValue.brewed_after;
    },
  },
});

export default beerData.reducer;

export const { SET_FILTERS, FETCH_BEERS_SUCCESS } = beerData.actions;
