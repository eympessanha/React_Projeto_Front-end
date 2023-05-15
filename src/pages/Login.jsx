import Menu from "../components/Menu/Menu";
import './App.css';

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
    <input type="text" value="Email"></input>
    <input type="text" value="Senha"></input>
    <a
          className="a-logo"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Esqueceu a senha?
        </a>
        <button>Enviar</button>
        </div>

    </>
);


export default Login;