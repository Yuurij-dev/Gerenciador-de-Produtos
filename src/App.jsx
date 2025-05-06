import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Produtos  from './Pages/DashboardPages/Produtos';
import Config from './Pages/DashboardPages/Configuracoes';
import UsuariosPage from './Pages/DashboardPages/Usuarios';
import NotFound from './Pages/NotFound';

import './App.css'
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/login'  element={<Login/>}/>
        <Route path='/dashboard'  element={<Dashboard/>}/>
        <Route path='/dashboard/produtos'  element={<Produtos/>}/>
        <Route path='dashboard/config' element={<Config/>}/>
        <Route path='dashboard/usuarios' element={<UsuariosPage/>} />
        <Route path='*'  element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}