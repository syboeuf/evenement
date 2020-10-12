import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import { CardActions } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
const useStyles = makeStyles({
  root: {
    maxWidth: 1140,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 15,
    marginBottom: 15,
  },
  test: {
    maxWidth: 500,
    marginLeft: "auto",
    marginRight: "auto",
  },
  logoContainer: {
    justifyContent: "center",
    maxWidth: 1140,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 15,
    marginBottom: 15,
  },
  formContainer: {
    maxWidth: 1140,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 160,
    marginBottom: 120,
  },
  paragraphTitle: {
    fontSize: 28,
    textAlign: "left",
    marginBottom: 10,
    fontFamily: "Built Tilting",
    color: "#CDC6BB",
    fontWeight: "bold",
  },
  formTitle: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "Built Tilting",
    color: "#CDC6BB",
    fontWeight: "bold",
  },
  paragraphText: {
    fontSize: 16,
    textAlign: "left",
    fontFamily: "Roboto",
  },
});

const Agence = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.logoContainer}>
        <CardContent>
          {" "}
          <img
            src={`${process.env.PUBLIC_URL}/agence/logostudio-02.jpg`}
            maxWidth="400"
            height="300"
          />
        </CardContent>
      </Grid>
      <Grid container className={classes.root}>
        <Grid item xs={11} sm={6}>
          <CardContent>
            {" "}
            <Typography className={classes.paragraphTitle}>
              VOS PROJETS ÉVÉNEMENTIELS
            </Typography>
            <Typography className={classes.paragraphText}>
              Nous proposons des prestations artistiques (DJ, Live-Band, bandes
              sons thématiques) pour vos évènements. Nous manageons plusieurs
              artistes sélectionnés pour leur approche et leur style. Sélection
              du profil, booking et placement, Maison Sonore déniche les talents
              les plus pertinents pour sublimer vos moments. <br /> <br />
              Nous concevons également, si vous le souhaitez, l’organisation d’
              événements festifs (concept, prestation sonorisation et éclairage,
              décoration...).
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
      <Grid container className={classes.test} justify="flex-end">
        <Grid item xs={12} sm={6}>
          <CardContent>
            {" "}
            <img
              src={`${process.env.PUBLIC_URL}/agence/QUEENS-LEG.jpg`}
              style={{ maxWidth: 400, height: 300 }}
            />
            <Typography style={{ textAlign: "center" }}>
              Client : le Queen’s Leg Lieu : Valbonne
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
      <Grid container className={classes.root}>
        <Grid item item xs={11} sm={6}>
          <CardContent>
            {" "}
            <Typography className={classes.paragraphTitle}>
              STRATÉGIE
            </Typography>
            <Typography className={classes.paragraphText}>
              Animés d’une irréversible passion, nous faisons preuve d’une
              curiosité sans limite pour digger en permanence les dernières
              tendances digitales et proposer la meilleure approche pour
              développer vos projets.
            </Typography>
            <Typography className={classes.paragraphText}>
              <br />● Stratégie de communication
              <br />● Étude de fond de marque Branding, positionnement <br /> ●
              Étude de tendances <br />● Optimisation des budgets de
              communication
              <br />● Conseil en développement
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
      <Grid container className={classes.root} justify="flex-end">
        <Grid item item xs={11} sm={6}>
          <CardContent>
            {" "}
            <Typography className={classes.paragraphTitle}>
              STUDIO DE CRÉATION
            </Typography>
            <Typography className={classes.paragraphText}>
              Maison Sonore design aussi vos envies grâce à son scop
              d’expertises incluant :<br /> <br />
              ● Sound Designer <br />
              ● Designer 3D <br />
              ● Web Designer Graphiste <br />● Photographe
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
      <Grid container className={classes.formContainer}>
        <Grid item xs={11}>
          <Typography className={classes.formTitle} gutterBottom>
            CONTACT
          </Typography>
          <Grid container className={classes.root} spacing={3}>
            <Grid item xs={11} sm={6}>
              <TextField required id="Nom" name="Nom" label="Nom" fullWidth />
            </Grid>
            <Grid item xs={11} sm={6}>
              <TextField
                required
                id="Prenom"
                name="Prenom"
                label="Prénom"
                fullWidth
              />
            </Grid>
            <Grid item xs={11} sm={6}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                fullWidth
              />
            </Grid>
            <Grid item xs={11} sm={6}>
              <TextField
                required
                id="Societe"
                name="Societe"
                label="Société"
                fullWidth
              />
            </Grid>
            <Grid item xs={11}>
              <TextField
                required
                id="Message"
                name="Message"
                label="Message"
                fullWidth
                multiline
              />
            </Grid>
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            <Button
              variant="outlined"
              color="primary"
              size="medium"
              styles={{ justifyContent: "center" }}
              endIcon={<Icon>send</Icon>}
            >
              Envoyer
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <div className="footer">
        <p className="text_footer">maison.sonore@gmail.com</p>
      </div>
    </div>
  );
};
export default Agence;
