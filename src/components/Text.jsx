import React from "react";
import Typography from "@material-ui/core/Typography";

const Text = ({ text, variant = "body1", className = "" }) => (
  <Typography className={className} variant={variant}>
    {text}
  </Typography>
);

export default Text;
