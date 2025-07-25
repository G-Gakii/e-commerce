import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/Signup/SignUp";
import SignIn from "./Pages/SignIn/SignIn";
import Wishlist from "./Pages/Wishlist/Wishlist";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
      </Routes>
    </>
  );
};

export default App;
