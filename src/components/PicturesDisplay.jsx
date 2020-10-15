import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  container: {
    "@media (min-width:780px)": {
      paddingLeft: "5%",
    },
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
  imgContainer: { textAlign: "center", marginLeft: 15 },
}));

const PicturesDisplay = ({ picturesArray, format, title }) => {
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
      <Grid className={classes.container} container>
        {picturesArray.map((picture, index) => (
          <Grid
            className={classes.imgContainer}
            key={index}
            item
            xs={12}
            sm={5}
            md={4}
            lg={3}
            xl={2}
          >
            <img
              src={picture}
              alt={`pic_${index}`}
              style={format}
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
        <Typography>{`${title}: ${name}`}</Typography>
      </Popover>
    </div>
  );
};

export default PicturesDisplay;
