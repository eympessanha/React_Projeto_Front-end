import { Link } from "react-router-dom";
import { MeuNav } from "./style";


const Menu = () => (
    <MeuNav>
        <Link to="/"></Link>
        <Link to="/sobre"></Link>
    </MeuNav>
);

export default Menu;