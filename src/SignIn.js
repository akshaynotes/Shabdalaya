import {
  Avatar,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(8),
  },
  avatar: {
    marginTop: theme.spacing(5),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  grid: {
    marginBottom: theme.spacing(5),
  },
  outerpaper: {
    borderRadius: "10px",
    width: "500px",
  },
}));

function SignIn() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleOnClickPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Container component="main" maxWidth="sm">
      <Paper className={classes.outerpaper} elevation={5}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5">Sign In</Typography>
            <form className={classes.form}>
              <TextField
                variant="outlined"
                type="email"
                autoFocus
                margin="normal"
                fullWidth
                required
                autoComplete="email"
                label="Email Address"
              />
              {/* giving name and id for the backend */}
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                autoComplete="current-password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton onClick={handleOnClickPassword}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                label="Password"
              />
              {/* getting value of the checkbox in the backend */}
              <FormControlLabel
                control={<Checkbox color="secondary"></Checkbox>}
                label="Remember me"
              />
              {/* helperText and error */}
              <Button
                className={classes.submit}
                type="submit"
                variant="contained"
                fullWidth
                color="secondary"
              >
                Sign In
              </Button>
            </form>
            <Grid className={classes.grid} container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </div>
        </Container>
      </Paper>
    </Container>
  );
}

export default SignIn;
