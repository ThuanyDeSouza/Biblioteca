import React from 'react'
import ConsultaLivros from './pages/consultaLivros';
import CadastroLivros from './pages/cadastroLivros';
import {Route, Routes, BrowserRouter} from "react-router-dom"

const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route element = { <ConsultaLivros/> } path="/consulta" exact />
            <Route element = { <CadastroLivros/> }  path="/cadastro" exact />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default AppRouter;