import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  setFilterBrewedAfter,
  setFilterBrewedBefore,
} from "../redux/filterSlice";

const Filters = (props) => {
  const { formattedstartDate, formattedendDate, usersData } = props;

  const filteredData = usersData.filter((item) => {
    const itemDate = item.first_brewed;

    const dateobj = new Date(itemDate);

    const formattedDate = dateobj.toLocaleDateString("en-US", {
      month: "2-digit",
      year: "numeric",
    });
    // console.log(formattedDate);
    return (
      (!formattedstartDate || formattedDate >= new Date(formattedstartDate)) &&
      (!formattedendDate || formattedDate <= new Date(formattedendDate))
    );
  });

  const handlebrewedbeforeChange = (e) => {
    const selectedDate = e.target.value; // e.g., "2023-08-05"
    const dateObj = new Date(selectedDate);
    const formattedstartDate = dateObj.toLocaleDateString("en-US", {
      month: "2-digit",
      year: "numeric",
    });
    props.filtersDisptchbrewedbefore(formattedstartDate);
    console.log(formattedstartDate);
    // e.g., "August 2023"
  };

  const handlebrewedafterChange = (e) => {
    const selectedDate = e.target.value; // e.g., "2023-08-05"
    const dateObj = new Date(selectedDate);
    const formattedendDate = dateObj.toLocaleDateString("en-US", {
      month: "2-digit",
      year: "numeric",
    });
    props.filtersDisptchbrewedAfter(formattedendDate);
    console.log(formattedendDate);
  };

  return (
    <div>
      <div className="row justify-content-end">
        <div className="col-4">
          <div className="form-group">
            <label htmlFor="brewed_before">Brewed Before:</label>
            <input
              type="date"
              className="form-control"
              name="brewed_before"
              id="brewed_before"
              value={formattedstartDate}
              onChange={handlebrewedbeforeChange}
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
              id="brewed_after"
              value={formattedendDate}
              onChange={handlebrewedafterChange}
            />
          </div>
        </div>
      </div>
      {filteredData.map((item) => (
        <div key={item.id}>{/* Render your item data here */}</div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    filtersDisptchbrewedbefore: (data) => dispatch(setFilterBrewedBefore(data)),
    filtersDisptchbrewedAfter: (data) => dispatch(setFilterBrewedAfter(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
