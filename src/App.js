import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDetail from "./pages/UserDetail";
import UserContext from "./context/UserContext";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <UserContext>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<UserDetail />} />
          </Routes>
        </UserContext>
      </BrowserRouter>
      ,
    </div>
  );
};

export default App;
