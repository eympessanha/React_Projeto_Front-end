import { Link } from "react-router-dom";
import { MeuNav } from "./style";

const Menu = () => (
    <MeuNav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/Chamado_externo">Chamados Externos</Link>
        <Link to="/dashboard">Dashboard</Link>
    </MeuNav>
);

export default Menu;