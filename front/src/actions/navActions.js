import axios from "axios";
import {
  NAV_LIST_REQUEST,
  NAV_LIST_SUCCESS,
  NAV_LIST_FAIL,
  NAV_CATEGORY_REQUEST,
  NAV_CATEGORY_SUCCESS,
  NAV_CATEGORY_FAIL,
} from "../constants/navConstants";

export const typeList = () => async (dispatch) => {
  const URL = process.env.REACT_APP_API_URL + `api/type`;
  try {
    dispatch({ type: NAV_LIST_REQUEST });
    const { data } = await axios.get(URL);
    dispatch({
      type: NAV_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NAV_LIST_FAIL,
      payload: error,
    });
  }
};

export const setCategory = (typeId) => async (dispatch) => {
  // console.log("action ", name);
  try {
    dispatch({
      type: NAV_CATEGORY_SUCCESS,
      payload: typeId,
    });
  } catch (error) {
    dispatch({
      type: NAV_CATEGORY_FAIL,
      payload: error,
    });
  }
};
