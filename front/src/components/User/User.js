import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";

import { USER_LOGIN_SUCCESS } from "../../constants/userConstants";

// import UserPageNav from "./UserPageNav";
import UserInfo from "./UserInfo";
import Bonuses from "./Bonuses";
import OrderHistory from "./OrderHistory";
import UserAdress from "./UserAdress";

import styles from "./User.module.css";
import UserFeedback from "./UserFeedback";

export default function User() {
  const [userCategory, setUserCategory] = useState("0");

 


  const setCategoryType = (e) => {
    const { category } = e.target.dataset;
    setUserCategory(category);
  };

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div />
        <h2 className={styles.h2}>Меню</h2>
        <hr />
        <button
          className={styles.button}
          data-category="0"
          onClick={(e) => {
            setCategoryType(e);
          }}
        >
          Історія ➤
        </button>
        <hr />
        <button
          className={styles.button}
          data-category="1"
          onClick={(e) => {
            setCategoryType(e);
          }}
        >
          Профіль ➤
        </button>
        <hr />
        <button
          className={styles.button}
          data-category="2"
          onClick={(e) => {
            setCategoryType(e);
          }}
        >
          Бонусы ➤
        </button>
        <hr />
        <button
          className={styles.button}
          data-category="3"
          onClick={(e) => {
            setCategoryType(e);
          }}
        >
          Адреса ➤
        </button>
        <hr />
        <button
          className={styles.button}
          data-category="4"
          onClick={(e) => {
            setCategoryType(e);
          }}
        >
          Залишити відгук ➤
        </button>
        <div />
      </div>
      <div className={styles.content1}></div>
      <div className={styles.content2}>
        {userCategory === "0" && <OrderHistory />}
        {userCategory === "1" && <UserInfo />}
        {userCategory === "2" && <Bonuses />}
        {userCategory === "3" && <UserAdress />}
        {userCategory === "4" && <UserFeedback />}
      </div>

      {/* <OrderHistory /> */}
    </div>
  );
}
