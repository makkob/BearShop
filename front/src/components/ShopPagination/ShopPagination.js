import React from "react";

import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";

import styles from "./ShopPagination.module.css";

export default function ShopPagination() {
  return (
    <div className={styles.paginationMenu}>
      {/* <Button variant="secondary" className={styles.button}>Завантажити більшe</Button> */}
      {/* <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination> */}
    </div>
  );
}
