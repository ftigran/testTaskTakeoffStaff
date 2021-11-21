import React from "react";
import ErrorIcon from "@material-ui/icons/Error";
const ShowError = ({ error }) => (
  <div className="error">
    <ErrorIcon style={{ position: "relative", top: -2, marginRight: 2 }} />
    {error}
  </div>
);

export default ShowError;
