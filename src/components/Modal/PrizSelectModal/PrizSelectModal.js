import React, { useState } from "react";
import Modal from "../Modal";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import "./PrizSelectModal.scss";

const itemsArr = [
  {
    title: "Набор из 4-х мини-продуктов*",
    subtitle: "*набор составляется из продуктов в наличии",
    cost: 5,
  },
  {
    title: "Промокод на бесплатную доставку",
    cost: 10,
    isDigital: true,
  },
  {
    title: "Косметичка из органического хлопка",
    cost: 10,
  },
  {
    title: "Промокод на покупку в интернет-магазине*",
    subtitle: "*скидка 30%",
    cost: 15,
    isDigital: true,
  },
  {
    title: "Сумка из органического хлопка",
    cost: 15,
  },
  {
    title: "Набор из 3-х продуктов *",
    subtitle: "*набор составляется из продуктов в наличии",
    cost: 20,
  },
  {
    title: "Набор для спорта: бутылка для воды + массажное масло с арникой",
    cost: 25,
  },
  {
    title: "Толстовка",
    cost: 30,
  },
  {
    title: "Рюкзак",
    cost: 40,
  },
];
import useMediaQuery from "@material-ui/core/useMediaQuery";
import json2mq from "json2mq";
import Slider from "react-slick";
import "../../slider/slider.scss";
import { AlertTitle } from "@material-ui/lab";
import {
  SelectPriz,
  PrizSuccess,
  AdressModal,
} from "../SimpleModal/SimpleModal";
const PSM = () => {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 730,
    })
  );
  const getElems = () => {
    return itemsArr.map((item, id) => {
      return <Item {...item} id={id + 1} key={id} />;
    });
  };
  const GetWpar = ({ isDesktop }) => {
    if (isDesktop) {
      return (
        <Grid container justify="space-between" className="priziContainer">
          {getElems()}
        </Grid>
      );
    } else {
      return <Slider dots={true}>{getElems()}</Slider>;
    }
  };
  const score = useSelector((state) => state.data.score);
  return (
    <>
      <p className="cabinetSelectPriz">
        Общее количество баллов: <span>{score}</span>
      </p>
      <Modal
        btnText="Выбрать приз"
        isOpen={false}
        title="Витрина призов"
        mainBtnVariant="contained"
        mainBtnSize="large"
        className="priziModal"
        classNameWrap=" priziModalWrap"
      >
        <GetWpar isDesktop={matches} />
        <SelectPriz />
        <PrizSuccess />
        <AdressModal />
      </Modal>
    </>
  );
};
export default PSM;
import { useSelector, useDispatch } from "react-redux";
import { setPriz, setSelectPrizModal } from "../../../store/actions";

const Item = ({ id, title, subtitle, cost, isDigital = false }) => {
  const dispatch = useDispatch();
  const hangleClick = () => {
    dispatch(
      setPriz({
        title,
        cost,
        isDigital,
      })
    );
    dispatch(setSelectPrizModal(true));
  };
  const score = useSelector((state) => state.data.score);
  return (
    <Grid item xs={6} lg={4} className="priziItemGrid">
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="space-between"
        className="priziItemContainer"
      >
        <Grid item className="priziItemWrap">
          <div className="prizItemImg">
            {/* <img src={`./images/items/${id}.png`} /> */}
          </div>
          <p className="priziItemTitle">{title}</p>
          <p className="priziItemSubtitle">{subtitle}</p>
        </Grid>
        <Grid item className="priziItemWrap">
          <p
            className={
              cost > score
                ? "priziItemCost priziItemCostDisabled"
                : "priziItemCost"
            }
          >
            {cost} баллов
          </p>
          <Button
            variant="contained"
            disabled={cost > score}
            fullWidth
            onClick={hangleClick}
          >
            Получить
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
