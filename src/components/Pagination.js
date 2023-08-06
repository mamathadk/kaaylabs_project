// src/components/DataList.js
import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
  setPage,
} from "../redux/dataSlice";
import { fetchData } from "../redux/api";

const Pagination = ({
  items,
  page,
  pageSize,
  isLoading,
  error,
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
  setPage,
}) => {
  useEffect(() => {
    fetchDataStart();

    fetchData(page, pageSize)
      .then((data) => fetchDataSuccess(data))
      .catch((error) => fetchDataFailure(error));
  }, [page, pageSize, fetchDataStart, fetchDataSuccess, fetchDataFailure]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.data.items,
  page: state.data.page,
  pageSize: state.data.pageSize,
  isLoading: state.data.isLoading,
  error: state.data.error,
});

const mapDispatchToProps = {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
  setPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
