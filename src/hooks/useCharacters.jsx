import React, { useEffect, useState } from "react";
import { getAllCharacters } from "../services/rickAndMortyAPI";

//return characters
const useCharacters = (type) => {
  const [characters, setCharacters] = useState([]);
  const getCharacters = async () => {
    let data = [];
    if (type === "ram") {
      data = await getAllCharacters();
    } else if (type === "pokemon") {
      //data =getAllPokemons
    }
    setCharacters(data);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return { characters };
};

export default useCharacters;
