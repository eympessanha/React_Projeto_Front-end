import Menu from "../components/Menu/Menu";
import Cartao from "../components/Cartao/Cartao";
import * as S from "./style";
import CabecalhoCartao from "../components/Cartao/CabecalhoCartao";
import './App.css';

const Abertura_Chamado = () => {

    return(
        <>
          <Menu />
          <div className="App-logo">
          <img src="logoas3.png" alt=""/></div>
          <div className="chamados">
          <S.MainContainer>
            <S.TitleContainer>
              <h1>Chamado externos</h1>
            </S.TitleContainer>
            <S.CardContainer>
              <CabecalhoCartao/>
              <Cartao name={"Fulano"} email={"teste@teste.com"} depart={"Comercial"} numb={"28/02/2023"} estado={"Em andamento"} prior={"Alto"} atrib={"Bruno"} criado={"Pedro"}/>
              <Cartao name={"João Melão"} email={"teste@teste.com"} depart={"Tecnologia"} numb={"11/04/2023"} estado={"Resolvido"} prior={"Alto"} atrib={"Jorge"} criado={"Flavia"}/>
              <Cartao name={"Ciclano"} email={"teste@teste.com"} depart={"Operação"} numb={"09/05/2023"} estado={"Em andamento"} prior={"Critico"} atrib={"Pedro"} criado={"Luiz"}/>
              <Cartao name={"Beltrano"} email={"teste@teste.com"} depart={"Tecnologia"} numb={"14/06/2023"} estado={"Resolvido"} prior={"Médio"} atrib={"Leonardo"} criado={"André"}/>
              <Cartao name={"Creusa"} email={"teste@teste.com"} depart={"Comercial"} numb={"06/07/2023"} estado={"Pausado"} prior={"Baixo"} atrib={"Carolina"} criado={"Fernanda"}/>
            </S.CardContainer>
          </S.MainContainer>
          </div>
      </>
      );
}




export default Abertura_Chamado;
