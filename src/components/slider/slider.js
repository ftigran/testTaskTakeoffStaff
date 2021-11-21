import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { setTask } from "../../store/actions";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import "./slider.scss";
const App = () => {
  const taskNumb = useSelector((state) => state.data.task);
  const dispatch = useDispatch();
  const slideChange = (index) => {
    dispatch(setTask(index + 1));
  };
  return (
    <div className="slider">
      <h3 className="sliderTitle">Задание №{taskNumb}</h3>
      <Slider afterChange={slideChange}>
        <Grid
          container
          justify="space-between"
          direction="column"
          className="sliderContainer"
        >
          <Grid item className="sliderContainerItem">
            <h3>Сделай фото с набором «100 лет экспертизы Weleda»</h3>
            <p>
              Подробности о задании и сроки приема работ смотри{" "}
              <a href="empty">здесь</a>
            </p>
          </Grid>
          <Grid item component="ul" className="sliderContainerItem">
            <li>- Сделай красивое фото набора.</li>
            <li>- Опубликуй фото или видео в Stories или в ленте Instagram.</li>
            <li>
              - Не забудь про хештег <b>#WELEDA100YEARS</b> и отметь{" "}
              <b>@weledarussia.</b>
            </li>
            <li>
              - Убедись, что на время конкурса твой аккаунт остается открытым.
            </li>
          </Grid>
        </Grid>
        <Grid
          container
          justify="space-between"
          direction="column"
          className="sliderContainer"
        >
          <Grid item className="sliderContainerItem">
            <h3>Сделай фото с набором «100 лет экспертизы Weleda»</h3>
            <p>
              Подробности о задании и сроки приема работ смотри{" "}
              <a href="empty">здесь</a>
            </p>
          </Grid>
          <Grid item component="ul" className="sliderContainerItem">
            <li>- Сделай красивое фото набора.</li>
            <li>- Опубликуй фото или видео в Stories или в ленте Instagram.</li>
            <li>
              - Не забудь про хештег <b>#WELEDA100YEARS</b> и отметь{" "}
              <b>@weledarussia.</b>
            </li>
            <li>
              - Убедись, что на время конкурса твой аккаунт остается открытым.
            </li>
          </Grid>
        </Grid>
        <Grid
          container
          justify="space-between"
          direction="column"
          className="sliderContainer"
        >
          <Grid item className="sliderContainerItem">
            <h3>Сделай фото с набором «100 лет экспертизы Weleda»</h3>
            <p>
              Подробности о задании и сроки приема работ смотри{" "}
              <a href="empty">здесь</a>
            </p>
          </Grid>
          <Grid item component="ul" className="sliderContainerItem">
            <li>- Сделай красивое фото набора.</li>
            <li>- Опубликуй фото или видео в Stories или в ленте Instagram.</li>
            <li>
              - Не забудь про хештег <b>#WELEDA100YEARS</b> и отметь{" "}
              <b>@weledarussia.</b>
            </li>
            <li>
              - Убедись, что на время конкурса твой аккаунт остается открытым.
            </li>
          </Grid>
        </Grid>
        <Locked />
      </Slider>
    </div>
  );
};

export default App;

const Locked = (date) => {
  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      direction="column"
      className="sliderContainerLocked sliderContainer"
      data-locked={true}
    >
      <h3>Расскажи о своем знакомстве с продуктом Weleda</h3>
      {/* <img src="./images/locked.svg" /> */}
      <p>
        Доступ к данному заданию откроется
        <br />
        <b>01.06.2021</b>
      </p>
    </Grid>
  );
};
