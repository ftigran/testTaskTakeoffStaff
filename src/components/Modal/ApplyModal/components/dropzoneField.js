import React from "react";
import DropZone from "react-dropzone";
import ImagePreview from "./imagePreview";
import Placeholder from "./placeholder";
import ShowError from "./showError";
import { DropzoneArea } from "material-ui-dropzone";

const DropZoneField = ({
  handleOnDrop,
  input,
  imagefile,
  label,
  meta: { error, touched },
}) => (
  <div
    className={
      touched && error ? "preview-container error" : "preview-container"
    }
  >
    <DropzoneArea
      onChange={(file) => input.onChange(file)}
      dropzoneText={label}
      showFileNames={true}
      showAlerts={false}
      acceptedFiles={["image/*"]}
    />
    {touched && error && <ShowError error={error} />}
  </div>
);

export default DropZoneField;
