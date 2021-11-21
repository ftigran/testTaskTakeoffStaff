import React from "react";
import TextField from "@material-ui/core/TextField";
import InputMask from "react-input-mask";
import "../TextField/TextField.scss";
export const renderTextField = ({
  label,
  input,
  className = "",
  meta: { touched, invalid, error },
  ...custom
}) => {
  className = "TextFields " + className;
  if (label == "Телефон") {
    return (
      <InputMask mask="+7 (999) 999-99-99" {...input}>
        <TextField
          label={label}
          variant="outlined"
          error={touched && invalid}
          helperText={touched && error}
          className={className}
          {...custom}
        />
      </InputMask>
    );
  } else if (label == "Промокод с листовки") {
    return (
      <InputMask mask="99999999999" {...input}>
        <TextField
          label={label}
          variant="outlined"
          error={touched && invalid}
          helperText={touched && error}
          {...custom}
          className={className}
        />
      </InputMask>
    );
  }
  return (
    <TextField
      label={label}
      variant="outlined"
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
      className={className}
    />
  );
};
