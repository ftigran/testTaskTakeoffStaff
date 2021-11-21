import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";

import "./Footer.scss";

export default class Main extends Component {
  render() {
    return (
      <footer className={"footer"}>
        <Grid
          container
          className={"footerContainer"}
          justify="space-between"
          alignItems="center"
        >
          <Grid item className={"footerLogo"}>
            {/* <img src="./images/100Years.png" /> */}
          </Grid>
          <Grid item className={"footerMail"}>
            Если у вас возникли какие-либо вопросы, пишите на
            <br />
            <a href="mailto:support@weledapromo.ru">support@weledapromo.ru</a>
          </Grid>
        </Grid>
      </footer>
    );
  }
}
