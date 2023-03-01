import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./UserAdress.module.css";

export default function UserInfo() {
  // const dispatch = useDispatch();

  const { payload } = useSelector((state) => state.userInfo.token);
  // В state.userInfo так же хранится error

  const [setEdit, onSetEdit] = useState();

  //  useEffect(() => {
  //     onSetEdit(true);
  //   }, [setEdit]);

  const addInputs = () => {
    if (setEdit) {
      onSetEdit(false);
    } else {
      onSetEdit(true);
    }
  };

  const editIcon = (
    <FontAwesomeIcon
      icon={faEdit}
      className={styles.editIcon}
      size="1x"
      onClick={() => {
        addInputs();
      }}
    />
  );

  const saveButton = (
    <div className={styles.buttonDiv}>
      <Button
        variant="success"
        className={styles.button}
        onClick={() => {
          addInputs();
        }}
      >
        Зберегти
      </Button>{" "}
    </div>
  );

  return (
    <div className={styles.table}>
      <h3>Адреса 1 {editIcon}</h3>

      <Table striped bordered hover size="sm">
        <tbody>
          <tr>
            <td>
              <b>Адреса</b>
            </td>
            <td>{setEdit ? <input defaultValue={"Адреса"} /> : "Адреса"}</td>
          </tr>
          <tr>
            <td>
              <b>Будинок</b>
            </td>
            <td>{setEdit ? <input defaultValue={"Будинок"} /> : "Будинок"}</td>
          </tr>
          <tr>
            <td>
              <b>Квартира</b>
            </td>
            <td>
              {setEdit ? <input defaultValue={"Квартира"} /> : "Квартира"}
            </td>
          </tr>
          <tr>
            <td>
              <b>Код</b>
            </td>
            <td>{setEdit ? <input defaultValue={"Код"} /> : "Код"}</td>
          </tr>
          <tr>
            <td>
              <b>Поверх</b>
            </td>
            <td>{setEdit ? <input defaultValue={"Поверх"} /> : "Поверх"}</td>
          </tr>
        </tbody>
      </Table>
      {setEdit && saveButton}
    </div>
  );
}
