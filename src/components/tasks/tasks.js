import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import "./tasks.scss";
import Slider from "../slider/slider";

import Tabs from "./Tabs/Tabs";
import { TaskSend, Sbros } from "../Modal/SimpleModal/SimpleModal";
import { Field, reduxForm } from "redux-form";
import { required, instaPost } from "../TextField/validation";
import { renderTextField } from "../regForm/renderTextField";
import { useSelector, useDispatch } from "react-redux";
import { setInstaPostModal, setTaskRow } from "../../store/actions";

const taskFrom = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        wrap="nowrap"
        justify="space-between"
        className="instaContainer"
      >
        <Grid item className="taskInput">
          <Field
            name="instalink"
            component={renderTextField}
            type="text"
            label="Ссылка на пост в Instagram"
            validate={[required, instaPost]}
          />
          <p className="taskInputLegend">
            Загрузите ссылку на пост в Instagram для проверки выполнения задания
          </p>
        </Grid>
        <Button type="submit" variant="contained" size="large">
          Отправить задание
        </Button>
        <TaskSend />
      </Grid>
    </form>
  );
};
const TaskFrom = reduxForm({
  form: "TaskFrom", // a unique identifier for this form
})(taskFrom);

const task = () => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.data.task);
  const rowsTasks = useSelector((state) => state.data.rowsTasks);
  const handler = () => {
    dispatch(setInstaPostModal(true));
    dispatch(setTaskRow(task));
  };
  const TaskSendVAriant = () => {
    let alreadySent = false;
    let alreadyApproved = false;
    rowsTasks.map((taskRow) => {
      if (taskRow.stat == "на модерации I") {
        alreadySent = true;
      }
      if (taskRow.id == task && taskRow.stat == "Принят") {
        alreadyApproved = true;
      }
    });
    if (alreadyApproved) {
      return <p className="tasksSendedText">Вы уже выполнили это задание.</p>;
    } else if (alreadySent) {
      return (
        <p className="tasksSendedText">
          Вы уже загрузили ссылку на проверку.
          <br />
          Результат проверки станет доступен в твоем Личном кабинете в течение
          ближайших 3-х дней.
        </p>
      );
    } else {
      return <TaskFrom onSubmit={handler} />;
    }
  };
  console.log("task");

  TaskSendVAriant();
  return (
    <div className="tasksContainer">
      <h3>Задания</h3>
      <Slider />
      <TaskSendVAriant />
      <Tabs />
    </div>
  );
};
export default task;
