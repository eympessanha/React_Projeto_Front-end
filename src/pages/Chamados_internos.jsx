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
          <img src="logoas3.png"/></div>
          <div className="chamados">
          <S.MainContainer>
            <S.TitleContainer>
              <h1>Chamado internos:</h1>
            </S.TitleContainer>
            <S.CardContainer>
              <CabecalhoCartao/>
              <Cartao name={"Jorge"} email={"teste@teste.com"} depart={"Comercial"} numb={"12/06/2023"} estado={"Em andamento"} prior={"Alto"} atrib={"Roberto"} criado={"Henrique"}/>
              <Cartao name={"Felipe"} email={"teste@teste.com"} depart={"Tecnologia"} numb={"20/03/2023"} estado={"Resolvido"} prior={"Alto"} atrib={"Juliana"} criado={"Fernanda"}/>
              <Cartao name={"Joana"} email={"teste@teste.com"} depart={"Operação"} numb={"07/06/2023"} estado={"Pausado"} prior={"Critico"} atrib={"Luiz"} criado={"Ágatha"}/>
              <Cartao name={"Mônica"} email={"teste@teste.com"} depart={"Tecnologia"} numb={"31/01/2023"} estado={"Resolvido"} prior={"Médio"} atrib={"Gustavo"} criado={"Miriam"}/>
              <Cartao name={"Barbara"} email={"teste@teste.com"} depart={"Comercial"} numb={"09/12/2022"} estado={"Resolvido"} prior={"Baixo"} atrib={"Carlos"} criado={"Pedro"}/>
            </S.CardContainer>
          </S.MainContainer>
          </div>
      </>
      );
}




export default Abertura_Chamado;
