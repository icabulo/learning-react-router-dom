import React, { useContext, useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardList } from "../components/CardList";
import { Context } from "../context";

function Pokemon() {
  const [characters, setCharacters] = useState([]);
  const context = useContext(Context);
  console.log("*****", context);

  // const [loader, setLoader] = useState(true);

  const getOnePokemon = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return {
      image: data.sprites.front_shiny,
      [data.stats[0].stat.name]: data.stats[0].base_stat, //hp stat
      [data.stats[1].stat.name]: data.stats[1].base_stat, //attack stat
      [data.stats[2].stat.name]: data.stats[2].base_stat, //defense stat
      [data.stats[5].stat.name]: data.stats[5].base_stat, //speed stat
    };
  };

  //Async - await
  const getAllPokemons = async () => {
    const pokemons = [];
    const url = "https://pokeapi.co/api/v2/pokemon";
    const response = await fetch(url);
    const data = await response.json();
    console.log(("data", data));

    /*  await data.results.forEach(async (item) => {
      const image = await getOnePokemon(item.url);
      pokemons.push({ name: item.name, image: image });
      // return pokemons;
      console.log("forEach...");
    }); */

    for (let i = 0; i < data.results.length; i++) {
      const item = data.results[i];
      const { image, hp, attack, defense, speed } = await getOnePokemon(
        item.url
      );
      pokemons.push({
        name: item.name,
        image: image,
        id: item.name,
        hp,
        attack,
        speed,
        defense,
      });
    }

    /* await data.results.reduce(async (prevPromise, item) => {
      await prevPromise;
      const image = await getOnePokemon(item.url);
      pokemons.push({ name: item.name, image });
      //estos dos return hacen los mimos, CUAL ES LA DIFERENCIA?
      // return pokemons;
      return Promise.resolve();
    }, Promise.resolve()); */

    console.log("Pokemons", pokemons);
    context.pokemon.characters = pokemons;
    context.redirectDetailsRoute = "/pokemon";

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
