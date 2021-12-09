import ItemList from "../itemList";

import buba from "../../assets/images/buba.svg";
import chu from "../../assets/images/chu.svg";
import fire from "../../assets/images/fire.svg";
import agua from "../../assets/images/agua.svg";
import snake from "../../assets/images/snake.svg";
import clefa from "../../assets/images/clefa.svg";
import vulpi from "../../assets/images/vulpi.svg";
import cantor from "../../assets/images/cantor.svg";
import miau from "../../assets/images/miau.svg";
import pato from "../../assets/images/pato.svg";
import evee from "../../assets/images/evee.svg";
import bell from "../../assets/images/bell.svg";
import abra from "../../assets/images/abra.svg";
import lick from "../../assets/images/lick.svg";
import snorlax from "../../assets/images/snorlax.svg";

import { Li } from "./styles";

function pokeList() {
  return (
    <Li>
      <div className="lista"></div>
      <ItemList
        pokemon="Bubasauro"
        type="grama e veneno"
        nvl="1"
        imagem={buba}
      />
      <ItemList pokemon="Pikachu" type="eletrico" nvl="1" imagem={chu} />
      <ItemList pokemon="Charmander" type="fogo" nvl="1" imagem={fire} />
      <ItemList pokemon="Squirtle" type="água" nvl="1" imagem={agua} />
      <ItemList pokemon="Ekans" type="Veneno" nvl="1" imagem={snake} />
      <ItemList pokemon="Clefable" type="fadas" nvl="3" imagem={clefa} />
      <ItemList pokemon="Vulpix" type="fogo" nvl="1" imagem={vulpi} />
      <ItemList pokemon="Jigglypuff" type="fadas" nvl="1" imagem={cantor} />
      <ItemList pokemon="Meowth" type="normal" nvl="1" imagem={miau} />
      <ItemList pokemon="Psydyck" type="água" nvl="1" imagem={pato} />
      <ItemList pokemon="Eevee" type="normal" nvl="1" imagem={evee} />
      <ItemList
        pokemon="Bellsprout"
        type="grama e veneno"
        nvl="1"
        imagem={bell}
      />
      <ItemList pokemon="Abra" type="psíquico" nvl="1" imagem={abra} />
      <ItemList pokemon="Lichitung" type="Normal" nvl="1" imagem={lick} />
      <ItemList pokemon="Snorlax" type="normal" nvl="1" imagem={snorlax} />
    </Li>
  );
}

export default pokeList;
