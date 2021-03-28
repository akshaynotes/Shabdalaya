import { Container, CssBaseline, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Header from "./Header";

const useStyles = makeStyles({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
function Error() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.paper}>
          <img
            src="https://public-media.interaction-design.org/images/404.svg"
            alt="404"
            width="300"
            height="200"
          ></img>
          <Typography variant="h3">Design is a journey of discovery</Typography>
          <br />
          <br />
          {/* <Typography variant="h5">
            Sometimes we get lost, but that's ok.
          </Typography>
          <br />
          <br /> */}
          <Typography variant="h5">
            We are still under development. Really sorry for inconvinience
          </Typography>
        </div>
      </Container>
    </div>
  );
}

export default Error;
