import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
  imgContainer: { textAlign: "center" },
}));

const PicturesDisplay = ({ picturesArray }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [name, setName] = useState("");
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const open = Boolean(anchorEl);
  const classes = useStyles();

  const showData = (e, data) => {
    const { currentTarget, clientX, clientY } = e;
    const name = data.split(".");
    setName(name[0].split("/")[3]);
    setAnchorEl(currentTarget);
    setCoords({ x: clientX, y: clientY });
  };

  return (
    <div>
      <Grid justify="center" container spacing={4}>
        {picturesArray.map((picture, index) => (
          <Grid
            className={classes.imgContainer}
            key={index}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
          >
            <img
              src={picture}
              alt={`picture-${index}`}
              style={{ width: 300, height: 250 }}
              onMouseMove={(e) => showData(e, picture)}
              onMouseLeave={() => setAnchorEl(null)}
            />
          </Grid>
        ))}
      </Grid>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorReference="anchorPosition"
        anchorPosition={{ top: coords.y, left: coords.x }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={() => setAnchorEl(null)}
        disableRestoreFocus
      >
        <Typography>{name}</Typography>
      </Popover>
    </div>
  );
};

export default PicturesDisplay;
