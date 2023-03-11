import React, { useContext, useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardList } from "../components/CardList";
import { Context } from "../context";
import { getAllPokemons } from "../services/pokemonAPI";
import { useCharacters, useData } from "../hooks";

function Pokemon() {
  // const [characters, setCharacters] = useState([]);
  const { data: characters } = useData([], getAllPokemons);

  const context = useContext(Context);
  // console.log("*****", context);

  // const [loader, setLoader] = useState(true);

  //IMPORTANTE: PREGUNTARLE A MARIA PORQUE EL CONTEXTO NO SE ESTA ACTUALIZANDO
  useEffect(() => {
    context.pokemon.characters = characters;
    context.redirectDetailsRoute = "/pokemon";
  }, [characters]);

  //IMPORTANTE: PREGUNTARLE A MARIA PORQUE EL CONTEXTO NO SE ESTA ACTUALIZANDO
  console.log("contexto actualizado en Pagina Pokemon", context.pokemon);

  return (
    <>
      <Header>Header</Header>
      {characters.length >= 1 && <CardList list={characters} />}
      <Footer>Footer</Footer>
    </>
  );
}

export default Pokemon;
