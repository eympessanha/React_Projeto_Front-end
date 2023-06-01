import { Link } from "react-router-dom";
import { MeuNav } from "./style";
import "./App.css"
import logo from "./logoas3.png"

const Menu = () => {
  return (
    <nav className="menu"> 
      <ul>
        <li><a href="#"><img src="{logo}" alt="logo"/></a></li>
        <li><a href="/">Home</a></li>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Chamados</a></li>
        <li><a href="login">Login</a></li>
      </ul>
    </nav>
  );
};



