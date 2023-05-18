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
              <Cartao name={"Fulano"} email={"teste@teste.com"} depart={"Comercial"} numb={"28/02/2023"} estado={"teste@teste.com"}/>
              <Cartao name={"João Melão"} email={"teste@teste.com"} depart={"Tecnologia"} numb={"11/04/2023"} estado={"teste@teste.com"}/>
              <Cartao name={"Ciclano"} email={"teste@teste.com"} depart={"Operação"} numb={"09/05/2023"} estado={"teste@teste.com"}/>
              <Cartao name={"Beltrano"} email={"teste@teste.com"} depart={"Tecnologia"} numb={"14/06/2023"} estado={"teste@teste.com"}/>
              <Cartao name={"Creusa"} email={"teste@teste.com"} depart={"Comercial"} numb={"06/07/2023"} estado={"teste@teste.com"}/>
            </S.CardContainer>
          </S.MainContainer>
      </>
      );
}




export default Abertura_Chamado;
