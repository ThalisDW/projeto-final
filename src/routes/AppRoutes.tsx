import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastroUser from "../pages/cadastroUser/CadastroUser";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import GlobalStyle from "../theme/globalStyle";

function AppRoutes() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/createUser' element={<CadastroUser />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
