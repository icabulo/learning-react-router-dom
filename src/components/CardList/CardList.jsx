import React from "react";
import { Card } from "./Card";
import "./card_list.scss";

function CardList({ list }) {
  const mappedCharacters = list.map((character) => (
    <div key={character.id}>
      <Card name={character.name} image={character.image} />
    </div>
  ));
  return (
    <div className="card-list">{list.length >= 1 && mappedCharacters}</div>
  );
}

export default CardList;
