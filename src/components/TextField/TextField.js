import React from "react";
import TextField from "@material-ui/core/TextField";
import InputMask from "react-input-mask";

import "./TextField.scss";

export default function TextFieldTemplate(props) {
  let regular;
  let error;
  let maxLenght;
  let type;
  switch (props.type) {
    case "email":
      regular = new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      error = "Введите корректный e-mail";
      type = "email";
      break;
    case "name":
      regular = new RegExp(/[а-яА-ЯЁё-і]{4,}/g);
      error = "Заполните поле";
      break;
    case "message":
      regular = new RegExp(/[а-яА-ЯЁё-і0-9]{20,}/g);
      error = "Введите сообщение от 20 символов";
      break;
    case "password":
      regular = new RegExp(/\d{6}/g);
      error = "Введите пароль из 6 цифр";
      maxLenght = 6;
      type = "password";
      break;
    case "phone":
      regular = new RegExp(/\d/g);
      error = "Введите пароль из 6 цифр";
      maxLenght = 6;
      type = "tel";
      break;
    case "instalink":
      regular = new RegExp(/instagram.com\/p\/[a-zA-z0-9]{1,}/g);
      error = "Введите пароль из 6 цифр";
      break;
    default:
      console.log("Нет таких значений");
  }
  const [val, setVal] = React.useState();
  const [errors, setErrors] = React.useState("");
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setErrors("");
    setVal(value);
    console.log(event);

    if (!regular.test(value) || maxLenght < value.length) {
      setErrors(error);
    } else {
      if (props.handler) {
        props.handler(value);
      }
    }
  };
  return (
    <TextField
      id="outlined"
      variant="outlined"
      label={props.placeholder}
      value={val}
      type={type}
      helperText={errors}
      onChange={handleChange}
      error={errors != ""}
      disableUnderline
      className={"TextFields " + props.className}
    ></TextField>
  );
}

export function TextFieldPhone(props) {
  return (
    <InputMask mask="+7 (999) 999-99-99">
      <TextField
        type="tel"
        id="outlined"
        variant="outlined"
        label={"Телефон"}
        className="TextFields"
      />
    </InputMask>
  );
}
