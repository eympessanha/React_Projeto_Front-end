import logo from './minha_foto.jpg';
import './App.css';
import Menu from '../components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <header className="App-header">
        <img src="logoas3.png"/>
        <p>Login</p>
        <input type="text" value="Email"></input>
        <input type="text" value="Senha"></input>
        <a
          className="App-Senha"
          href="https://as3engenharia.com.br/"
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
        
        </a>
      </header>
    </div>
  );
}

export default App;
