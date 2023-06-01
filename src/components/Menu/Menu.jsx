import { Link } from "react-router-dom";
import { MeuNav } from "./style";


const Menu = () => (
    <MeuNav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/Chamado_externo">Chamados Externos</Link>
    </MeuNav>
);

export default Menu;