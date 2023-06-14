import Menu from "../components/Menu/Menu";
import './App.css';

const Recuperar = () => (
    <>
    <Menu />
    <div className="App-logo">
    <img src="logoas3.png" alt=""/></div>  
    <div className="App-header">
    <div className="App-recuperar">
    <h1>Recupere sua senha</h1>
    <p>Insira seu email ou número de celular cadastrado</p>
    <input type="text" name="recuperar" placeholder="Email ou número de celular"></input>                         
    <input type="submit" value="Entrar" id='b-entrar' className="input-submit"/>
    <input type="submit" value="Cancelar" id='b-cancelar' className="input-submit"/>
        </div>
        </div>
    </>
);


export default Recuperar;