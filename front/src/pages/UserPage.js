import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";
import Footer from "../components/Footer";

import User from "../components/User";
// import { connect } from "react-redux";

const UserPage = () =>  {
  return (
    <>
      <Header />
        <User />
      
      <div style={{ bottom: "0", width: "100%", height: "35vh" }} />

      <Footer />
    </>
  );
}
export default UserPage;