import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Loader } from "../components/Loader";

// import { Card } from "../components/Card";
import { CardList } from "../components/CardList";

function RickAndMorty() {
  const [characters, setCharacters] = useState([]);
  const [loader, setLoader] = useState(true);

  const getAllCharacters = () => {
    const url = "https://rickandmortyapi.com/api/character";
    /*     const request = fetch(url);
        console.log(request);
    fetch(url)
          //resolved promise
          .then((request) => {
            console.log(request.json());
            return request.json();
          })
          .then((data) => {
            console.log("Data", data);
          })
          //Rejected
          .catch((error) => {
            console.log("Error", error);
          }); */
    fetch(url)
      .then((request) => request.json())
      .then((data) => {
        setCharacters(data.results);
        // console.log(data.results);
      })
      //Rejected
      .catch((error) => {
        console.log("Error", error);
      });
    setLoader(false);
  };

  useEffect(() => {
    getAllCharacters();
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
      {loader && <Loader />}

      {/* <div>{characters.length >= 1 && mappedCharacters}</div> */}
      <CardList list={characters} />
      <Footer>Footer</Footer>
    </>
  );
}

export default RickAndMorty;