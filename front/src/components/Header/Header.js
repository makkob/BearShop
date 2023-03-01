import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Placeholder } from "react-bootstrap";
// import { cleareBasketState } from "../../actions/basketActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faSun,
  faMoon,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import { logout } from "../../actions/userAction";

import styles from "./Header.module.css";

export default function Header() {
  const dispatch = useDispatch();

  // icons
  const sunIcon = (
      <FontAwesomeIcon icon={faSun} color="#efeee9" className={styles.icon} />
    ),
    moonIcon = (
      <FontAwesomeIcon icon={faMoon} color="#efeee9 " className={styles.icon} />
    ),
    exitIcon = <FontAwesomeIcon icon={faRightFromBracket} />,
    uaFlag = <img className={styles.icon} src={require("./img/ukraine.png")} />,
    ukFlag = (
      <img className={styles.icon} src={require("./img/united-kingdom.png")} />
    );

  //logo
  const pyvnaGavanLogo = (
    <img
      className={styles.pyvnagavan}
      src={require("./img/pyvnagavan.png")}
      alt="pyvnagavan"
    />
  );

  const pyvnaGavanLogoPlaceholder = (
    <Placeholder as="p" animation="glow">
      <Placeholder lg={24} />
    </Placeholder>
  );

  const {
    userInfo: { token, error },
  } = useSelector((state) => state);

  const dispatchLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.header}>
      {/* Левая часть хєдера */}
      <div className={styles.headerLeft}>
        <div className={styles.space} />
        {sunIcon}
        <label className={styles.themeSelector}>
          <input type="checkbox" /> <div></div>
        </label>
        {moonIcon}
        {/* {uaFlag}
        <label className={styles.languageSelector}>
          <input type="checkbox" /> <div />
        </label>
        {ukFlag} */}
      </div>

      {/* Центральная часть хєдера */}
      <Link to="/" className={styles.headerMiddle}>
        {pyvnaGavanLogo}
      </Link>

      {/* Правая часть хєдера */}
      <div className={styles.headerRight}>
        {/* Вход и ЛК */}
        {token && <span className={styles.email}>{token.payload.email}</span>}
        <Link to={token ? `/user` : "/login"}>
          <button type="button" className={`${styles.button} ${styles.space}`}>
            {token ? "Кабінет" : "Вхід | Реєстрація"}
          </button>
        </Link>
        {token && (
          <Link to="/">
            <button
              type="button"
              className={styles.button}
              onClick={() => {
                dispatchLogout();
              }}
            >
              {exitIcon}
            </button>
          </Link>
        )}
        <div className={styles.space} />
      </div>
    </div>
  );
}
