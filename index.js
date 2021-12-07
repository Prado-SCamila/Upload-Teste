import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
// import './global.css';
import App from './App';
import Login from './pages/Login';
import Home from './pages/Home';
import BibliotecaFuncionario from './pages/Biblioteca/Biblioteca';
import Listagem from './pages/VisualizarDocs/Doclist';
import UploadArquivo from './pages/EnvioDocumento/Envio';
import CadastroUsuario from './pages/CadastroUsuario/cadUsuario';

const isLogged = true;
const routing = (
  <BrowserRouter>
    <>
      <Routes>

        <Route exact path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/Biblioteca' element={<BibliotecaFuncionario/>} />
        <Route path='/EnvioDocumento' element={<UploadArquivo/>} />
        <Route path='/DocList' element={<Listagem/>} />
        <Route path="/CadastroUsuario" element={<CadastroUsuario/>}/>
   

      </Routes>
    </>
  </BrowserRouter>

)




