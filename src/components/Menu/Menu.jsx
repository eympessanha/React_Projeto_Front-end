import { Link } from "react-router-dom";
import { MeuNav } from "./style";


const Menu = () => (
    <MeuNav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/login">Login</Link>
<<<<<<< Updated upstream
=======
        <Link to="/AberturaTicket">Abrir chamado</Link>
        <Link to="/Chamado_externo">Chamados Externos</Link>
        <Link to="/Chamados_internos">Chamados Internos</Link>
>>>>>>> Stashed changes
    </MeuNav>
);

export default Menu;