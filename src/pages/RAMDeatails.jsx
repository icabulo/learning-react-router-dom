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

export default RAMDeatails;
