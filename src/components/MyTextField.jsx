import React from "react";
import TextField from "@material-ui/core/TextField";

const MyTextField = ({ label, value, onChange, multiline = false }) => (
  <TextField
    required
    id={label}
    label={label}
    value={value}
    onChange={onChange}
    fullWidth
    multiline={multiline}
  />
);

export default MyTextField;
