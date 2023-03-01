import {
  BASKET_CREATE_REQUEST,
  BASKET_CREATE_SUCCESS,
  BASKET_CREATE_FAIL,
  BASKET_DELETE_REQUEST,
  BASKET_DELETE_SUCCESS,
  BASKET_DELETE_FAIL,
  BASKET_DETAILS_REQUEST,
  BASKET_DETAILS_SUCCESS,
  BASKET_DETAILS_FAIL,
  BASKET_PAY_REQUEST,
  BASKET_PAY_SUCCESS,
  BASKET_PAY_FAIL,
  BASKET_LIST_MY_REQUEST,
  BASKET_LIST_MY_FAIL,
  BASKET_LIST_MY_SUCCESS,
  BASKET_LIST_MY_RESET,
  BASKET_LIST_ALL_REQUEST,
  BASKET_LIST_ALL_SUCCESS,
  BASKET_LIST_ALL_FAIL,
  BASKET_DELIVER_REQUEST,
  BASKET_DELIVER_SUCCESS,
  BASKET_DELIVER_FAIL,
} from "../constants/basketConstants";

export const basketListMyReducer = (state = { itemInBasket: [] }, action) => {
  switch (action.type) {
    case BASKET_LIST_MY_REQUEST:
      return {
        loading: true,
      };
    case BASKET_LIST_MY_SUCCESS:
      return {
        loading: false,
        itemInBasket: action.payload,
      };

    case BASKET_LIST_MY_FAIL:
      return {
        loading: false,
        error: action.paylod,
      };

    case BASKET_DELETE_REQUEST:
      return {
        loading: true,
      };

    case BASKET_DELETE_SUCCESS:
      console.log("action_payload_DELETE_SUCCES", action.payload);
      return {
        loading: false,
        itemInBasket: action.payload,
      };

    case BASKET_DELETE_FAIL:
      return {
        loading: false,
        error: action.paylod,
      };

    default:
      return state;
  }
};
