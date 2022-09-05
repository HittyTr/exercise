import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Inputv2(props) {
  return (
    <Box component="form" sx={{ m: 1, width: "25ch" }} autoComplete="off">
      <TextField
        id={props.id}
        label={props.label}
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        name={props.name}
        variant="outlined"
      />
    </Box>
  );
}
