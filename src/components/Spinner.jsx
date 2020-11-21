import React from "react";
import { CircularProgress } from "@material-ui/core";

const Spinner = () => {
  return (
    <div className="spinnerContainer">
      <CircularProgress color="primary" />
    </div>
  );
};

export default Spinner;
