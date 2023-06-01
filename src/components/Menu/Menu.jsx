import { Link } from "react-router-dom";
import { MeuNav } from "./style";
import "./App.css"
import logo from "./logoas3.png"
const Menu = () => (
    <MeuNav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/AberturaTicket">Abrir chamado</Link>
        <Link to="/Chamado_externo">Chamados Externos</Link>

    </MeuNav>
);
export default Menu;

