import logo from './Logo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Página inicial</h1>
        
        <nav>
            <a href="#">Login</a>
            <a href="#">Abertura de tickets</a>
            <a href="#">Cliente</a>
            <a href="#">Colavorador</a>
        </nav>
    </header>
      <main>
          <h1>Lista de chamados externos</h1>
          <table>
              <thead>
                  <tr>
                      <td>Cliente</td>
                      <td>E-mail</td>
                      <td>Número/Celular</td>
                      <td>Descrição</td>
                      <td>Estado</td>
                      <td>Atribuido a</td>
                      <td>Criado por</td>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td id="criente"></td>
                      <td id="email"></td>
                      <td id="numero"></td>
                      <td id="descrição"></td>
                      <td id="estado"></td>
                      <td id="atribuir"></td>
                      <td id="criado"></td>
                  </tr>
              </tbody>
          </table>
      </main>
    </div>
  );
}

export default App;
