import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Selectv2(props) {
  const teams = [
    "Manchester United",
    "Liverpool",
    "Barcelona",
    "Atletico Madrid"
  ];

  return (
    <Box>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>Team</InputLabel>
        <Select
          value={props.value}
          className="teams"
          label="Team"
          name={props.name}
          onChange={props.onChange}
        >
          {teams.map((value, index) => (
            <MenuItem key={index} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
