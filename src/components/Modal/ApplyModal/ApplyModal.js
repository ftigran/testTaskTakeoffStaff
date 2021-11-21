import React, { Component } from "react";
import { DropzoneArea } from "material-ui-dropzone";

import Checkbox from "../../Checkbox/Checkbox";
import {
  FormControl,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  InputLabel,
  List,
  ListItem,
  ListItemIcon,
  InsertDriveFile,
  ListItemText,
  Select,
  MenuItem,
  TextField as MatTextField,
} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { withStyles } from "@material-ui/core/styles";
import { changeUser, toggleError } from "../../../store/actions";
import "./ApplyModal.scss";
import { renderTextField as TextField } from "../../regForm/renderTextField";
//import {WrapedUserError} from '../UserLoginErrorModal/UserLoginErrorModal'
import { Sbros } from "../SimpleModal/SimpleModal";
import { Field, reduxForm } from "redux-form";
import { renderTextField } from "../../regForm/renderTextField";
import {
  required,
  phoneNumber,
  promoNumber,
  email,
  maxLength,
  minLength,
  kirilicName,
  instaUser,
  isTrue,
  pass,
} from "../../TextField/validation";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { Provider, connect } from "react-redux";
import { store } from "../../../store/store";
import { selectCity } from "../../../store/actions";

import { useHistory } from "react-router";
// import {RegEmailApproveModal} from '../Modal/RegEmailApproveModal/RegEmailApproveModal'
import { makeStyles } from "@material-ui/core/styles";
import FormHelperText from "@material-ui/core/FormHelperText";

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => {
  return (
    <FormControl error={touched && error} className="applyModalSelect">
      <InputLabel htmlFor="city-native-simple">Город</InputLabel>
      <Select
        native
        {...input}
        {...custom}
        inputProps={{
          name: "city",
          id: "city-native-simple",
        }}
      >
        {children}
      </Select>
      {renderFromHelper({ touched, error })}
    </FormControl>
  );
};
const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};
const renderSelect = ({
  label,
  input,
  className = "",
  meta: { touched, invalid, error },
  ...custom
}) => {
  const city = useSelector((state) => state.data.selectCity);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(selectCity(event.target.value));
  };
  return (
    <FormControl variant="outlined" fullWidth {...input} {...custom}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={city}
        onChange={handleChange}
      >
        <MenuItem value={1}>Санкт-Петербург</MenuItem>
        <MenuItem value={2}>Краснодар</MenuItem>
        <MenuItem value={3}>Новосибирск</MenuItem>
        <MenuItem value={4}>Екатеримбдург</MenuItem>
        <MenuItem value={5}>Красноярск</MenuItem>
        <MenuItem value={6}>Другой</MenuItem>
      </Select>
    </FormControl>
  );
};
import { AddressSuggestions } from "react-dadata";
import {
  selectAddress,
  selectAddressError,
  selectAddressDelivery,
} from "../../../store/actions";
const GetForm = () => {
  const city = useSelector((state) => state.data.selectCity);
  const address = useSelector((state) => state.data.address);
  const error = useSelector((state) => state.data.addressError);
  const [str, setStr] = React.useState();
  const dispatch = useDispatch();
  const setAddress = (e) => {
    dispatch(selectAddress(e));
    console.log(e);
  };
  const setError = () => {
    dispatch(selectAddressError());
  };
  console.log("city");
  console.log(city);
  const AdressField = ({ city }) => {
    const kladrs = [
      "7800000000000",
      "2300000100000",
      "5400000100000",
      "6600000100000",
      "2400000100000",
    ];
    return (
      <AddressSuggestions
        token={"50af94962e7d986c060a7e79e512b90550b87c77"}
        value={address}
        onChange={(e) => {
          setError();
          setAddress(e);
        }}
        filterLocations={
          typeof city === "number" ? [{ kladr_id: kladrs[city] }] : null
        }
        customInput={(props) => (
          <MatTextField
            onChange={setStr}
            label="Адрес"
            variant="outlined"
            error={error}
            helperText={error}
            fullWidth
            {...props}
          />
        )}
      />
    );
  };
  if (city == 6) {
    return <AdressField />;
  } else if (city > 0) {
    return <AdressField city={city - 1} />;
  } else {
    return null;
  }
};
const GetWay = () => {
  const city = useSelector((state) => state.data.selectCity);

  const GetFields = ({ city }) => {
    const cityPitomniki = [
      ["Питомник на пушкина", "Питомник на Ленина", "Питомник на Маркса"],
      [
        "Питомник на у дома",
        "Питомник на питерский",
        "Питомник на Одинцова",
        "Питомник на Колотушкина",
      ],
      ["Питомник на у 1", "Питомник на 2"],
      ["Питомник на у 3", "Питомник на 4"],
      ["Питомник на уникальный"],
    ];
    return (
      <Field name="pickupIndex" defaultValue="0" component={radioButton}>
        {cityPitomniki[city].map((label, index) => (
          <Radio value={index.toString()} key={index} label={label} />
        ))}
      </Field>
    );
  };
  const [wayToGet, setWayToGet] = React.useState("pickup");
  const handler = (event, value) => {
    console.log("arg");
    console.log(event);
    console.log(value);
    setWayToGet(value);
    console.log("wayIS");

    console.log(wayToGet);

    return null;
  };
  const dispatch = useDispatch();
  const GetGettingFields = () => {
    switch (wayToGet) {
      case "pickup":
        dispatch(selectAddressDelivery(false));
        return <GetFields city={city - 1} />;
      case "delivery":
        dispatch(selectAddressDelivery(true));
        return <GetForm />;
    }
  };
  if (city > 0) {
    console.log("city");
    console.log(city);
    console.log(city == 6);
    if (city == 6) {
      dispatch(selectAddressDelivery(true));
      return <GetForm />;
    }
    return (
      <>
        <Field
          name="wayToGet"
          defaultValue="pickup"
          onChangeHandler={handler}
          component={radioButton}
        >
          <Radio value="pickup" label="Самовывоз" />
          <Radio value="delivery" label="Доставка" />
        </Field>
        <GetGettingFields />
      </>
    );
  } else {
    return null;
  }
};

