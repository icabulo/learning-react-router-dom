import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context";
import { RAMDetail } from "../components/RAMDetail";
import { getOneCharacter } from "../services/rickAndMortyAPI";

function RAMDeatails() {
  const [character, setCharacter] = useState({});
  const { id: idParam } = useParams();

  const context = useContext(Context);
  const { rickAndMorty } = context || {}; // se inicializa con ||
  const { characters } = rickAndMorty || []; //inicializar el tipo de dato de esa variable para que no genere errores.

  const { id, species, name, status, image, gender } = character || {}; //hacer destructuring para enviar solamente los datos

  useEffect(() => {
    console.log("useEfect", characters);
    const item = characters.find((item) => item.id === parseInt(idParam)); //si usa .filter, devuelve un vector con un elemento tipo objeto
    if (item) {
      setCharacter(item);
    } else {
      getData(idParam);
    }
    //tambien se puede parsear con +idParam, e + lo convierte a numero
    setCharacter(item); //si se usa .filter, se debe utilizar item[0] para acceder al objeto que esta en la primera posicion del vector.
    // console.log("character", character);
  }, []);

  const getData = async (id) => {
    const data = await getOneCharacter(id);
    setCharacter(data);
  };

  /*  const getOneCharacter = async (id) => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    try {
      const request = await fetch(url);
      const data = await request.json();
      // console.log("DATA", data);
      setCharacter(data);
    } catch (error) {
      console.log(error);
    }
  }; */

  return (
    <RAMDetail
      id={id}
      species={species}
      name={name}
      status={status}
      image={image}
      gender={gender}
    />
  );
}

export default RAMDeatails;
