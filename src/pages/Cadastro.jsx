import Menu from "../components/Menu/Menu";
import './App.css';


const Cadastro = () => (
    <><div className="App">
    <Menu />
    </div>
    <div className="App-logo">
    <img src="logoas3.png"/></div>
    <div className="App-header">
    <h1>
        Cadastro
    </h1>
    <input type="text" value="   Nome"></input>
    <input type="text" value="   Sobrenome"></input>
    <input type="date" value="   dd/mm/aa"></input>
    <input type="email" value="   Email"></input>
    <input type="text" value="   Senha"></input>
    <label>
    <input type="checkbox" value="Aceito" className="input-manter"></input> 
    Aceito os Termos de Uso</label>
        <button>Concluir</button>
        </div>

    </>
);


export default Cadastro;