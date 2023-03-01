import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./StickyFooter.module.css";

export default function StickyFooter() {
  // const phoneIcon = (
  //   <FontAwesomeIcon
  //     icon={faPhone}
  //     color="black"
  //     className={styles.phoneIcon}
  //   />
  // );
  const arrowUpIcon = (
    <FontAwesomeIcon
      icon={faArrowUp}
      color="#efeee9"
      size="xl"
      className={styles.arrow}
    />
  );
  const arrowDownIcon = (
    <FontAwesomeIcon
      icon={faArrowDown}
      color="#efeee9"
      size="xl"
      className={styles.arrow}
    />
  );
  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    footer.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };
  const scrollToHeader = () => {
    const body = document.body;
    body.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };
  return (
    <footer className={styles.topfooter}>
      <button
        className={styles.buttonLeft}
        onClick={() => {
          scrollToFooter();
        }}
      >
        {arrowDownIcon}
      </button>
      <div>
        <a href="" className={styles.number}>
          +380639356317
        </a>
      </div>
      <button
        className={styles.buttonRight}
        onClick={() => {
          scrollToHeader();
        }}
      >
        {arrowUpIcon}
      </button>
    </footer>
  );
}
