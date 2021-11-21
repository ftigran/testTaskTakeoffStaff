import React, { Component } from "react";

import Lkinfo from "../../../lkInfo/lkInfo";
import Tasks from "../../../tasks/tasks";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import PrizSelectModal from "../../../Modal/PrizSelectModal/PrizSelectModal";

import "./cabinet.scss";
import { Provider } from "react-redux";
import { store } from "../../../../store/store";
const main = () => {
  return (
    <>
      <Grid className="pageBG" container justify="center" id="cabinet">
        <Provider store={store}>
          <Grid
            container
            justify="center"
            className="pageWrapper"
            alignContent="flex-start"
          >
            <Grid xs={11} item className="pageContainer">
              <Lkinfo />
            </Grid>
            <Grid xs={10} item className="pageContainer">
              <Tasks />
              <Grid
                container
                justify="space-between"
                alignItems="center"
                className="cabinetSelectPrizContainer"
              >
                <PrizSelectModal />
              </Grid>
            </Grid>
          </Grid>
        </Provider>
      </Grid>
    </>
  );
};
export default main;
