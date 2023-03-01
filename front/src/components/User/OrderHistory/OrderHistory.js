import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";

import styles from "./OrderHistory.module.css";
import { listMyOrder } from "../../../actions/orderActions";

export default function OrderHistory() {
  const dispatch = useDispatch();
  const orderList = useSelector((state) => state.orderState);
  const { itemInOrder, loading } = orderList;

  useEffect(() => {
    dispatch(listMyOrder());
  }, []);
  if (itemInOrder) {
    return (
      <div className={styles.container}>
        <div className={styles.table}>
          <h3>Список замовлень</h3>
        </div>
        {itemInOrder.map(({ items, orderInfo }) => {
          const {
            apartment,
            asap,
            basketId,
            change,
            code,
            comments,
            createdAt,
            date,
            email,
            firstName,
            floor,
            house,
            id,
            noChange,
            payment,
            phone,
            price,
            restaurant,
            status,
            street,
            time,
            updatedAt,
            voucher,
          } = orderInfo;

          return (
            <div className={styles.table}>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Nº</th>
                    <th>Дата</th>
                    <th>Статус</th>
                    <th>Інформація про замовлення</th>
                    <th>Кошик</th>
                    <th>Інформація про оплату</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>{id}</b>
                    </td>
                    <td>
                      <b>{date}</b>
                    </td>
                    <td>{status}</td>
                    <td>
                      <ul>
                        {firstName && (
                          <li>
                            <b>Ім'я:</b> {firstName}
                          </li>
                        )}
                        {phone && (
                          <li>
                            <b>Номер:</b> {phone}
                          </li>
                        )}
                        {email && (
                          <li>
                            <b>Email:</b> {email}
                          </li>
                        )}
                        {street && (
                          <li>
                            <b>Адреса:</b> {street}
                          </li>
                        )}
                        {restaurant ? (
                          <li>
                            <b>Ресторан: </b>
                            {restaurant}
                          </li>
                        ) : (
                          "Доставка"
                        )}
                        {house && (
                          <li>
                            <b>Будинок:</b> {house}
                          </li>
                        )}
                        {apartment && (
                          <li>
                            <b>Квартира:</b> {apartment}
                          </li>
                        )}
                        {code && (
                          <li>
                            <b>Код домофону:</b> {code}
                          </li>
                        )}
                        {floor && (
                          <li>
                            <b>Поверх:</b> {floor}
                          </li>
                        )}
                        {comments && (
                          <li>
                            <b>Коментар:</b> {comments}
                          </li>
                        )}
                        {time && (
                          <li>
                            <b>Доставити о:</b> {asap && "якнайшвидше ,"} ≈{" "}
                            {time}
                          </li>
                        )}
                        {date && (
                          <li>
                            <b>Дата доставки:</b> {date}
                          </li>
                        )}
                        {voucher && (
                          <li>
                            <b>Купон:</b> {voucher}
                          </li>
                        )}
                      </ul>
                    </td>
                    <td>
                      <ul>
                        {items.map(({ product, quantity }) => {
                          const { price, name } = product;

                          return (
                            <li>
                              {" "}
                              {name}, <i>{quantity}л</i>{" "}
                            </li>
                          );
                        })}
                      </ul>
                    </td>
                    <td>
                      <ul>
                        {payment && (
                          <li>
                            <b>Спосіб оплати:</b> {payment}
                          </li>
                        )}

                        {price && (
                          <li>
                            <b>До сплати:</b> {price} грн
                          </li>
                        )}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          );
        })}
      </div>
    );
  }
}
