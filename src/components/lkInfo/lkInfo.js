import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CB from "../Checkbox/Checkbox";
import { useDispatch } from "react-redux";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import "./lkInfo.scss";
import { Link } from "@material-ui/core";
import { userLog } from "../../store/actions";
import NavLink from "../Header/List/NavLink/NavLink";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const lkInfo = () => {
  const dispatch = useDispatch();
  const handlerExit = () => {
    dispatch(userLog(false));
  };
  return (
    <div className="lkInfo">
      <Grid container justify="space-between" className="lkInfoTitle">
        <h3>Личный кабинет</h3>
        <Link
          component={NavLink}
          to="/"
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <Button color="primary" onClick={handlerExit}>
            Выйти
          </Button>
        </Link>
      </Grid>
      <Grid container className="lkInfoContainer" spacing={2}>
        <Grid item md={6} xs={12} className="lkInfoString">
          <p>Имя</p>
          <p>Александра</p>
        </Grid>
        <Grid item md={6} xs={12} className="lkInfoString">
          <p>Фамилия</p>
          <p>Константинова</p>
        </Grid>
        <Grid item md={6} xs={12} className="lkInfoString">
          <p>Телефон</p>
          <p>+7 (909) 981-32-54</p>
        </Grid>

        <Grid item md={6} xs={12} className="lkInfoString">
          <p>Email</p>
          <p>alexandra.konstantinova@mymail.com</p>
        </Grid>
        <Grid item md={6} xs={12} className="lkInfoString">
          <p>@Instagram</p>
          <p>alexandra_konstantinova</p>
        </Grid>
        <Grid item md={6} xs={12} className="lkInfoString">
          <FormControlLabel
            control={
              <Checkbox
                className="checkbox"
                name="checkedB"
                color="primary"
                // // onChange={handler}
                // checkedIcon={<img src="./images/checkboxChecked.svg" />}
                // icon={<img src="./images/checkbox.svg" />}
              />
            }
            className="checkboxContainer"
            label={"Я согласен(а) получать информацию об акции по Email"}
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default lkInfo;

import "../Checkbox/Checkbox.scss";
