import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import { getRepos, updateCurrentPage } from "../../app/slices/githubSlice";
import { DEFAULT_PER_PAGE, DEFAULT_SORT } from "../../contstants";
import "./Pagination.scss";

export const Pagination = () => {
  const totalCount = useSelector((state) => state.github.totalCount);
  const query = useSelector((state) => state.query.value);
  const currentPage = useSelector((state) => state.github.currentPage);
  const status = useSelector((state) => state.github.status);
  const dispatch = useDispatch();

  const generatePageCount = useCallback(() => {
    if (totalCount > 1000) {
      return Math.ceil(1000 / 30);
    }

    return Math.ceil(totalCount / 30);
  }, [totalCount]);

  const [pageCount, setPageCount] = useState(generatePageCount());

  useEffect(() => {
    setPageCount(generatePageCount());
  }, [totalCount, generatePageCount]);

  const handlePageChange = (selectedObject) => {
    dispatch(updateCurrentPage(selectedObject.selected));
    dispatch(
      getRepos({ query, page: selectedObject.selected + 1, DEFAULT_SORT, DEFAULT_PER_PAGE })
    );
  };

  return (
    <>
      {totalCount > 0 && status !== 'loading' && (
        <ReactPaginate
          pageCount={pageCount}
          pageRange={2}
          forcePage={currentPage}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          containerClassName={"container"}
          previousLinkClassName={"page"}
          breakClassName={"page"}
          previousLabel="<"
          nextLabel=">"
          nextLinkClassName={"page"}
          pageClassName={"page"}
          disabledClassName={"disabled"}
          activeClassName={"active"}
        />
      )}
    </>
  );
};
