import Menu from "../components/Menu/Menu";
import './App.css';
import { Link } from "react-router-dom";

const Login = () => (
    <>
    <Menu />
    <div className="App-logo">
    <img src="logoas3.png"/></div>  
    <div className="App-header">
    <div className="App-login">
    <h1>Login</h1>
                                
    <input type="text" name='nome' placeholder='Email/Nome de Usuário' autoFocus />  
    <input type="password" name='senha' placeholder='Senha' /> 
    <label>
    <input type="checkbox" value="Manter" className="input-manter"></input> 
    Manter-se conectado?</label>                            
    <Link to="/recuperar">
        Esqueceu a senha?</Link>

        <Link to="/cadastro" className="link-n">
          Cadastre-se</Link>
    <input type="submit" value="Entrar" id='b-entrar' className="input-submit"/>
    
        </div>
        </div>
    </>
);


export default Login;