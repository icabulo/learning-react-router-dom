import React, { useEffect, useState, useContext } from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
// import { Card } from "../components/Card";
import { CardList } from "../components/CardList";
import { Context } from "../context";
import { getAllCharacters } from "../services/rickAndMortyAPI";
import { useCharacters, useData } from "../hooks";

function RickAndMorty() {
  // const { characters } = useCharacters("ram");
  const { data: characters } = useData([], getAllCharacters);
  const context = useContext(Context);

  // console.log("characters", characters);

  //Rendered
  useEffect(() => {
    //getData();
    context.rickAndMorty.characters = characters;
    context.redirectDetailsRoute = "/rickandmorty";
  }, [characters]);

  console.log(
    "contexto actualizado en Pagina rickandmorty",
    context.rickAndMorty
  );

  useEffect(() => {
    console.log(
      "contexto actualizado en Pagina rickandmorty",
      context.rickAndMorty
    );
  }, [context]);

  return (
    <>
      <Header>Header</Header>
      <CardList list={characters} />
      <Footer>Footer</Footer>
    </>
  );
}

export default RickAndMorty;
