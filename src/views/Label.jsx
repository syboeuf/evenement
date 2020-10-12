import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "react-multi-carousel/lib/styles.css";
import text from "text";

import Grid from "@material-ui/core/Grid";
import Slide from "components/Slide";
import Text from "components/Text";
import PicturesDisplay from "components/PicturesDisplay";
import Footer from "components/Footer";

const useStyles = makeStyles({
  bold: { fontWeight: "bold" },
  h1: { fontSize: "2.5em", marginBottom: 15 },
  h2: {
    fontSize: "1.5em",
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 15,
  },
});

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
      <h1 className="test">Ceci est un test</h1>
      <Text className={classes.h1} variant="h1" text={title} />
      <Text className={classes.h2} variant="h2" text={artistTitle} />
      <PicturesDisplay picturesArray={artistArray} />
      <Text className={classes.h2} variant="h2" text={releaseTitle} />
      <PicturesDisplay picturesArray={releaseArray} />
      <Text className={classes.h2} variant="h2" text={mixTitle} />
      <PicturesDisplay picturesArray={mixArray} />
      <Grid container alignItems="center" justify="center">
        <Grid item sm={5} xs={11}>
          <div>
            <Text
              className={classes.h1}
              variant="h1"
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
                <div style={{ textAlign: "center", marginLeft: 10 }}>
                  <Text
                    className={classes.bold}
                    variant="body1"
                    text={firstEvenementielText}
                  />
                  <Text variant="body1" text={secondEvenementielText} />
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
                <div style={{ textAlign: "center", marginLeft: 10 }}>
                  <Text
                    className={classes.bold}
                    variant="body1"
                    text={thirdEvenementielText}
                  />
                  <Text variant="body1" text={fourEvenementielText} />
                </div>
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
              <div style={{ textAlign: "center", marginLeft: 10 }}>
                <Text
                  className={classes.bold}
                  variant="body1"
                  text={fiveEvenementielText}
                />
                <Text variant="body1" text={sixEvenementielText} />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className="line" />
      <Footer />
    </div>
  );
};

export default Label;
