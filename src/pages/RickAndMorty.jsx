import React, { useEffect, useState, useContext } from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
// import { Card } from "../components/Card";
import { CardList } from "../components/CardList";
import { Context } from "../context";
import { getAllCharacters } from "../services/rickAndMortyAPI";

function RickAndMorty() {
  const [characters, setCharacters] = useState([]);
  const context = useContext(Context);

  const getData = async () => {
    const data = await getAllCharacters();
    context.rickAndMorty.characters = data;
    context.redirectDetailsRoute = "/rickandmorty";
    setCharacters(data);
  };
  // const [loader, setLoader] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  /* const mappedCharacters = characters.map((character) => (
    <div key={character.id}>
      {character.name}
      <img src={character.image} alt={character.name} />
    </div>
  )); */

  /* const mappedCharacters = characters.map((character) => (
    <div key={character.id}>
      <Card name={character.name} image={character.image} />
    </div>
  )); */

  return (
    <>
      <Header>Header</Header>

      {/* <div>{characters.length >= 1 && mappedCharacters}</div> */}
      <CardList list={characters} />
      <Footer>Footer</Footer>
    </>
  );
}

export default RickAndMorty;
