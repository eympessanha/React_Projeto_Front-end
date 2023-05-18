import * as S from "./style";

const Cartao = (props) => (
  <>
      <S.ContainerItens>
      <S.Descricao>{props.simb}</S.Descricao>
      <S.Descricao>{props.name}</S.Descricao>
      <S.Descricao>{props.email}</S.Descricao>
      <S.Descricao>{props.data}</S.Descricao>
      <S.Descricao>{props.depart}</S.Descricao>
      </S.ContainerItens>
  </>
);

export default Cartao;
