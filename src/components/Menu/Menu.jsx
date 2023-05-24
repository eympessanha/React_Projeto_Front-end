import { Link } from "react-router-dom";
import { MeuNav } from "./style";


const Menu = () => (
    <MeuNav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/login">Login</Link>
        <Link to="/AberturaTicket">Abrir chamado</Link>
    </MeuNav>
);

export default Menu;