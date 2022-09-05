import React, { useState } from "react";
import InputArea from "./InputArea";
import Player from "./Player";

function App() {
  const [playerData, setPlayerData] = useState([]);

  function onAdd(newPlayer) {
    setPlayerData((prevObj) => {
      return [...prevObj, newPlayer];
    });
  }

  return (
    <>
      <div className="container">
        <InputArea onAdd={onAdd} />
      </div>

      <div className="containerPlayer">
        <div>
          <span></span>
        </div>
        {playerData.map((player, index) => {
          return (
            <Player
              key={index}
              id={index}
              fName={player.firstname}
              sName={player.surname}
              age={player.age}
              team={player.team}
              playerData={playerData}
              setplayerData={setPlayerData}
            />
          );
        })}
      </div>
    </>
  );
}
export default App;
