import React, { useState } from "react";
import Inputv2 from "./Inputv2";
import Selectv2 from "./Selectv2";
import Button from "@mui/material/Button";

function InputArea(props) {
  const [player, setPlayer] = useState({
    firstname: "",
    surname: "",
    age: "",
    team: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setPlayer((preV) => {
      return { ...preV, [name]: value };
    });
  }

  function onSubmit(event) {
    //css yapılınca red box koyulacak
    //validator düzelecek

    props.onAdd(player);

    setPlayer({
      firstname: "",
      surname: "",
      age: "",
      team: ""
    });

    event.preventDefault();
  }

  return (
    <div className="inputContainer">
      <div className="inputFname">
        <Inputv2
          id="firstName"
          label="First Name"
          value={player.firstname}
          onChange={handleChange}
          type="text"
          name="firstname"
        />
      </div>

      <div className="inputSurname">
        <Inputv2
          id="surname"
          label="Surname"
          value={player.surname}
          onChange={handleChange}
          type="text"
          name="surname"
        />
      </div>

      <div className="inputAge">
        {" "}
        <Inputv2
          id="age"
          label="Age"
          value={player.age}
          onChange={handleChange}
          type="number"
          name="age"
        />
      </div>

      <div className="inputTeam">
        <Selectv2 value={player.team} name="team" onChange={handleChange} />
      </div>

      <div id="inputSubmit">
        <Button variant="contained" onClick={onSubmit} size="small">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default InputArea;
