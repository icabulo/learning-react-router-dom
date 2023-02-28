import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardList } from "../components/CardList";

function Pokemon() {
  const [characters, setCharacters] = useState([]);
  const [loader, setLoader] = useState(true);

  const getOnePokemon = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.sprites.front_shiny;
  };

  //Async - await
  const getAllPokemons = async () => {
    const pokemons = [];
    const url = "https://pokeapi.co/api/v2/pokemon";
    const response = await fetch(url);
    const data = await response.json();
    // console.log(("data", data));

    /*  await data.results.forEach(async (item) => {
      const image = await getOnePokemon(item.url);
      pokemons.push({ name: item.name, image: image });
      // return pokemons;
      console.log("forEach...");
    }); */

    /* for (let i = 0; i < data.results.length; i++) {
      const item = data.results[i];
      const image = await getOnePokemon(item.url);
      pokemons.push({ name: item.name, image: image });
      // console.log("forEach...");
    } */

    await data.results.reduce(async (prevPromise, item) => {
      await prevPromise;
      const image = await getOnePokemon(item.url);
      pokemons.push({ name: item.name, image });
      //estos dos return hacen los mimos, CUAL ES LA DIFERENCIA?
      // return pokemons;
      return Promise.resolve();
    }, Promise.resolve());

    console.log("Pokemons", pokemons);

    // return setCharacters(pokemons);
    setCharacters(pokemons);
  };

  // console.log("charactes", characters.length, characters);

  useEffect(() => {
    getAllPokemons();
  }, []);

  /* const renderPokemons = () => {
    return (
      <div>
        {characters.map((character, index) => (
          <div key={index}>{character.name}</div>
        ))}
      </div>
    );
  }; */

  /*  const renderPokemons = characters.map((character, index) => (
    // <div key={index}>{character.name}</div>
    <div>
      <div key={index}>{character.name}</div>
      <img src={character.image} alt={character.name} />
    </div>
  )); */

  const renderPokemons = () => <CardList list={characters} />;

  // console.log("redered pokemons", renderPokemons.length, renderPokemons);

  return (
    <>
      <Header>Header</Header>
      {characters.length >= 1 && renderPokemons()}

      {/* <div>{characters.length >= 1 && renderPokemons()}</div> */}
      <Footer>Footer</Footer>
    </>
  );
}

export default Pokemon;
