import React from "react";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const Placeholder = ({ error, touched }) => (
  <div className={`placeholder-preview ${error && touched ? "has-error" : ""}`}>
    <CloudUploadIcon style={{ fontSize: 100, paddingTop: 70 }} />
    <p>Click or drag image file to this area to upload.</p>
  </div>
);

export default Placeholder;
