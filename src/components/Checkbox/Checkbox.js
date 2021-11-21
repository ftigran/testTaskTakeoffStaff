import React, { Component } from "react";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormHelperText,
} from "@material-ui/core";

import "./Checkbox.scss";

export default function ({
  label,
  input,
  meta: { touched, invalid, error },
  disabled,
  ...props
}) {
  return (
    <FormControl className={"checkboxFormControl"}>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              className="checkbox"
              name="checkedB"
              color="primary"
              disabled={disabled}
              onChange={(event) => {
                input.onChange(event);
              }}
              checked={!!input.value}
              // checkedIcon={<img src="./images/checkboxChecked.svg" />}
              // icon={<img src="./images/checkbox.svg" />}
            />
          }
          className="checkboxContainer"
          label={label}
        />
      </FormGroup>
      <FormHelperText>{touched && invalid && <>{error}</>}</FormHelperText>
    </FormControl>
  );
}
