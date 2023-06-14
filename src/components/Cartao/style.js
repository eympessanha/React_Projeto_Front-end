import styled from "styled-components";
import { tabletSize } from "../../utils";


export const ContainerCabecalho = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 1em;
  margin: 10px;

  @media screen and (min-width: ${tabletSize}) {
    flex-direction: row;
  }
`;

export const ItemCabecalho = styled.div`
  background-color: #00B650;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  border-radius: 20px;
  @media screen and (min-width: ${tabletSize}) {
    flex-direction: row;
  }
`;


export const Simbolo = styled.span`
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-size: x-large;
  width: 200px;
  height: 100px;

  @media screen and (min-width: ${tabletSize}) {
    font-size: medium;
  }
`;

export const Descricao = styled.span`
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: x-large;
  width: 200px;
  background-color: white;
  height: 100px;
  border-radius: 10px;

  @media screen and (min-width: ${tabletSize}) {
    font-size: medium;
  }
`;

export const Momento = styled.span`
  font-family: system-ui;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 1em;
  margin: 10px;

  @media screen and (min-width: ${tabletSize}) {
    flex-direction: row;
  }
`;