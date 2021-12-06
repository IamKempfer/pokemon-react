function itemList(props) {
  return (
    <div className="boxPokemon">
      <div className="img-pok">
        <img className="imagemPokemon" src={props.imagem} alt={props.pokemon} />
      </div>

      <div>
        {props.pokemon} {props.type} {props.nvl}
      </div>

      <div class="buttons">
        {props.detalhes} {props.Selecionar}
      </div>
    </div>
  );
}

export default itemList;
