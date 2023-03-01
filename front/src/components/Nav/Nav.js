import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Placeholder } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

import { typeList } from "../../actions/navActions";
import { setCategory } from "../../actions/navActions";

import styles from "./Nav.module.css";

export default function Nav() {
  const dispatch = useDispatch();
  const navList = useSelector((state) => state.navState);
  const userInfo = useSelector((state) => state.userInfo);
  const { loading, types } = navList;

  const basketIcon = <FontAwesomeIcon icon={faBasketShopping} color="white" />;
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

  useEffect(() => {
    dispatch(typeList());
  }, []);

  const navClick = (typeId) => {
    const productsScroll = document.getElementById("products");
    dispatch(setCategory(typeId));
    productsScroll.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };

  const errorClick = () => {
    toast.error("Помилка! Для того щоб користуватися кошиком потрібно увійти", {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const navButtonPlaceholder = [];
  for (let i = 0; i < 8; i++) {
    navButtonPlaceholder.push(
      <Placeholder as="p" animation="glow" className={styles.placeholder}>
        <Placeholder xs={12} />
      </Placeholder>
    );
  }

  return (
    <>
      <div className={styles.nav}>
        {loading && navButtonPlaceholder}
        {/* {loading && <p> Завантажується навігація </p>} */}
        {types &&
          types.map(({ name, id }) => {
            return (
              <button
                onClick={() => {
                  navClick(id);
                }}
                id={id}
                key={name}
                className={styles.categories}
              >
                {name}
              </button>
            );
          })}

        {userInfo.token ? (
          <Link to="/basket" style={{ textDecoration: "none" }}>
            <button className={styles.basket}>Кошик {basketIcon}</button>
          </Link>
        ) : (
          <button className={styles.basket} onClick={errorClick}>
            Кошик {basketIcon}
          </button>
        )}
      </div>{" "}
      {toastContainer}
    </>
  );
}