const radioButton = ({
  isControl = false,
  input,
  onChangeHandler,
  children,
  ...rest
}) => {
  console.log("input");
  console.log(input);
  console.log(rest);

  return (
    <FormControl>
      <RadioGroup
        input
        {...rest}
        onChange={onChangeHandler ? onChangeHandler : null}
      >
        {children.map(({ props }) => {
          console.log("props");
          console.log(props);
          return (
            <FormControlLabel
              control={<Radio />}
              {...props}
              key={props.value}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};
import ShowError from "./components/showError";

class DropzoneAreaExample extends Component {
  constructor({ meta: { error, touched } }) {
    super();
    this.state = {
      files: [],
    };
    this.error = error;
    this.touched = touched;
  }
  handleChange(files) {
    this.setState({
      files: files,
    });
  }
  render() {
    return (
      <div className="preview-container">
        <DropzoneArea
          onChange={this.handleChange.bind(this)}
          dropzoneText="Загрузите фото"
          showFileNames={true}
          showAlerts={false}
          acceptedFiles={["image/*"]}
        />
        {this.error && <ShowError error={this.error} />}
      </div>
    );
  }
}
const LogForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const dispatch = useDispatch();
  const handleCitySelect = (event) => {
    dispatch(selectCity(event.target.options.selectedIndex));
  };
  const state = { imageFile: [] };
  const handleOnDrop = (newImageFile) => {
    console.log("dropped");
    console.log(newImageFile);
    setImageFile(newImageFile);
  };
  //const imageIsRequired = value => (!value ? "Required" : undefined);
  // const DropZoneFields = ({
  //   handleOnDrop,
  //   input,
  //   imagefile,
  //   label,
  //   meta: { error, touched }
  // }) => {
  //   return(
  //   <div className="preview-container">
  //     <DropZone
  //       // accept="image/jpeg, image/png, image/gif, image/bmp"
  //       // className="upload-container"
  //       // onDrop={handleOnDrop}
  //       // onChange={file => input.onChange(file)}
  //     >
  //       {imagefile && imagefile.length > 0 ? console.log(true) : console.log(false)}
  //     </DropZone>
  //     {touched && error && <ShowError error={error} />}
  //   </div>
  // )};
  const [imageFile, setImageFile] = React.useState([]);
  const address = useSelector((state) => state.data.address);
  const isDelivery = useSelector((state) => state.data.addressDelivery);
  const setError = (error) => {
    dispatch(selectAddressError(error));
  };
  const sub = (e) => {
    console.log("checked start");

    console.log(e);

    e.preventDefault();
    if (isDelivery) {
      if (address) {
        if (!address.data.city && !address.data.settlement) {
          setError("Укажите населённый пункт");
        } else if (!address.data.settlement && !address.data.street) {
          setError("Укажите улицу");
        } else if (!address.data.house) {
          setError("Укажите дом");
        }
      } else {
        setError("Введите адрес");
      }
    }
    console.log("checked");
    handleSubmit(e);
  };

  return (
    <form onSubmit={sub} className="regForm">
      <Grid
        spacing={2}
        container
        justify="center"
        className="regFormContainer"
        style={{ margin: "auto" }}
      >
        <Grid sm={12} item className="FormTextFieldContainer">
          <Field
            name="firstName"
            component={TextField}
            type="text"
            label="Имя"
            validate={[
              required,
              maxLength(20, "Имя должно"),
              minLength(2, "Имя должно"),
              kirilicName,
            ]}
          />
          <Field
            name="lastName"
            component={TextField}
            type="text"
            label="Фамилия"
            validate={[
              required,
              maxLength(20, "Фамилия должна"),
              minLength(2, "Фамилия должна"),
              kirilicName,
            ]}
          />
          <Field
            name="fatherName"
            component={TextField}
            type="text"
            label="Отчество"
            validate={[
              required,
              maxLength(20, "Отчество должно"),
              minLength(2, "Отчество должно"),
              kirilicName,
            ]}
          />
          <Field
            name="city"
            component={renderSelectField}
            validate={[required]}
            label="Город"
            variant="outlined"
            fullWidth
            onChange={handleCitySelect}
          >
            <option value="" />
            <option value={1}>Санкт-Петербург</option>
            <option value={2}>Краснодар</option>
            <option value={3}>Новосибирск</option>
            <option value={4}>Екатеримбдург</option>
            <option value={5}>Красноярск</option>
            <option value={6}>Другой</option>
          </Field>
          <Field
            name="email"
            component={TextField}
            type="email"
            label="Email"
            validate={[required, email]}
          />

          <Field
            name="phone"
            component={TextField}
            type="tel"
            label="Телефон"
            validate={[required, phoneNumber]}
          />
        </Grid>
        <Grid sm={12} item className="areaContainer">
          <Field
            name="about"
            component={TextField}
            type="text"
            label="Расскажите о себе"
            className="area"
            multiline={true}
            validate={[
              required,
              maxLength(600, "Сообщение должно"),
              minLength(30, "Сообщение должно"),
            ]}
          />
          <GetWay />
          <Field
            name="imageToUpload"
            component={DropZoneField}
            label="Загрузи фото"
            type="file"
            imagefile={imageFile}
            handleOnDrop={handleOnDrop}
            validate={[imageIsRequired]}
          />
          <Field
            name="rulesCB"
            component={Checkbox}
            type="checkbox"
            label={
              <>
                Я прочитал(а) и согласен(а) с{" "}
                <a href="empty">Правилами акции</a> и{" "}
                <a href="empty">Пользовательским соглашением</a>
              </>
            }
            validate={[isTrue()]}
          />
        </Grid>
        <Button type="submit" variant="contained" size="large">
          Подать заявку
        </Button>
      </Grid>
    </form>
  );
};
const imageIsRequired = (value) =>
  value ? (!value.length ? "Загрузите изображение" : undefined) : undefined;
import DropZoneField from "./components/dropzoneField";

// export default connect(
//     null,
//     {changeUser, toggleError}
//   )(LoginModal);
const LoginForm = reduxForm({
  form: "applyForm", // a unique identifier for this form
})(LogForm);
import { setApplyModalOpen, userLog } from "../../../store/actions";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

export default function LoginModal() {
  const users = [
    createUsers("1@Q.ru", 555555, "Юлия", "+7 999 333 2775", 4, 2),
    createUsers("2@Q.ru", 123456, "Юрий", "+7 999 695 5555", 1, 9),
    createUsers("3@Q.ru", 111111, "Алексей", "+7 999 690 0000", 100, 510),
  ];
  let history = useHistory();

  let SetEmail = setEmail.bind(this);
  let SetPass = setPass.bind(this);
  function setEmail(val) {
    email = val;
  }
  function setPass(val) {
    pass = val;
  }
  //let email;
  //let pass;
  const open = useSelector((state) => state.data.ApplyModalOpen);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setApplyModalOpen(false));
  };
  const handleEnter = (event, props) => {
    //dispatch(userLog(true));
    console.log("Форма заполнена!");
    console.log(event);
    for (let e in event) {
      console.log("the value of " + e + " is:");
      console.log(event[e]);
    }
    dispatch(setApplyModalOpen(false));
    history.push("/cabinet");
    console.log("enter");
  };

  function createUsers(email, pass, name, phone, cheki = 0, prizi = 0) {
    return {
      email,
      pass,
      name,
      phone,
      cheki,
      prizi,
    };
  }
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={"modal"}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      // disableScrollLock={true}
    >
      <Fade in={open}>
        <div className={"modalWindow LoginModal SimpleModal applyModal"}>
          <h3 id="transition-modal-title" className="regFormTitle">
            Авторизация
          </h3>
          <IconButton
            aria-label="Закрыть окно"
            className={"modalWindowClose"}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <LoginForm onSubmit={handleEnter} />
        </div>
      </Fade>
    </Modal>
  );
}
