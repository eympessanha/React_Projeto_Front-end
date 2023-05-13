import './App.css';
import Menu from '../components/Menu/Menu';
import as3 from '../img/as3.svg'
function App(){
  return (
    <><Menu /> 
    <section className='app'>
      <h1>
        Bem-vindo ao <span>AS3</span>
      </h1>
        <p>Comece a criar seus chamados agora mesmo! </p>
        <a href="./app.jxs">Criar Chamados</a>
      <img src={as3} alt='AS3'/>


    </section></>
  )
}
  

export default App;