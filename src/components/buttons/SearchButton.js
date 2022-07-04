import React from "react";
import { ReactComponent as SearchIcon } from "./search.svg";
import "./Buttons.scss";

export const SearchButton = ({ onClick = () => {} }) => {
  return (
    <button onClick={onClick} className="button button--search" type="button">
      <SearchIcon />
    </button>
  );
};
