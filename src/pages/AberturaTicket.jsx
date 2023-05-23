import Menu from "../components/Menu/Menu";
import './App.css';

function AberturaTicket() {
    <div>
        <nav><Menu/></nav>
        <div><img src="logoas3.png" /></div>
        <h1>Abertura de chamados</h1>
        <main>
            <p>Solicitante<input type="text" id="silicitante" /></p>
            <p>Telefone<input type="number" id="telefone" /></p>
            <p>Departamento<input type="text" id="departamento" /></p>
            <p>Tipo de trabalho<input type="text" id="tipotrabalho" /></p>
            <p>Descrição<input type="text" id="descricao" /></p>
            <input type="button" value="enviar" id="enviar" />
        </main>
    </div>
}

export default AberturaTicket