import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import AberturaTicket from './pages/AberturaTicket';
import Recuperar from './pages/Recuperar';
import ChamadosExterno from './pages/Chamados_externos';
import ChamadosInternos from './pages/Chamados_internos';
import Dashboard from "./pages/Dash";


const rotas = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "cadastro",
    element: <Cadastro />
  },
  {
    path: "AberturaTicket",

    element: <AberturaTicket />
  },

    { path: "recuperar",
    element: <Recuperar/>
  },
  {
    path: "Chamado_externo",
    element: <ChamadosExterno/>

  },
  {
    path: "Chamados_internos",
    element: <ChamadosInternos/>

  },
  {
    path: "Dashboard",
    element: <Dashboard/>

  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rotas} />
  </React.StrictMode>
);
