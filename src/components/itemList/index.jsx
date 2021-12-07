import { Container } from "./styles";

function ItemList(props) {
  return (
    <Container className="boxPokemon">
      <div>
        <img className="imagemPokemon" src={props.imagem} alt={props.pokemon} />
      </div>

      <div className="status">
        <p>
          <b>
            Nome: <i> {props.pokemon} </i>
          </b>
        </p>
        <p>
          <b>
            Tipo: <i> {props.type} </i>{" "}
          </b>
        </p>
        <p>
          <b>
            Nível: <i> {props.nvl} </i>{" "}
          </b>
        </p>
      </div>

      <div className="buttons">
        <button className="detalhes" type="button">
          Detalhes
        </button>
        <button className="selecionar" type="button">
          Selecionar
        </button>
      </div>
    </Container>
  );
}

export default ItemList;
