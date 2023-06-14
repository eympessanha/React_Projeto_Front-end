import { Link } from "react-router-dom";
import { MeuNav } from "./style";
import "./App.css"

const Menu = () => (
    <MeuNav className="menu">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/AberturaTicket">Abrir chamado</Link>
        <Link to="/Chamado_externo">Chamados Externos</Link>
        <Link to="/Chamados_internos">Chamados Internos</Link>
    </MeuNav>
)
export default Menu;


