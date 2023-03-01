// import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userAction";
import { Link, useHistory } from "react-router-dom";

import { SHOP_PAGE_ROUTE } from "../../utils/consts";


import styles from "./UserRegistration.module.css";

export default function UserRegistration() {
  useEffect(() => {
    if (token) {
      history.push(SHOP_PAGE_ROUTE);
    }
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const {
    userInfo: { token, error },
  } = useSelector((state) => state);

  const signUpClick = (evt) => {
    evt.preventDefault();

    let now = new Date(),
      date18 = new Date(Number(now) - 1000 * 60 * 60 * 24 * 365.25 * 18)
        .toJSON()
        .slice(0, 10);
    let data = {};
    // for (let i = 0; i <= 6; i++) {
    //   data = [...evt.target[i].value];
    // }

    for (let i = 0; i <= 6; i++) {
      data[evt.target[i].name] = evt.target[i].value;
    }

    dispatch(register(data));
  };

  return (
    <div className={styles.modal}>
      <Link to="/login">
        <button className={styles.button1}>
          <h1 className={styles.h1}>Вхід</h1>
        </button>
      </Link>
      <Link to="/signup">
        <button className={styles.button2} autoFocus>
          <h1 className={styles.h1}>Зареєструватись</h1>
        </button>
      </Link>
      <form className={styles.form} action="" onSubmit={signUpClick}>
        <div className={styles.FormRegistration}>
          <div className={styles.labelTable}>
            <label htmlFor="surname">
              <h2 className={styles.h2}>Прізвище</h2>
            </label>
          </div>
          <div className={styles.inputTable}>
            <input
              className={styles.inputText}
              id="1"
              type="text"
              name="secondName"
              required
            />
          </div>
          <div className={styles.labelTable}>
            <label htmlFor="name">
              <h2 className={styles.h2}>Ім'я</h2>
            </label>
          </div>
          <div className={styles.inputTable}>
            <input
              className={styles.inputText}
              id="2"
              type="text"
              name="firstName"
              required
            />
          </div>
          <div className={styles.labelTable}>
            <label htmlFor="phone">
              <h2 className={styles.h2}>Телефон</h2>
            </label>
          </div>
          <div className={styles.inputTable}>
            <input
              className={styles.inputText}
              id="3"
              type="tel"
              pattern="[+]{1}\[3]{1}\[8]{1}\[(]{1}\[0-9]{3}\[)]{1}\[0-9]{3}-[0-9]{2}-[0-9]{2}"
              name="phone"
              required
            />
          </div>
          <div className={styles.labelTable}>
            <label htmlFor="mail">
              <h2 className={styles.h2}>Email</h2>
            </label>
          </div>
          <div className={styles.inputTable}>
            <input
              className={styles.inputText}
              id="4"
              type="email"
              name="email"
              required
            />
          </div>
          <div className={styles.labelTable}>
            <label htmlFor="date">
              <h2 className={styles.h2}>Дата народження</h2>
            </label>
          </div>
          <div className={styles.inputTable}>
            <input
              className={styles.inputText}
              id="5"
              type="date"
              // value="2004-09-1"
              name="dateOfBirthsday"
              required
            />
            {/* //дату на 18 лет до текущей
            // max="2004-02-01" */}
          </div>
          <div className={styles.labelTable}>
            <label htmlFor="favouriteBeer">
              <h2 className={styles.h2}>Улюблене пиво</h2>
            </label>
          </div>
          <div className={styles.inputTable}>
            <input
              className={styles.inputText}
              id="6"
              rows="1"
              type="chose"
              name="favouriteBeer"
              required
            />
          </div>
          <div className={styles.labelTable}>
            <label htmlFor="password">
              <h2 className={styles.h2}>Пароль</h2>
            </label>
          </div>
          <div className={styles.inputTable}>
            <input
              className={styles.inputText}
              type="password"
              id="7"
              name="password"
              required
            />
          </div>
          <div className={styles.labelTable}>
            <label htmlFor="confirmpassword">
              <h2 className={styles.h2}>Повторіть пароль</h2>
            </label>
          </div>
          <div className={styles.inputTable}>
            <input
              className={styles.inputConfirmPassword}
              type="password"
              id="8"
              required
            />
          </div>
        </div>
        <div>
          {/* <input className={styles.buttonFinish} type="submit" /> */}
          <button className={styles.buttonFinish} type="submit">
            {" "}
            Відправити
          </button>
          {error && <h1>{error.payload.response.data.message}</h1>}
        </div>
      </form>
    </div>
  );
}
