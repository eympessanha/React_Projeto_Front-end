import { Link } from "react-router-dom";
import { MeuNav } from "./style";
import "./App.css"
import logo from "./logoas3.png";

const Menu = () => (
  <><link rel="stylesheet" href="style.css" />
  <header>
    <MeuNav>
      <div class="mobile-menu">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
        <ul class="nav-list">
        <a class="logo" href="/"> <img src={logo} alt="logo" /></a>
          <li><a href="/">Login</a></li>
          <li><a href="/">Dashboard</a></li>
          <li><a href="/">Contato</a></li>
        </ul>
      
    </MeuNav>
  </header></>
);

export default Menu;
