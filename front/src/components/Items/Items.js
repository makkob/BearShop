import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";

import { NavLink } from "react-router-dom";

import { listItems } from "../../actions/itemActions";
import { addToBasket } from "../../actions/basketActions";

import { Placeholder } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

import PlaceholderItems from "./Placeholders";

import "react-toastify/dist/ReactToastify.css";
import styles from "./Items.module.css";

export default function Items() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.itemState);
  const { products, loading } = productList;
  const [setBeer, onSetBeer] = useState();
  const { category } = useSelector((state) => state.navState);
  const userInfo = useSelector((state) => state.userInfo);
  const isAuth = !!userInfo.token;

  const toastContainer = (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
  const basketIcon = (
    <FontAwesomeIcon icon={faBasketShopping} color="white" size="xl" />
  );

  useEffect(() => {
    dispatch(listItems());
  }, []);

  useEffect(() => {
    if (products) {
      let data = {};
      products.map(({ id }) => {
        data[id] = "1";
      });
      onSetBeer(data);
    }
  }, [products]);

  const onAddToBasket = (id) => {
    if (!isAuth) {
      toast.error(
        "Помилка! Для того щоб користуватися кошиком потрібно увійти",
        {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      return;
    }

    dispatch(addToBasket(id, setBeer));
    toast.success("Товар додано до кошику!", {
      position: "bottom-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const plusLiters = (event) => {
    event.target.nextSibling.nextSibling.stepUp();
    const { id, value } = event.target.nextSibling.nextSibling;
    onSetBeer({
      ...setBeer,
      [id]: value,
    });
  };
  const minusLiters = (event) => {
    event.target.nextSibling.stepDown();
    const { id, value } = event.target.nextSibling;
    onSetBeer({
      ...setBeer,
      [id]: value,
    });
  };

  return (
    <>
      <h2 className={styles.h2} id="products">
        Асортимент
      </h2>
      <div className={styles.products}>
        <div className={styles.items}>
          {products &&
            products.map(
              (product) => {
               const { name, id, price, oldPrice, rating, img, typeId, info }= product
                if (
                  category === typeId ||
                  category === 9 ||
                  category === undefined
                ) {
                  const image = (
                    <img
                      className={styles.itemsIMG}
                      src={
                        img
                          ? require(`../../../../back_pyvnagavan/static/${img}`)
                          : "https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg"
                      }
                      alt={name}
                    />
                  );

                  let beerAmount;
                  if (setBeer) {
                    beerAmount = setBeer[id];
                  }

                  return (
                    <div className={styles.card1}>
                      <h3 className={styles.h3}>{name}</h3>
                      {/* <NavLink to={`/item/${id}`}> */}
                      <div className={styles.item} key={name}>
                        <NavLink
                          to={`/item/${id}`}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          {image}
                        </NavLink>
                        <div className={styles.buySection}>
                          <div className={styles.prices}>
                            <strike>{oldPrice * beerAmount} грн</strike>
                            <hr />

                            <span className={styles.number}>
                              {price * beerAmount} грн
                            </span>
                          </div>

                          <div>
                            <button
                              className={styles.beerIncrement}
                              onClick={(e) => {
                                plusLiters(e);
                              }}
                            >
                              +
                            </button>
                            <button
                              className={styles.beerDecrement}
                              onClick={(e) => {
                                minusLiters(e);
                              }}
                            >
                              -
                            </button>
                            <input
                              className={styles.counter}
                              id={id}
                              type="number"
                              min="0.5"
                              max="20"
                              step="0.5"
                              // value={quantity}
                              defaultValue={1}
                            />
                          </div>

                          <button
                            onClick={() => {
                              onAddToBasket(id);
                            }}
                            type="button"
                            className={styles.button}
                          >
                            {isAuth ? basketIcon : "Потрібно увійти"}
                          </button>
                        </div>
                        <div className={styles.description}>
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
                      </div>
                      {/* </NavLink> */}
                    </div>
                  );
                }
              }
            )}
          {loading && <PlaceholderItems />}
          {/* {loading && <h1> Завантажується пивко ... </h1>} */}
        </div>
        {toastContainer}
      </div>
    </>
  );
}
