import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SearchForm } from "../components/searchForm/SearchForm";
import { SearchResults } from "../components/searchResults/SearchResults";
import { Header } from "../components/header/Header";
import { Pagination } from "../components/pagination/Pagination";
import { resetRepos } from "./slices/githubSlice";
import { resetQuery } from "./slices/querySlice";
import "../index.scss";

function App() {
  const [currentPage, setCurrentPage] = useState(null);
  const totalCount = useSelector((state) => state.github.totalCount);
  const dispatch = useDispatch();

  const resetResults = () => {
    dispatch(resetRepos());
    dispatch(resetQuery())
  }

  useEffect(() => {
    setCurrentPage(0);
  }, [totalCount]);

  return (
    <div className="App">
      <Header onClick={resetResults}/>
      <div className="search">
        <SearchForm />
        <SearchResults currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
      <Pagination/>
    </div>
  );
}

export default App;
