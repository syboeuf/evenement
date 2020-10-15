import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  imageIcon: { height: "100%" },
  gridSvg: {
    height: 90,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

const svgArray = [
  { url: "https://www.instagram.com/maisonsonore/", svg: "instagram.svg" },
  {
    url: "https://www.facebook.com/maisonsonore/",
    svg: "facebook.svg",
  },
  {
    url: "https://www.linkedin.com/company/42697244/admin/",
    svg: "linkedin.svg",
  },
  { url: "https://soundcloud.com/maisonsonore/tracks", svg: "soundcloud.svg" },
  {
    url: "https://www.youtube.com/channel/UCXHyHc6S4By-TLiiNRr-qmg",
    svg: "youtube.svg",
  },
  {
    url: "https://www.beatport.com/label/maison-sonore/85971/tracks",
    svg: "beatport.svg",
  },
];

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      {svgArray.map((svgData, index) => {
        const { url, svg } = svgData;
        return (
          <Grid className={classes.gridSvg} item key={index} xs={4} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href={url}>
              <Icon className="home_icon">
                <img
                  alt="icon"
                  className={classes.imageIcon}
                  src={`${process.env.PUBLIC_URL}/svg/${svg}`}
                />
              </Icon>
            </a>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Footer;
