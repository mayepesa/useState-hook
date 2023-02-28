import React, { useState } from "react";
import List from "./List";
import './Home.css'

const Home = () => {
  const [characters, setCharacters] = useState([]);

  let characterNames = [
    {
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        name: "Rick Sanchez",
    },
    {
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        name: "Morty Smith"
    },
    {
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/183.jpeg",
        name: "Johnny Depp"
    }
];

  const addCharacter = () => {
    if (characterNames[characters.length])
      setCharacters([...characters, characterNames[characters.length] ]);
  };

  return (
    <div className='root'>
      <h1>Team 9</h1>
      <button
        className="btn"
        onClick={addCharacter}
        disabled={!characterNames[characters.length]}
      >
        {characterNames[characters.length]
          ? "Añadir personaje"
          : "No se pueden añadir más personajes"}
      </button>
      <List items={characters} />
    </div>
  );
};

export default Home;
