import React, { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Inputv2 from "./Inputv2";
import Selectv2 from "./Selectv2";

function Player(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editable, setEditable] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    setEditable((preV) => {
      return { ...preV, [name]: value };
    });
  }
  function editbutton(id) {
    setIsEditing(true);
    setEditable(props.playerData.filter((item, index) => index === id)[0]);
  }

  function handleSave() {
    props.playerData[props.id] = editable;
    setIsEditing(false);
    setEditable({});
    props.setplayerData((prevObj) => {
      return [...prevObj];
    });
  }
  function deleteButton(id) {
    props.setplayerData((preArr) => {
      return preArr.filter((item, index) => index !== id);
    });
  }

  return isEditing ? (
    <div className="PlayerContainer">
      <Inputv2
        label="First Name"
        type="text"
        name="firstname"
        placeholder="Surname"
        value={editable.firstname}
        onChange={handleChange}
      />
      <Inputv2
        label="Surname"
        type="text"
        name="surname"
        placeholder="Surname"
        value={editable.surname}
        onChange={handleChange}
      />
      <Inputv2
        label="Age"
        type="number"
        name="age"
        placeholder="Surname"
        value={editable.age}
        onChange={handleChange}
      />

      <Selectv2 value={editable.team} name="team" onChange={handleChange} />

      <Button
        id="saveButton"
        variant="contained"
        startIcon={<SaveIcon />}
        onClick={handleSave}
        size="small"
        sx={{ fontSize: 10 }}
      >
        Save
      </Button>
    </div>
  ) : (
    <div className="fullPlayer">
      <ul className="Player">
        <li className="PlayerEach">
          <div className="PlayerData">
            <span id="Fullname">
              Fullname: {props.fName} {props.sName}{" "}
            </span>
            <span id="Age">Age: {props.age} </span>
            <span id="Team">Team: {props.team}</span>
          </div>
          <div className="ButtonTwo">
            <Button
              id="deletebutton"
              variant="contained"
              startIcon={<DeleteIcon />}
              sx={{ fontSize: 10 }}
              onClick={() => deleteButton(props.id)}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              startIcon={<EditIcon />}
              sx={{ fontSize: 10 }}
              onClick={() => editbutton(props.id)}
            >
              Edit
            </Button>
          </div>
        </li>
        <hr />
      </ul>
    </div>
  );
}
export default Player;
