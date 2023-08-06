import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import DataSlice from "./redux/beerSlice";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import filterSlice from "./redux/filterSlice";
import dataSlice from "./redux/dataSlice";
import Pagination from "./components/Pagination";

const store = configureStore({
  reducer: {
    dataReducer: DataSlice,
    filterReducer: filterSlice,
    paginationReducer: dataSlice,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />

      {/* <FormToFB /> */}
    </React.StrictMode>
  </Provider>
);
