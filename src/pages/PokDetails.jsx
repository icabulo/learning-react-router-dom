import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context";
import "./pok-details.scss";

function PokDetails() {
  const { id: idName } = useParams();
  const [character, setCharacter] = useState({});

  const context = useContext(Context);
  const { pokemon } = context || {};
  const { characters } = pokemon || [];

  useEffect(() => {
    const item = characters.find((item) => item.id === idName);
    console.log("tarjeta para el pokemon", item);
    setCharacter(item);
  }, []);

  //   console.log(`datos para el pokemon ${idName}`, character);

  return (
    <div className="pokemon__card">
      <div className="image-container">
        <img src={character.image} alt="character.name" />
      </div>
      <div className="pokemon__info">
        <h2>{idName}</h2>
        <h3>- Stats -</h3>
        <ul>
          <li>
            <p className="stat__value">HP:</p>
            <p className="Stat__name">{character.hp}</p>
          </li>
          <li>
            <p className="stat__value">DEFENSE:</p>
            <p className="Stat__name">{character.defense}</p>
          </li>
          <li>
            <p className="stat__value">ATTACK:</p>
            <p className="Stat__name">{character.attack}</p>
          </li>
          <li>
            <p className="stat__value">SPEED:</p>
            <p className="Stat__name">{character.speed}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PokDetails;

/* COPY-RAMDetails

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context";

function RAMDeatails() {
  const [character, setCharacter] = useState({});
  const { id: idParam } = useParams();

  const context = useContext(Context);
  const { rickAndMorty } = context || {}; // se inicializa con ||
  const { characters } = rickAndMorty || []; //inicializar el tipo de dato de esa variable para que no genere errores.

  useEffect(() => {
    const item = characters.find((item) => item.id === parseInt(idParam)); //si usa .filter, devuelve un vector con un elemento tipo objeto
    //tambien se puede parsear con +idParam, e + lo convierte a numero
    setCharacter(item); //si se usa .filter, se debe utilizar item[0] para acceder al objeto que esta en la primera posicion del vector.
    // console.log("character", character);
  }, []);

  return (
    <div>
      RAMDeatails: {idParam}
      <strong>ID:</strong> {character.id}
      <strong>Species:</strong> {character.species}
      <strong>Gender:</strong> {character.gender}
      <strong>Name:</strong> {character.name}
      <strong>Status:</strong> {character.status}
      <img src={character.image} alt={character.name} />
    </div>
  );
}

export default RAMDeatails; */
