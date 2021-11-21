import React, { useState, useEffect } from "react";

import AppBar from "@material-ui/core/AppBar";
import { Link } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";

import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import List from "./List/List";
import SliderList from "./SlideList";

import SlideList from "./SlideList";
import "./Header.scss";
//import {route} from '../App'
import NavLink from "./List/NavLink/NavLink";
import { Provider, useDispatch } from "react-redux";
import { store } from "../../store/store";

const Header = () => {
  const trigger = useScrollTrigger({ target: window });
  const [scroll, setScroll] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     setScroll(window.scrollY > 150);
  //   });
  //}, []);
  return (
    <>
      <Slide appear={false} direction="down" in={true}>
        <AppBar className={"header"}>
          <Grid
            className={"headerContainer"}
            //height={{md: 50, lg: 70}}
            container
            justify={"space-between"}
            alignItems={"flex-end"}
          >
            <Link component={NavLink} className={"menu_item_in"} to="/">
              {/* <img src="./images/logo.svg" className="headerLogo" /> */}
            </Link>
            <Provider store={store}>
              <List />
              <SliderList />
            </Provider>

            {/* <SlideList/> */}
          </Grid>
        </AppBar>
      </Slide>
    </>
  );
};

export default Header;
