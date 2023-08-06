// src/App.js
import React, { useEffect, useState } from "react";
import { Provider, connect } from "react-redux";
// import Pagination from "./components/Pagination";
import Table from "./components/Table";
import { FETCH_BEERS_SUCCESS } from "./redux/beerSlice";
import Filters from "./components/Filters";
import {
  setFilterBrewedAfter,
  setFilterBrewedBefore,
} from "./redux/filterSlice";
import Pagination from "./components/Pagination";
import { fetchDataSuccess } from "./redux/dataSlice";

const App = (props) => {
  const [usersData, setUsersData] = useState([]);
  const fetchdata = () => {
    // fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${pageSize}`)
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((fin) => setUsersData(fin))
      .catch((err) => err.message);
  };
  useEffect(() => {
    fetchdata();
    props.beersDispatch();
  }, []);

  return (
    <div className="App">
      <h1 className="text-center mt-4">Beer Table</h1>
      {/* <Filters usersData={usersData} /> */}
      <Table usersData={usersData} />
      {/* <Pagination items={usersData} /> */}
    </div>
  );
};
const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    beersDispatch: (data) => dispatch(FETCH_BEERS_SUCCESS(data)),
    filtersDisptchbrewedbefore: (data) => dispatch(setFilterBrewedBefore(data)),
    filtersDisptchbrewedAfter: (data) => dispatch(setFilterBrewedAfter(data)),
    fetchSuccesDispatch: (data) => dispatch(fetchDataSuccess(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
