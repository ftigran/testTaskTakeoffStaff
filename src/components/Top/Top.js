import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import "./Top.scss";
import useReactRouter from "use-react-router";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Main = ({
  toLink = `/#c_rules`,
  toID = `c_rules`,
  btnText = "Выполнить задание",
}) => {
  const { history } = useReactRouter();
  const handleClick = () => {
    if (window.location.pathname !== "") {
      history.push(toLink);
      console.log(toLink);
    }
  };
  return (
    <div className="Top" id="c_main">
      <Grid
        container
        alignItems="flex-start"
        justify="center"
        className="TopContainer1"
      >
        <Grid
          container
          alignItems="flex-start"
          justify="flex-end"
          className="TopContainer2"
        >
          <Grid item xs={6}>
            <Grid container justify="center" className="TopContainer3">
              <Grid
                container
                alignItems="center"
                className="TopContainer4"
                direction="column"
              >
                {/* <img src="./images/100YearsB.png" className="TopImgLogo" /> */}
                <h1>
                  Стань
                  <br /> амбассадором бренда <br />
                  и выиграй призы
                  <br /> от Weleda
                </h1>
                <ScrollLink
                  onClick={handleClick}
                  activeClass="active"
                  to={toID}
                  smooth
                  duration={700}
                  //ignoreCancelEvents
                >
                  <Button variant="contained">{btnText}</Button>
                </ScrollLink>
                <ScrollLink
                  onClick={handleClick}
                  activeClass="active"
                  to={toID}
                  smooth
                  duration={700}
                  //ignoreCancelEvents
                >
                  <div id="cta">
                    <span className="arrow primera next "></span>
                    <span className="arrow segunda next "></span>
                  </div>
                </ScrollLink>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
