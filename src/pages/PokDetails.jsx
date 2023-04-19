import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context";
import { PokDetail } from "../components/PokDetail";
import { getAllPokemons } from "../services/pokemonAPI";

// import "./pok-details.scss";

function PokDetails() {
  const { id: idName } = useParams();
  const [character, setCharacter] = useState({});
  const { name, image, hp, defense, attack, speed } = character || {}; //hacer destructuring para enviar solamente los datos

  const context = useContext(Context);
  const { pokemon } = context || {};
  const { characters } = pokemon || [];
  // console.log(context.pokemon);

  useEffect(() => {
    const item = characters.find((item) => item.id === idName);
    // console.log("tarjeta para el pokemon", item);
    if (item) {
      setCharacter(item);
    } else {
      getData(idName);
    }
    // setCharacter(item);
  }, []);

  const getData = async (id) => {
    const data = await getAllPokemons();
    const item = data.find((item) => item.id === id);
    setCharacter(item);
  };

  // console.log(`datos para el pokemon ${idName}`, character);

  return (
    <PokDetail
      name={name}
      image={image}
      hp={hp}
      defense={defense}
      attack={attack}
      speed={speed}
    />
  );
}

export default PokDetails;
