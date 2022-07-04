import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../../app/slices/querySlice";
import "./Input.scss";

export const Input = ({ placeholder = "", fetchRepos = () => {} } = {}) => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query.value);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchRepos();
    }
  };

  return (
      <input
        className="text-input"
        maxLength="10"
        placeholder={placeholder}
        type="text"
        value={query}
        onKeyPress={handleKeyDown}
        onChange={(e) => dispatch(update(e.target.value))}
      />
  );
};
