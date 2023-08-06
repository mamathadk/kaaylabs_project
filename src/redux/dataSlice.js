// src/redux/dataSlice.js
import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    items: [], // Array to store the fetched data
    page: 1, // Current page number
    pageSize: 10, // Number of items per page
    isLoading: false, // Loading state
    error: null, // Error state
  },
  reducers: {
    fetchDataStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    fetchDataFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure, setPage } =
  dataSlice.actions;

export default dataSlice.reducer;
