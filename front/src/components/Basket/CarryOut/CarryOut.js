import React from "react";

import styles from "./CarryOut.module.css";

export default function CarryOut() {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <label className={styles.label}>
          Контактні дані:
          <input
            type="text"
            name="firstName"
            placeholder="Ім'я"
            required
            className={styles.input}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            required
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email "
            required
            className={styles.input}
          />
        </label>
      </div>

      <div className={styles.block}>
        <label className={styles.label}>
          Ресторан:
          <select name="restaurant" className={styles.input}>
            <option value="card">Пивна Гавань біля сільпо</option>
          </select>
        </label>
      </div>

      <div className={styles.block}>
        <label className={styles.label}>
          {" "}
          Час:
          <input
            type="date"
            name="date"
            placeholder="День"
            className={styles.input}
          />
          <input
            type="time"
            name="time"
            placeholder="Час"
            className={styles.input}
          />
          <label>
            Якнайшвидше
            <div className={styles.checkbox}>
              <input type="checkbox" name="asap" /> <div></div>
            </div>
          </label>
        </label>
      </div>

      <div className={styles.block}>
        <label className={styles.label}>
          Оплата:
          <input
            type="text"
            name="voucher"
            placeholder="Купон на знижку"
            className={styles.input}
          />
          <input
            type="number"
            name="change"
            placeholder="Решта з"
            className={styles.input}
          />
          <label className={styles.label}>
            Без решти
            <div className={styles.checkbox}>
              <input type="checkbox" name="noChange" /> <div></div>
            </div>
          </label>
          <select name="payment" className={styles.input}>
            <option value="card">Оплата карткою онлайн</option>
            <option value="cash">Оплата готівкою</option>
          </select>
        </label>
      </div>
    </div>
  );
}
