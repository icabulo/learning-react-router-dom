import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "./Card";
import { Context } from "../../context";

import "./card_list.scss";

const CardList = ({ list }) => {
  const navigate = useNavigate();
  const context = useContext(Context);
  const { redirectDetailsRoute } = context; //destructuring para sacar la propiedad del objeto context

  // console.log(("Details context ...", context));

  const goToDetails = (id) => {
    // console.log("click ... goToDetails", `${redirectDetailsRoute}/${id}`);
    navigate(`${redirectDetailsRoute}/${id}`);
  };

  return (
    <div className="card-list">
      {list.length >= 1 &&
        list.map(({ id, name, image }, index) => (
          <Card
            key={index}
            name={name}
            image={image}
            handleClick={goToDetails}
            id={id}
          />
        ))}
    </div>
  );
};

export default CardList;

/* import React from "react";
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

export default CardList; */
