// src/App.js
import React, { useEffect, useState } from "react";
import { Provider, connect } from "react-redux";
// import Pagination from "./components/Pagination";
import Table from "./components/Table";
// import Filters from "./components/Filters";
import { FETCH_BEERS_SUCCESS, SET_FILTERS } from "./redux/beerSlice";
import Filters from "./components/Filters";

const App = (props) => {
  const [usersData, setUsersData] = useState([]);
  const fetchdata = () => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((fin) => setUsersData(fin))
      .catch((err) => err.message);
  };
  useEffect(() => {
    fetchdata();
    props.beersDispatch();
  }, []);

  // const filterData = () => {
  //   props.filtersDisptch();
  //   console.log(props);
  // };
  return (
    <div className="App">
      <h1 className="text-center mt-4">Beer Table</h1>
      <Filters usersData={usersData} />
      <Table usersData={usersData} />
      {/* <Pagination /> */}
    </div>
  );
};
const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    beersDispatch: (data) => dispatch(FETCH_BEERS_SUCCESS(data)),
    filtersDisptch: (data) => dispatch(SET_FILTERS(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
