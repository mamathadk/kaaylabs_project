import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTotalPages,
  selectPageNumber,
  setPageNumber,
} from "../redux/beersSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectPageNumber);

  const handlePageChange = (page) => {
    dispatch(setPageNumber(page));
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <li
              key={page}
              className={`page-item ${currentPage === page ? "active" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
