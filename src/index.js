import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Sobre from './pages/Sobre';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import AberturaTicket from './pages/AberturaTicket';
import Recuperar from './pages/Recuperar';
import Chamados_externo from './pages/Chamados_externos';
import Chamados_internos from './pages/Chamados_internos';




const rotas = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "sobre",
    element: <Sobre />
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
    element: <AberturaTicket />
  },
  {
    path: "recuperar",

    element: <Recuperar />
  },

  {
    path: "Chamado_externo",
    element: <Chamados_externo/>

  },
  {
    path: "Chamados_internos",
    element: <Chamados_internos/>


  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rotas} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
