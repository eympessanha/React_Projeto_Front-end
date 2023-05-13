import Menu from "../components/Menu/Menu";
import './Login.css'

function Sobre() {
    return (
        <><></><Menu /><div className="App">

            <header className="App-header">
                <img src="logoas3.png" />
                <p>Login</p>
                <input type="text" value="Email"></input>
                <input type="text" value="Senha"></input>
                <a
                    className="App-Senha"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Esqueceu a senha?
                </a>

                <button>Enviar</button>

                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div></>
    );
}



export default Sobre;