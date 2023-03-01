import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listItems, getItem } from "../../actions/itemActions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";

import { Button } from "react-bootstrap";

import styles from "./ItemPageComponent.module.css";

export default function ItemPageComponent() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.itemPageState);
  const { product, loading } = state;

  useEffect(() => {
    const url = window.location.href; // получаем текущий URL-адрес
    const id = url.split("/").pop(); // разбиваем URL-адрес на части и получаем последнюю часть
    dispatch(getItem(id));

    // console.log(products);
  }, []);

  if (product) {
    const { name, img, oldPrice, price, promoPrice, rating, info } = product;

    let beerAmount = 1;
    const basketIcon = (
      <FontAwesomeIcon icon={faBasketShopping} color="white" size="xl" />
    );
    const isAuth = true;

    return (
      <>
        <NavLink to="/">
          <Button variant="success" className={styles.backButton}>
            Назад
          </Button>
        </NavLink>
        <div className={styles.container}>
          <img
            className={styles.img}
            src={
              img
                ? require(`../../../../back_pyvnagavan/static/${img}`)
                : "https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg"
            }
            alt={name}
          />
          <div className={styles.content}>
            <h2 className={styles.h2}>{name}</h2>
            <hr />
            <br />
            <div className={styles.longDescription}>
              <p>
                <strong>Про товар:</strong> {info} asdsad sadsds asd asd asd asd sda asd sd a sdd
                s dasasd asd sdsds addsa asd sdaasdasd asd sd asd dsa asdasd asd
                asd sad sad sad asd asd asd ads asd sd sdsdsdsdsdsdasd dsasda
                sdsdsdsdsd sdsa dsasdasdasdasd sdasd adsasdsd
              </p>
            </div>

            <div className={styles.grid}>
              {/* //////////////////////// */}

              <div className={styles.shortDescription}>
                {" "}
                <p className={styles.p}>
                  <b>Тип:</b> <i>Lager</i>
                </p>
                <p className={styles.p}>
                  <b>Щільність:</b> <i>22.2%</i>
                </p>
                <p className={styles.p}>
                  <b>Походження:</b> <i>123</i>
                </p>
                <p className={styles.p}>
                  <b>Міцність:</b> <i>4.5°</i>
                </p>
                <p className={styles.p}>
                  <b>Гіркота:</b> <i>15.4</i>
                </p>
                <p className={styles.p}>
                  <b>Колір:</b> <i>Пивний</i>
                </p>
              </div>

              {/* ////////////////////////////////////////////// */}

              <div className={styles.inputs}>
                <button className={styles.beerDecrement} onClick={(e) => {}}>
                  -
                </button>
                <input
                  className={styles.counter}
                  type="number"
                  min="0.5"
                  max="20"
                  step="0.5"
                  // value={quantity}
                  defaultValue={1}
                  disabled
                />
                <button className={styles.beerIncrement} onClick={(e) => {}}>
                  +
                </button>
              </div>

              {/* ////////////////////////////////////////////// */}

              <div className={styles.prices}>
                <hr />
                <strike>{oldPrice * beerAmount} грн</strike>
                <br />

                <span className={styles.number}>{price * beerAmount} грн</span>
              </div>

              {/* ////////////////////////////////////////////// */}

              <button
                onClick={() => {}}
                type="button"
                className={styles.button}
              >
                {isAuth ? basketIcon : "Потрібно увійти"}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
