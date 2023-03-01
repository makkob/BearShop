import jwt_decode from "jwt-decode";
import {
  BASKET_CREATE_REQUEST,
  BASKET_CREATE_SUCCESS,
  BASKET_CREATE_FAIL,
  BASKET_DELETE_REQUEST,
  BASKET_DELETE_SUCCESS,
  BASKET_DELETE_FAIL,
  CLEAR_BASKET_SUCCESS,
  CLEAR_BASKET_FAIL,
  BASKET_DETAILS_REQUEST,
  BASKET_DETAILS_SUCCESS,
  BASKET_DETAILS_FAIL,
  BASKET_PAY_REQUEST,
  BASKET_PAY_SUCCESS,
  BASKET_PAY_FAIL,
  BASKET_LIST_MY_REQUEST,
  BASKET_LIST_MY_FAIL,
  BASKET_LIST_MY_SUCCESS,
  BASKET_LIST_ALL_REQUEST,
  BASKET_LIST_ALL_SUCCESS,
  BASKET_LIST_ALL_FAIL,
  BASKET_DELIVER_REQUEST,
  BASKET_DELIVER_SUCCESS,
  BASKET_DELIVER_FAIL,
} from "../constants/basketConstants";
import axios from "axios";

export const addToBasket = (itemId, setBeer) => async (dispatch) => {
  // console.log("itemId", itemId);
  // console.log("setBeer", setBeer);
  const { token } = JSON.parse(localStorage.getItem("userInfo"));
  try {
    dispatch({ type: BASKET_CREATE_REQUEST });

    const order = {
      itemId: itemId,
      quantity: setBeer[itemId],
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { basketId } = jwt_decode(token);

    URL = process.env.REACT_APP_API_URL + `api/basket/item/${basketId}`;
    const { data } = await axios.post(URL, JSON.stringify(order), config);
    dispatch({
      type: BASKET_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BASKET_CREATE_FAIL,
      payload: error,
    });
  }
};

export const listMyBasket = () => async (dispatch, getState) => {
  const { token } = JSON.parse(localStorage.getItem("userInfo"));
  const { basketId } = jwt_decode(token);

  URL = process.env.REACT_APP_API_URL + `api/basket/item/${basketId}`;

  try {
    dispatch({ type: BASKET_LIST_MY_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(URL, config);
    dispatch({
      type: BASKET_LIST_MY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BASKET_LIST_MY_FAIL,
      payload: error,
    });
  }
};

export const deleteFromBasket = (id) => async (dispatch) => {
  const { token } = JSON.parse(localStorage.getItem("userInfo"));
  const { basketId } = jwt_decode(token);
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: { id: id },
    };

    URL = process.env.REACT_APP_API_URL + `api/basket/item/${basketId}`;
    const { data } = await axios.delete(URL, config);

    dispatch({
      type: BASKET_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BASKET_DELETE_FAIL,
      payload: error,
    });
  }
};

export const cleareBasketState = () => async (dispatch) => {
  try {
    dispatch({
      type: BASKET_DELETE_SUCCESS,
      payload: {},
    });
  } catch (error) {
    dispatch({
      type: BASKET_DELETE_FAIL,
      payload: error,
    });
  }
};
