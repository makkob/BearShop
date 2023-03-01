import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./UserInfo.module.css";
import { updateUserInfo } from "../../../actions/userAction";

export default function UserInfo() {
  const dispatch = useDispatch();

  const { payload } = useSelector((state) => state.userInfo.token);
  // В state.userInfo так же хранится error

  const [setEdit, onSetEdit] = useState();

  const {
    firstName,
    secondName,
    dateOfBirthsday,
    email,
    phone,
    favouriteBeer,
    id,
  } = payload;

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
      <Button variant="success" className={styles.button} type="submit">
        Зберегти
      </Button>{" "}
    </div>
  );
  // Отправить измененную инфу про юзера
  const onEdit = (evt) => {
    evt.preventDefault();

    let data = {};
    const limit = evt.target.length;

    for (let i = 0; i < limit; i++) {
      const element = evt.target[i];
      if (element.name !== "") {
        data[element.name] = element.value;
      }
    }

    dispatch(updateUserInfo(data));
  };

  return (
    <div className={styles.table}>
      <h3>Особиста інформація {editIcon}</h3>
      <form onSubmit={onEdit}>
        <Table striped bordered hover size="sm">
          <tbody>
            <tr>
              <td>
                <b>Імя</b>
              </td>
              <td>
                {setEdit ? (
                  <input name="firstName" defaultValue={firstName} />
                ) : (
                  firstName
                )}
              </td>
            </tr>
            <tr>
              <td>
                <b>Прізвище</b>
              </td>
              <td>
                {setEdit ? (
                  <input name="secondName" defaultValue={secondName} />
                ) : (
                  secondName
                )}
              </td>
            </tr>
            <tr>
              <td>
                <b>Дата народження</b>
              </td>
              <td>
                {setEdit ? (
                  <input
                    name="dateOfBirthsday"
                    defaultValue={dateOfBirthsday}
                  />
                ) : (
                  dateOfBirthsday
                )}
              </td>
            </tr>
            <tr>
              <td>
                <b>Електронна адреса</b>
              </td>
              <td>{setEdit ? <input defaultValue={email} /> : email}</td>
            </tr>
            <tr>
              <td>
                <b>Номер телефону</b>
              </td>
              <td>
                {setEdit ? <input name="phone" defaultValue={phone} /> : phone}
              </td>
            </tr>
            <tr>
              <td>
                <b>Улюблене пиво</b>
              </td>
              <td>
                {setEdit ? (
                  <input name="favouriteBeer" defaultValue={favouriteBeer} />
                ) : (
                  favouriteBeer
                )}
              </td>
            </tr>
            <tr>
              <td>
                <b>ID</b>
              </td>
              <td>{id}</td>
            </tr>
          </tbody>
        </Table>
        {setEdit && saveButton}
      </form>
    </div>
  );
}
