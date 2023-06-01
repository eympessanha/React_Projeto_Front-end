import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import AberturaTicket from './pages/AberturaTicket';
import Recuperar from './pages/Recuperar';
import Chamados_externo from './pages/Chamados_externos';


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
    element: <AberturaTicket />},
  {
    path: "recuperar",
    element: <Recuperar />
  },
  {
    path: "Chamado_externo",
    element: <Chamados_externo/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rotas} />
  </React.StrictMode>
);
