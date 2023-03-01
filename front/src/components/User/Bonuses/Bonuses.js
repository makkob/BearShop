import React from "react";

import { Table } from "react-bootstrap";

import styles from "./Bonuses.module.css";

export default function Bonuses() {
  return (
    <div className={styles.table}>
      <h3>Список бонусів</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Бонус</th>
            <th>Знижка</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SaSDsaSAGgdsSD</td>
            <td>12 UAH</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
