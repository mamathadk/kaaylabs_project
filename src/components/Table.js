import React from "react";

const Table = ({ usersData }) => {
  //   const beers = useSelector((state) => state.beers.beers);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Tagline</th>
          <th>First Brewed</th>
        </tr>
      </thead>
      <tbody>
        {usersData.map((beer) => (
          <tr key={beer.id}>
            <td>{beer.name}</td>
            <td>{beer.tagline}</td>
            <td>{beer.first_brewed}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
