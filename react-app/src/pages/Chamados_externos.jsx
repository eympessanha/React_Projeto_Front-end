import Menu from "../components/Menu/Menu";
import Cartao from "../components/Cartao/Cartao";
import * as S from "./style";
import CabecalhoCartao from "../components/Cartao/CabecalhoCartao";

const Abertura_Chamado = () => {

    const data = [{nome: "Fulano", depart: "Comercial", data: "28/02/2023", email: "teste@teste.com" }]

    return(
        <>
          <Menu />
          <S.MainContainer>
            <S.TitleContainer>
              <h1>Chamado externos:</h1>
            </S.TitleContainer>
            <S.CardContainer>
              <CabecalhoCartao/>
              <Cartao name={"Fulano"} simb={"Fulano"} depart={"Comercial"} data={"28/02/2023"} email={"teste@teste.com"}/>
              <Cartao name={"João Melão"} simb={"João Melão"} depart={"Tecnologia"} data={"11/04/2023"} email={"teste@teste.com"}/>
              <Cartao name={"Ciclano"} simb={"Ciclano"} depart={"Operação"} data={"09/05/2023"} email={"teste@teste.com"}/>
              <Cartao name={"Beltrano"} simb={"Beltrano"} depart={"Tecnologia"} data={"14/06/2023"} email={"teste@teste.com"}/>
              <Cartao name={"Creusa"} simb={"Creusa"} depart={"Comercial"} data={"06/07/2023"} email={"teste@teste.com"}/>
            </S.CardContainer>
          </S.MainContainer>
      </>
      );
}




export default Abertura_Chamado;
