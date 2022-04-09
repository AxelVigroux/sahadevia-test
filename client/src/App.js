import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Navbar from "./components/NavBar";

import Home from "./views/Home";
import UserForm from "./views/users/userForm";
import DashBoard from "./views/users/Dashboard";

const App = () => {
  return (
    <>
      <BrowserRouter basename={process.env.REACT_APP_BASENAME || ""}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact={true}
            element={<Navigate to="/home" replace />}
          />
          <Route path="/home" exact={true} element={<Home />} />
          <Route path="/userForm" exact={true} element={<UserForm />} />
          <Route path="/userDashboard" exact={true} element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
