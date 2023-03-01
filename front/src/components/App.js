import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
// import { SHOP_ROUTE } from "../utils/consts";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import jwt_decode from "jwt-decode";

import NotFound from "../pages/NotFoundPage";

import { authRoutes, publicRoutes } from "../routes";
import { USER_LOGIN_SUCCESS } from "../constants/userConstants";

export default function App() {
  // const userInfo = useSelector((state) => state.userInfo);
  // const { token } = userInfo;

  const token = localStorage.userInfo;
  let isAuth = !!token;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      const data = jwt_decode(token);
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });
    }
  }, []);
  return (
    <Router>
      <Switch>
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
        {/* <Redirect to={SHOP_ROUTE} /> */}
        {isAuth &&
          authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} component={Component} exact />
          ))}
        <Route component={NotFound} />
        //123
      </Switch>
    </Router>
  );
}
