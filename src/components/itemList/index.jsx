import { Container } from "./styles";

function ItemList(props) {
  return (
    <Container className="boxPokemon">
      <div>
        <img className="imagemPokemon" src={props.imagem} alt={props.pokemon} />
      </div>

      <div className="status">
        {props.pokemon} {props.type} {props.nvl}
      </div>

      <div class="buttons">
        {props.detalhes} {props.Selecionar}
      </div>
    </Container>
  );
}

export default ItemList;
