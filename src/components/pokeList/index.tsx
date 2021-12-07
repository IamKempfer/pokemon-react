import ItemList from "../itemList";
import buba from "../../assets/images/buba.jpg";
import { Li } from "./styles";

function pokeList() {
  return (
    <Li>
      <div className="lista"></div>
      <ItemList nome="bubasaur" tipo="grama e veneno" nível="1" imagem={buba} />
      <ItemList nome="bubasaur" tipo="grama e veneno" nível="1" imagem={buba} />
      <ItemList nome="bubasaur" tipo="grama e veneno" nível="1" imagem={buba} />
      <ItemList nome="bubasaur" tipo="grama e veneno" nível="1" imagem={buba} />
      <ItemList nome="bubasaur" tipo="grama e veneno" nível="1" imagem={buba} />
      <ItemList nome="bubasaur" tipo="grama e veneno" nível="1" imagem={buba} />
      <ItemList nome="bubasaur" tipo="grama e veneno" nível="1" imagem={buba} />
    </Li>
  );
}

export default pokeList;
