import React from "react";

import { Placeholder } from "react-bootstrap";

import styles from "./PlaceholderItems.module.css";

export default function PlaceholderItems() {
  const itemPlaceholder = [];
  for (let i = 0; i < 6; i++) {
    itemPlaceholder.push(
      <div className={styles.item}>
        <Placeholder as="p" animation="glow">
          <Placeholder xs={12} />
        </Placeholder>{" "}
        <div className={styles.img}>
          <Placeholder as="p" animation="glow">
            <Placeholder xs={40} />
          </Placeholder>{" "}
        </div>
        <hr />
        <Placeholder as="p" animation="glow">
          <Placeholder xs={6} />
        </Placeholder>{" "}
        <Placeholder as="p" animation="glow">
          <Placeholder xs={4} />
        </Placeholder>{" "}
        <Placeholder as="p" animation="glow">
          <Placeholder xs={8} />
        </Placeholder>
        <button className={styles.button}>
          <Placeholder as="p" animation="glow">
            <Placeholder lg={16} bg="info" />
          </Placeholder>
        </button>
      </div>
    );
  }

  return <>{itemPlaceholder}</>;
}
