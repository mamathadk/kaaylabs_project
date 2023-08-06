import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { FETCH_BEERS_SUCCESS } from "../redux/beerSlice";

const Table = (props) => {
  //   const beers = useSelector((state) => state.beers.beers);

  const { usersData } = props;
  console.log(usersData);
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Id</th>
          <th>abv</th>
          <th>attenuation_level</th>
          <th>boil_volume</th>
          <th>brewers_tips</th>
          <th>contributed_by</th>
          <th>description</th>
          <th>ebc</th>
          <th>First Brewed</th>

          <th>food_pairing</th>
          <th>ibu</th>
          <th>image_url</th>
          <th>Name</th>

          <th>ph</th>
          <th>srm</th>
          <th>Tagline</th>
          <th>target_fg</th>
          <th>target_og</th>
          <th>volume</th>
        </tr>
      </thead>
      <tbody>
        {usersData.map((beer) => (
          <tr key={beer.id}>
            <td>{beer.id}</td>
            <td>{beer.abv}</td>
            <td>{beer.attenuation_level}</td>
            <td>
              {beer.boil_volume.value}
              {beer.boil_volume.unit}
            </td>
            <td>{beer.brewers_tips}</td>
            <td>{beer.contributed_by}</td>
            <td>{beer.description}</td>
            <td>{beer.ebc}</td>
            <td>{beer.first_brewed}</td>
            <td>{beer.food_pairing}</td>
            <td>{beer.ibu}</td>
            <td>{beer.image_url}</td>
            <td>{beer.name}</td>
            <td>{beer.ph}</td>
            <td>{beer.srm}</td>
            <td>{beer.tagline}</td>
            <td>{beer.target_fg}</td>
            <td>{beer.target_og}</td>

            <td>
              {beer.volume.value}
              {beer.volume.unit}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch) => {
  return {
    beersDispatch: (data) => dispatch(FETCH_BEERS_SUCCESS(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
