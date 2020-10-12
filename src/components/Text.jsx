import React from "react";
import Typography from "@material-ui/core/Typography";

const Text = ({ text, variant, className = "" }) => (
  <Typography className={className} variant={variant}>
    {text}
  </Typography>
);

export default Text;
