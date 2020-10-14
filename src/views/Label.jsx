import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "react-multi-carousel/lib/styles.css";
import text from "text";

import Grid from "@material-ui/core/Grid";
import Slide from "components/Slide";
import Text from "components/Text";
import PicturesDisplay from "components/PicturesDisplay";
import Player from "components/Player";

const useStyles = makeStyles({
  bold: { fontWeight: "bold" },
  h1: { fontSize: "2.5em", marginBottom: 15, marginLeft: 15 },
  h2: {
    fontSize: "3.5em",
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 15,
    marginLeft: "5%",
  },
  movieTitle: {
    textAlign: "center",
    fontSize: "1.5em",
    fontWeight: "bold",
  },
});

const stylePicture = {
  square: { width: 300, height: 300 },
  rectangle: { width: 180, height: 300 },
};

const Label = () => {
  const [artistArray, setArtistArray] = useState([]);
  const [releaseArray, setReleaseArray] = useState([]);
  const [mixArray, setMixArray] = useState([]);
  const [firstEvenementArray, setFirstEvenementArray] = useState([]);
  const [secondEvenementArray, setSecondEvenementArray] = useState([]);
  const [thirdEvenementArray, setThirdEvenementArray] = useState([]);

  const classes = useStyles();

  const {
    label: {
      title,
      artistTitle,
      releaseTitle,
      mixTitle,
      evenementielTitle,
      firstEvenementielTitle,
      secondEvenementielTitle,
      thirdEvenementielTitle,
      firstEvenementielText,
      secondEvenementielText,
      thirdEvenementielText,
      fourEvenementielText,
      fiveEvenementielText,
      sixEvenementielText,
      afterMovieTitle,
    },
  } = text;

  useEffect(() => {
    setArtistArray(
      importAll(
        require.context(
          "../../public/pictureArtists",
          false,
          /\.(png|jpe?g|svg)$/i
        )
      )
    );
    setReleaseArray(
      importAll(
        require.context("../../public/release", false, /\.(png|jpe?g|svg)$/i)
      )
    );
    setMixArray(
      importAll(
        require.context("../../public/mix", false, /\.(png|jpe?g|svg)$/i)
      )
    );
    setFirstEvenementArray(
      importAll(
        require.context(
          "../../public/evenement/Au Large",
          false,
          /\.(png|jpe?g|svg)$/i
        )
      )
    );
    setSecondEvenementArray(
      importAll(
        require.context(
          "../../public/evenement/Bring your own horse",
          false,
          /\.(png|jpe?g|svg)$/i
        )
      )
    );
    setThirdEvenementArray(
      importAll(
        require.context(
          "../../public/evenement/Entre les Vignes",
          false,
          /\.(png|jpe?g|svg)$/i
        )
      )
    );
  }, []);

  const importAll = (r) => r.keys().map(r);

  return (
    <div>
      <Text className={classes.h1} variant="h1" text={title} />
      <Text className={classes.h2} variant="h2" text={artistTitle} />
      <PicturesDisplay
        picturesArray={artistArray}
        format={stylePicture.rectangle}
        title="Nom"
      />
      <div className="line" />
      <Text className={classes.h2} variant="h2" text={releaseTitle} />
      <PicturesDisplay
        picturesArray={releaseArray}
        format={stylePicture.square}
        title="Release"
      />
      <div className="line" />
      <Text className={classes.h2} variant="h2" text={mixTitle} />
      <PicturesDisplay
        picturesArray={mixArray}
        format={stylePicture.square}
        title="Mix"
      />
      <div className="line" />
      <Grid container alignItems="center" justify="center">
        <Grid item sm={5} xs={11}>
          <div>
            <Text
              className={classes.h1}
              variant="h2"
              text={evenementielTitle}
            />
          </div>
          <div>
            <Text
              className={classes.h2}
              variant="h2"
              text={firstEvenementielTitle}
            />
            <Grid container justify="center">
              <Grid item xs={11} sm={5}>
                <Slide picturesArray={firstEvenementArray} />
              </Grid>
              <Grid item sm={5} xs={11}>
                <div className="text_evenement">
                  <Text className={classes.bold} text={firstEvenementielText} />
                  <Text text={secondEvenementielText} />
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item sm={5} xs={11}>
          <div>
            <Text
              className={classes.h2}
              variant="h2"
              text={secondEvenementielTitle}
            />
            <Grid container justify="center">
              <Grid item xs={11} sm={5}>
                <Slide picturesArray={secondEvenementArray} />
              </Grid>
              <Grid item xs={11} sm={5}>
                <div className="text_evenement">
                  <Text className={classes.bold} text={thirdEvenementielText} />
                  <Text text={fourEvenementielText} />
                </div>
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item xs={12} sm={6}>
                <Player
                  path={`${process.env.PUBLIC_URL}/evenement/Entre les Vignes/Aftermovie.MP4`}
                />
              </Grid>
              <Grid item xs={12} sm={6} style={{ alignSelf: "center" }}>
                <Text
                  className={classes.movieTitle}
                  variant="h2"
                  text={afterMovieTitle}
                />
              </Grid>
            </Grid>
          </div>
          <Text
            className={classes.h2}
            variant="h2"
            text={thirdEvenementielTitle}
          />
          <Grid container justify="center">
            <Grid item xs={11} sm={5}>
              <Slide picturesArray={thirdEvenementArray} />
            </Grid>
            <Grid item xs={11} sm={5}>
              <div className="text_evenement">
                <Text className={classes.bold} text={fiveEvenementielText} />
                <Text text={sixEvenementielText} />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Label;
