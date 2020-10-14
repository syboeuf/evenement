import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import MyTextField from "components/MyTextField";
import Text from "components/Text";

import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { init, send } from "emailjs-com";
import text from "text";

const useStyles = makeStyles({
  root: {
    maxWidth: 1140,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 15,
    marginBottom: 15,
  },
  imageContainer: {
    maxWidth: 1140,
    marginLeft: "auto",
    marginRight: "auto",
  },
  formContainer: {
    maxWidth: 1140,
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    marginTop: 160,
    marginBottom: 120,
  },
  paragraphTitle: {
    fontSize: 28,
    textAlign: "left",
    marginBottom: 10,
    fontFamily: "built-tiling",
    color: "#CDC6BB",
    fontWeight: "bold",
  },
  formTitle: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "built-tiling",
    color: "#CDC6BB",
    fontWeight: "bold",
  },
  paragraphText: {
    fontSize: 16,
    textAlign: "left",
    fontFamily: "roboto",
  },
});
const Agence = () => {
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [society, setSociety] = useState("");
  const [message, setMessage] = useState("");

  const {
    agence: {
      firstTitle,
      firstParagraph,
      secondTitle,
      secondParagraph,
      queens,
      thirdTitle,
      thirdParagraph,
      contact,
      Bpointone,
      BpointTwo,
      BpointThree,
      Bpointfour,
      Bpointfive,
      Bpointsix,
      Bpointseven,
      Bpointeight,
      Bpointnine,
    },
  } = text;

  const classes = useStyles();

  useEffect(() => {
    init("user_B7C3ERKWub9k5BZRDcRuo");
  }, []);

  const sendEmail = async () => {
    var templateParams = {
      reply_to: email,
      to_name: "Alexis",
      from_name: `${firstName} ${lastName}`,
      message: `${email} ${society} ${message}`,
    };
    try {
      const result = await send("gmail", "template_vt76pmq", templateParams);
      const { status, text } = result;
      if (status === 200) {
        console.log("Success", text);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Grid justify="center" container className={classes.root}>
        <CardContent>
          {" "}
          <img
            src={`${process.env.PUBLIC_URL}/agence/logostudio-02.jpg`}
            maxwidth="400"
            height="300"
            alt="picture_agence_logo"
          />
        </CardContent>
      </Grid>
      <Grid container className={classes.root}>
        <Grid item xs={11} sm={6}>
          <CardContent>
            {" "}
            <Text text={firstTitle} className={classes.paragraphTitle} />
            <Text text={firstParagraph} className={classes.paragraphText} />
          </CardContent>
        </Grid>
      </Grid>
      <Grid container className={classes.imageContainer} justify="flex-end">
        <Grid item xs={12} sm={6}>
          <CardContent>
            {" "}
            <img
              src={`${process.env.PUBLIC_URL}/agence/QUEENS-LEG.jpg`}
              style={{ maxWidth: "100%" }}
              alt="picture_agence_queen"
            />
            <Typography style={{ textAlign: "center" }}>{queens}</Typography>
          </CardContent>
        </Grid>
      </Grid>
      <Grid container className={classes.root}>
        <Grid item xs={11} sm={6}>
          <CardContent>
            {" "}
            <Text text={secondTitle} className={classes.paragraphTitle} />
            <Text text={secondParagraph} className={classes.paragraphText} />
            <br />
            <Text text={Bpointone} className={classes.paragraphText} />
            <Text text={BpointTwo} className={classes.paragraphText} />
            <Text text={BpointThree} className={classes.paragraphText} />
            <Text text={Bpointfour} className={classes.paragraphText} />
            <Text text={Bpointfive} className={classes.paragraphText} />
          </CardContent>
        </Grid>
      </Grid>
      <Grid container className={classes.root} justify="flex-end">
        <Grid item xs={11} sm={6}>
          <CardContent>
            {" "}
            <Text text={thirdTitle} className={classes.paragraphTitle} />
            <Text text={thirdParagraph} className={classes.paragraphText} />
            <br />
            <Text text={Bpointsix} className={classes.paragraphText} />
            <Text text={Bpointseven} className={classes.paragraphText} />
            <Text text={Bpointeight} className={classes.paragraphText} />
            <Text text={Bpointnine} className={classes.paragraphText} />
          </CardContent>
        </Grid>
      </Grid>
      <Grid container className={classes.formContainer}>
        <Grid item xs={11}>
          <Text text={contact} className={classes.formTitle} />
          <Grid container className={classes.root} spacing={3}>
            <Grid item xs={11} sm={6}>
              <MyTextField
                label="Nom"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={11} sm={6}>
              <MyTextField
                label="Prénom"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={11} sm={6}>
              <MyTextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={11} sm={6}>
              <MyTextField
                label="Société"
                value={society}
                onChange={(e) => setSociety(e.target.value)}
              />
            </Grid>
            <Grid item xs={11} sm={12}>
              <MyTextField
                label="Message"
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                multiline={true}
              />
            </Grid>
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            <Button
              variant="outlined"
              color="primary"
              size="medium"
              endIcon={<Icon>send</Icon>}
              onClick={() => sendEmail()}
            >
              Envoyer
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Agence;
