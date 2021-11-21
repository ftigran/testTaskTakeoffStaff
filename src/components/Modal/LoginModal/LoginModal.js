import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { changeUser, toggleError } from "../../../store/actions";
import "./LoginModal.scss";
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
import { useHistory } from "react-router";
// import {RegEmailApproveModal} from '../Modal/RegEmailApproveModal/RegEmailApproveModal'

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const LogForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setLoginModal(false));
    scroll.scrollToTop();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container justify="space-between">
        <Grid xs={12} item className="FormTextFieldContainer">
          <Field
            name="email"
            component={renderTextField}
            type="email"
            label="Email"
            validate={[required, email]}
            autoComplete="username"
          />
          <Field
            name="password"
            component={renderTextField}
            type="password"
            label="Пароль"
            validate={[required, pass]}
            autoComplete="current-password"
          />
        </Grid>

        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          className="regBtnsWrap"
        >
          <div className="sbrosWrapper">
            <Sbros />
          </div>
          <Button type="submit" variant="contained" size="small">
            Войти
          </Button>
          <Link to="/reg" onClick={handleClose}>
            <Button variant="contained" variant="outlined" className="regBtn">
              Зарегистрироваться
            </Button>
          </Link>
        </Grid>
      </Grid>
    </form>
  );
};
// export default connect(
//     null,
//     {changeUser, toggleError}
//   )(LoginModal);
const LoginForm = reduxForm({
  form: "loginForm", // a unique identifier for this form
})(LogForm);
import { setLoginModal, userLog } from "../../../store/actions";
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
  const open = useSelector((state) => state.data.LoginModalOpen);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setLoginModal(false));
  };
  const handleEnter = () => {
    dispatch(userLog(true));
    dispatch(setLoginModal(false));
    history.push("/cabinet");
    console.log("enter");
    //   let name;
    //   users.map((user)=>{
    //       if (user.email==email&&user.pass==pass){
    //         name = user;
    //         console.log(name)
    //       }
    //   })
    // if(name){
    //   dispatch(changeUser({
    //       prizi: name.prizi,
    //       cheki:name.cheki,
    //       name: name.name,
    //       phone: name.phone
    //     }))
    //     //history.push('/cabinet');
    // }else {
    //     dispatch(toggleError())
    // }
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
        <div className={"modalWindow LoginModal SimpleModal"}>
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
