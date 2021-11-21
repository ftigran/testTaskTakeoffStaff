import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "@material-ui/core";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import useReactRouter from "use-react-router";
import "./List.scss";
// import UserWithStore from './User/User'
import NavLink from "./NavLink/NavLink";
import LoginModal from "../../Modal/LoginModal/LoginModal";
import { Provider, useDispatch, useSelector } from "react-redux";
import { setLoginModal } from "../../../store/actions";

const List = () => {
  const { history } = useReactRouter();

  const handleClick = (key) => {
    if (window.location.pathname !== "") {
      history.push(`/#${key}`);
    }
  };
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const dispatch = useDispatch();
  const handleOpenLoginModal = () => {
    dispatch(setLoginModal(true));
  };
  const scrollLinks = {
    c_main: "Главная",
    c_rules: "Правила",
    //     c_prizes: 'Призы',
    //c_winners: 'Победители',
  };
  const isLogged = useSelector((state) => state.data.isLogged);
  const GetLK = () => {
    console.log(isLogged);
    if (isLogged) {
      return (
        <li>
          <Link component={NavLink} to="/cabinet" onClick={scrollToTop}>
            Личный кабинет
          </Link>
        </li>
      );
    } else {
      return (
        <>
          <li>
            <Link component={NavLink} to="/reg" onClick={scrollToTop}>
              Регистрация
            </Link>
          </li>
          <li>
            <a onClick={handleOpenLoginModal}>Личный кабинет</a>
          </li>
        </>
      );
    }
  };
  return (
    <nav className={"headerList"}>
      <ul>
        {Object.entries(scrollLinks).map(([key, val]) => (
          <li key={key}>
            <ScrollLink
              onClick={() => handleClick(key)}
              activeClass="active"
              to={key}
              spy
              smooth
              duration={700}
              //ignoreCancelEvents
            >
              {val}
            </ScrollLink>
          </li>
        ))}
        {/* <li>
                                <ScrollLink
                                    onClick={() => handleClick('c_main')}
                                    activeClass="active"
                                    to={'c_main'}
                                    spy
                                    smooth
                                    duration={700}
                                    //ignoreCancelEvents
                                >
                                    Главная
                                </ScrollLink>
                        </li> */}
        {/* <li >
                            <Link component={NavLink} to="/rules" onClick={scrollToTop}>
                                Правила
                            </Link>
                        </li>
                        <li >
                            <Link component={NavLink} to="/winners" onClick={scrollToTop}>
                                Победители
                            </Link>
                        </li> */}
        <li>
          <Link component={NavLink} to="/winners" onClick={scrollToTop}>
            Победители
          </Link>
        </li>
        <li>
          <a onClick={handleOpenLoginModal}>Подать заявку</a>
        </li>
        <GetLK />
        <LoginModal />

        {/* {<li>
                    <LinkR to='main' spy={true} smooth={true} duration={500}>
                        <Link to={"/pages/Pepsilays/"}>Главная</Link>
                    </LinkR>
                </li>
                <li>
                    <LinkR to='rules' spy={true} smooth={true} duration={500}>
                        <Link to={"/pages/Pepsilays/#rules"}>Правила</Link>
                    </LinkR>
                </li>
                <li>
                    <LinkR to='priz' spy={true} smooth={true} duration={500}>
                        <Link to={"/pages/Pepsilays/#priz"}>Призы</Link>
                    </LinkR>
                </li>
                <li>
                    <LinkR to='winners' spy={true} smooth={true} duration={500}>
                        <Link to={"/pages/Pepsilays/#winners"}>Победители</Link>
                    </LinkR>
                </li>
                <li>
                    <LinkR to='faq'spy={true} smooth={true} duration={500}>
                        <Link to={"/pages/Pepsilays/faq"}>faq</Link>
                    </LinkR>
                </li>} */}
        {/* <div className='headerListGap'></div> */}

        {/* <UserWithStore/> */}
        {/* <li className={'headerListEnter'}>
                <Link component={NavLink} to="/enter" onClick={scrollToTop}>
                    Войти
                </Link>
                </li> */}
      </ul>
    </nav>
  );
};

export default List;
