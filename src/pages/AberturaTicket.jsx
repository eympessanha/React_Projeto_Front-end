import Menu from "../components/Menu/Menu";
import './App.css';
import styled from "styled-components";

const Pricipal = styled.div`
    font-size: 1em;
    text-align: left;
    width: 60%;
    height: 100%;
    margin: auto;
`;

const Paragrafo = styled.h1`
    font-size: 1em;
    text-align: left;
    margin: 10px;
`;

const Campo = styled.input`
    width: 96%;
    padding: 1%;
`;

const Descrição = styled.textarea`
    height: 140px;
    width: 96%;
    resize: none;
    margin: 1%;
    padding: 1%;
    border-radius: 10px;
`;

const Botão = styled.button`
    width: 98%;
    height: 3em;
`;

const AberturaTicket = () => (
    <><div className="App">
    <Menu />
    </div>
    <div className="App-logo">
    <img src="logoas3.png"/></div>
    <div className="App-header">
    <h1>
        Abrir chamado
    </h1>
            <Pricipal><Paragrafo>Solicitante</Paragrafo><Campo type="text" id="solicitante" placeholder="Ex: José Manuel"/>
            <Paragrafo>Telefone</Paragrafo><Campo type="number" id="telefone" placeholder="Ex: (21)97729-7015" />
            <Paragrafo>Departamento</Paragrafo><Campo type="text" id="departamento" placeholder="Ex: TI Suporte Local"/>
            <Paragrafo>Tipo de trabalho</Paragrafo><Campo type="text" id="tipotrabalho" placeholder="Ex: Troca de equipamento"/>
            <Paragrafo>Descrição</Paragrafo><Descrição name="descrição" id="descrição" cols="30" rows="20" placeholder="Diga qdual é o seu problema"></Descrição>
            <Botão>Enviar</Botão></Pricipal>
        </div>

    </>
);


export default AberturaTicket;