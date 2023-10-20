import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import CreateLoan from "../../Pages/Create/CreateLoan";
import LoanDetails from "../../Pages/Details/LoanDetails";
import RepayLoan from "../../Pages/Repay/RepayLoan";
import Login from "../../Pages/Login/Login";

const Routers = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route exact path="/create" element={<CreateLoan />} />
      <Route exact path="/details" element={<LoanDetails />} />
      <Route exact path="/repay" element={<RepayLoan />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
};

export default Routers;
