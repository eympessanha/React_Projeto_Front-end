import Menu from "../components/Menu/Menu";
import './App.css';


const Cadastro = () => (
    <>
    <Menu />
     <div className="App-logo">
    <img src="logoas3.png"/></div>
    <div className="App-header">
    <div className="App-cadastro">
    <h1>Cadastro</h1>
    <input type="text" name='nome' placeholder='Nome' autoFocus />
    <input type="text" name='sobrenome' placeholder='Sobrenome' autoFocus />
    <input type="date" name="data" placeholder='Nascimento' autoFocus/>
    <input type="email" name='nome' placeholder='Email' autoFocus />
    <input type="password" name='senha' placeholder='Senha (8 caracteres mínimos)' autoFocus />
    <label>
    <input type="checkbox" value="Aceito" className="input-manter"></input> 
    Aceito os Termos de Uso</label>
    <input type="submit" value="Concluir" id='b-entrar' className="input-submit"/>
        </div>
        </div>
    </>
);


export default Cadastro;