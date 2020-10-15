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
import Footer from "components/Footer";

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
    color: "#CDC6BB",
    fontWeight: "bold",
  },
  formTitle: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 10,
    color: "#CDC6BB",
    fontWeight: "bold",
  },
  paragraphText: {
    fontSize: 16,
    textAlign: "left",
  },
});
const Agence = () => {
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [society, setSociety] = useState("");
  const [message, setMessage] = useState("");
  const [spam, setSpam] = useState(true);

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

  const checkEmail = (email) => {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    return regexEmail.test(email);
  };
  const sendEmail = async () => {
    if (!spam) {
      return;
    }
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !society.trim() ||
      !message.trim()
    ) {
      alert("Incomplete data");
    } else if (!checkEmail(email)) {
      alert("Invalid email");
    } else {
      try {
        var templateParams = {
          reply_to: email,
          email,
          society,
          from_name: `${firstName} ${lastName}`,
          message,
        };
        setSpam(false);
        const result = await send("gmail", "template_vt76pmq", templateParams);
        const { status } = result;
        if (status === 200) {
          setSpam(true);
          alert("Email sent !");
        }
      } catch (error) {
        console.log(error);
      }
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
            <Text
              text={firstTitle}
              variant="h2"
              className={classes.paragraphTitle}
            />
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
            <Text
              text={secondTitle}
              variant="h2"
              className={classes.paragraphTitle}
            />
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
            <Text
              text={thirdTitle}
              variant="h2"
              className={classes.paragraphTitle}
            />
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
          <Text text={contact} variant="h2" className={classes.formTitle} />
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
      <div className="line" />
      <div className="line" />
      <Footer />
    </div>
  );
};
export default Agence;
