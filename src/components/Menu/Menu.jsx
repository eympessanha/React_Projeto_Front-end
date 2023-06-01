import { Link } from "react-router-dom";
import { MeuNav } from "./style";


const Menu = () => (
    <MeuNav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
<<<<<<< HEAD
        <Link to="/AberturaTicket">Abrir chamado</Link>
=======
        <Link to="/Chamado_externo">Chamados Externos</Link>
>>>>>>> 97fbda0f7750162d097679556daf190f86c2c02b
    </MeuNav>
);

export default Menu;