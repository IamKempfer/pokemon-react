import styled from "styled-components";

export const Container = styled.main`
  background-color: #0075be;
  color: #fff;
  margin: 25px 10px 0;
  padding: 5px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #000;
  width: 150px;
  height: 200px;

  .imagemPokemon {
    width: 140px;
    height: 100px;
    background-color: #fff;
    object-fit: contain;
    border-radius: 2px;
    border: 1px solid #000;
    box-sizing: border-box;
    margin-bottom: 10px;
    padding: 8px;
    flex: 1;
  }
`;
