import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { itemListReducer, itemPageState } from "./reducers/itemReducers";
import { userLoginReducer } from "./reducers/userReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { navListReducer } from "./reducers/navReducers";
import { basketListMyReducer } from "./reducers/basketReducers";
import { currentOrderReducer, orderReducer } from "./reducers/orderReducers";

let rootReducer = combineReducers({
  itemState: itemListReducer,
  itemPageState: itemPageState,
  userInfo: userLoginReducer,
  navState: navListReducer,
  basketState: basketListMyReducer,
  currentOrderState: currentOrderReducer,
  orderState: orderReducer,
});

const initialState = {
  itemState: {},
  itemPageState: {},
  userInfo: {},
  navState: {},
  basketState: {},
  currentOrderState: {},
  orderState: {},
};

const middleware = [thunk];

let store = createStore(
  rootReducer,
  initialState,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
