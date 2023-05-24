import navbarStyles from "./Navbar.js"
import { useRef } from "react";
import { FaBars} from "react-icons/fa";
import Logo from "./logoas3.png";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const { nav, logo, navLink, navBtn} = navbarStyles;

  return (
    <header style={nav}>
      <h3 style={logo}>
        <img src={Logo} alt="Logo" />
      </h3>
      <nav ref={navRef}>
        <a href="/" style={navLink}>
          Home
        </a>
        <a href="/tickets" style={navLink}>
          Tickets
        </a>
        <a href="/abertura-de-chamados" style={navLink}>
          Abertura de Chamados
        </a>
      </nav>
      <button className="nav-btn" onClick={showNavbar} style={navBtn}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
