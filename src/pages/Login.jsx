import Menu from "../components/Menu/Menu";
import './App.css';
import { Link } from "react-router-dom";

const Login = () => (
    <><div className="App">
    <Menu />
    </div>
    <div className="App-logo">
    <img src="logoas3.png"/></div>
    <div className="App-header">
    <h1>
        Login
    </h1>
    <input type="email" value="Email"></input>
    <input type="text" value="Senha"></input>
    <label>
    <input type="checkbox" value="Manter" className="input-manter"></input> 
    Manter-se conectado?</label>
    <a
          className="a-logo"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Esqueceu a senha?
        </a>
        <button>Enviar</button>
        <Link to="/cadastro">
          Cadastre-se</Link>
        </div>

    </>
);


export default Login;