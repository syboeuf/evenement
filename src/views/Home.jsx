import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Footer from "components/Footer";
import Text from "components/Text";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";

import text from "text";

const useStyles = makeStyles({
  root: {
    maxWidth: 1140,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 15,
  },
  homeTitle: {
    fontSize: "2.5em",
    textTransform: "uppercase",
    fontFamily: "'Montserrat',sans-serif",
    marginBottom: 20,
  },
  card: {
    minWidth: 275,
    padding: "100px 0 100px 0",
    textAlign: "center",
  },
  text: { fontSize: 33 },
  pos: {
    marginBottom: 12,
  },
});

const imgArray = [
  {
    url: "/Label",
    img:
      "http://maisonsonore.com/wp-content/uploads/2020/09/nosartistes-683x1024.jpg",
    text:
      "Maison Sonore manage un vivier d’artistes sélectionnés pour leur approche et leur style. Nous choisissons soigneusement des lieux atypiques afin de proposer une expérience événementielle musicale unique à notre communauté.",
  },
  {
    url: "/Agence",
    img:
      "http://maisonsonore.com/wp-content/uploads/2020/09/lagence-683x1024.png",
    text:
      "Maison Sonore intègre un studio de création au service du retail et des artistes. Pluridisciplinaire, nous proposons nos services créatifs avec une vision actuelle en respectant votre ADN .",
  },
];

const Home = () => {
  const classes = useStyles();
  const {
    home: { title, para },
  } = text;

  return (
    <div a={console.log(text)}>
      <div>
        <div className={classes.card}>
          <CardContent>
            <img
              src={`${process.env.PUBLIC_URL}logo.png`}
              style={{ maxWidth: 300 }}
            />
            <Text variant="h2" className={classes.homeTitle} text={title} />
            <Text variant="body1" className={classes.text} text={para} />
          </CardContent>
        </div>
        <div>
          <div>
            <Grid
              container
              spacing={3}
              justify="center"
              className={classes.root}
            >
              {imgArray.map((imgData, index) => {
                const { img, text, url } = imgData;
                return (
                  <Grid
                    className="home_container_image"
                    item
                    key={index}
                    xs={11}
                    sm={4}
                  >
                    <img alt="" className="home_image" src={img} />
                    <div className="overlay">
                      <Link to={url}>
                        <div className="home_text_image">{text}</div>
                      </Link>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </div>
          <div className="line" />
          <Footer />
          <div className="line" />
        </div>
      </div>
    </div>
  );
};

export default Home;
