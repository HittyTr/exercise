import React, { useState } from "react";
import Options from "./Options";

function Select(props) {
  const [teams, setTeams] = useState([
    "Select a Team",
    "Manchester United",
    "Liverpool",
    "Barcelona",
    "Atletico Madrid"
  ]);

  return (
    <select
      className={props.className}
      value={props.value}
      name={props.name}
      onChange={props.onChange}
    >
      {teams.map((value, index) => {
        return <Options key={index} name={value} />;
      })}
    </select>
  );
}

export default Select;
