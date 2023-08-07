// src/App.js
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Table from "./components/Table";
import { FETCH_BEERS_SUCCESS } from "./redux/beerSlice";
import {
  setFilterBrewedAfter,
  setFilterBrewedBefore,
} from "./redux/filterSlice";
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
      <h1 className="text-center mt-4 mb-5">Beer Table</h1>
      <Table usersData={usersData} />
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
