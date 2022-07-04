import React from "react";
import { ReactComponent as MarkIcon } from "./mark.svg";
import "./Buttons.scss";

export const CloseButton = ({ onClick = () => {} }) => {
  return (
    <button
      title="Cancel better search"
      onClick={onClick}
      className="button button--close"
      type="button"
    >
      <MarkIcon />
    </button>
  );
};

export default CloseButton;
