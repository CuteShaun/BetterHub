import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DEFAULT_SORT, DEFAULT_PER_PAGE, DEFAULT_PAGE } from "../../contstants";
import { SearchButton, CloseButton } from "../buttons";
import { Input } from "../input/Input";
import { abortController } from "../../app/slices/githubSlice";
import { getRepos, resetCurrentPage } from "../../app/slices/githubSlice";
import "./SearchForm.scss";

export const SearchForm = () => {
  const query = useSelector((state) => state.query.value);
  const dispatch = useDispatch();

  const fetchRepos = () => {
    dispatch(resetCurrentPage());
    dispatch(getRepos({ query, page: DEFAULT_PAGE, DEFAULT_SORT, DEFAULT_PER_PAGE }));
  }

  const abortRequest = () => {
    abortController.abort();
  }

  return (
    <>
      <form action="/" className="search__form" id="search-form" onSubmit={(e) => e.preventDefault()}>
        <Input fetchRepos={fetchRepos} placeholder="Search better libraries"></Input>
        <SearchButton onClick={fetchRepos} />
        <CloseButton onClick={abortRequest} />
      </form>
    </>
  );
};
