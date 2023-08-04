import React, { useEffect, useState } from "react";
import { SET_FILTERS } from "../redux/beerSlice";
import { connect } from "react-redux";

const Filters = (props) => {
  // console.log(usersData);
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  const handleFilterChange = () => {
    // if (brewed_before !== null && brewed_after !== null) {
    //   setAPIData(
    //     usersData.filter((obj) => {
    //       return (
    //         new Date(obj.date).getTime() >= brewed_before.getTime() &&
    //         new Date(obj.date).getTime() <= brewed_after.getTime()
    //       );
    //     })
    //   );
    // }
  };
  useEffect(() => {
    handleFilterChange();
    props.filtersDisptch();
  }, []);

  return (
    <div className="row justify-content-end">
      <div className="col-4">
        <div className="form-group">
          <label htmlFor="brewed_before">Brewed Before:</label>
          <input
            type="date"
            className="form-control"
            name="brewed_before"
            onChange={handleFilterChange}
          />
        </div>
      </div>
      <div className="col-4">
        <div className="form-group">
          <label htmlFor="brewed_after">Brewed After:</label>
          <input
            type="date"
            className="form-control"
            name="brewed_after"
            onChange={handleFilterChange}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    filtersDisptch: (data) => dispatch(SET_FILTERS(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
