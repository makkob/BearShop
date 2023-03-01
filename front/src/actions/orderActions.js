import jwt_decode from "jwt-decode";
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_SUCCESS,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_MY_RESET,
  ORDER_LIST_ALL_REQUEST,
  ORDER_LIST_ALL_SUCCESS,
  ORDER_LIST_ALL_FAIL,
  ORDER_DELIVER_SUCCESS,
  ORDER_DELIVER_REQUEST,
  ORDER_DELIVER_FAIL,
  ORDER_DELIVER_RESET,
} from "../constants/orderConstants";
import axios from "axios";

export const addToOrder = (formInfo) => async (dispatch) => {
  console.log("data", formInfo);
  const { token } = JSON.parse(localStorage.getItem("userInfo"));
  try {
    dispatch({ type: ORDER_CREATE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { basketId } = jwt_decode(token);
    URL = process.env.REACT_APP_API_URL + `api/order/create/${basketId}`;
    const { data } = await axios.post(URL, JSON.stringify(formInfo), config);
    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: error,
    });
  }
};

export const listMyOrder = () => async (dispatch, getState) => {
  const { token } = JSON.parse(localStorage.getItem("userInfo"));
  const { basketId } = jwt_decode(token);

  URL = process.env.REACT_APP_API_URL + `api/order/${basketId}`;

  try {
    dispatch({ type: ORDER_LIST_MY_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(URL, config);
    dispatch({
      type: ORDER_LIST_MY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_LIST_MY_FAIL,
      payload: error,
    });
  }
};
