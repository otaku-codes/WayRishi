import React, { useState, useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRive, useStateMachineInput } from "rive-react";
import teddy from "./520-990-teddy-login-screen.riv";
import { Grid2 } from "@mui/material";

//new imports
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./../utils/config";
import { AuthContext } from "./../context/AuthContext";

const theme = createTheme();

const STATE_MACHINE_NAME = "State Machine 1";

export default function SignIn() {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [isTeddyLoaded, setIsTeddyLoaded] = useState(true); // State to check if teddy loads

  const { rive, RiveComponent } = useRive({
    src: teddy,
    autoplay: true,
    stateMachines: STATE_MACHINE_NAME,
    onLoad: () => setIsTeddyLoaded(true), // Set to true when teddy loads successfully
    onError: () => setIsTeddyLoaded(false), // Set to false if there's an error
  });

  useEffect(() => {
    setLook();
  }, [user]);

  const stateSuccess = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    "success"
  );
  const stateFail = useStateMachineInput(rive, STATE_MACHINE_NAME, "fail");
  const stateHandUp = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    "hands_up"
  );

  const stateCheck = useStateMachineInput(rive, STATE_MACHINE_NAME, "Check");
  const stateLook = useStateMachineInput(rive, STATE_MACHINE_NAME, "Look");

  const triggerSuccess = () => {
    stateSuccess && stateSuccess.fire();
  };
  const triggerFail = () => {
    stateFail && stateFail.fire();
  };

  const setHangUp = (hangUp) => {
    stateHandUp && (stateHandUp.value = hangUp);
  };

  const setLook = () => {
    if (!stateLook || !stateCheck || !setHangUp) {
      return;
    }
    setHangUp(false);
    setCheck(true);
    let nbChars = 0;
    if (user) {
      nbChars = parseFloat(user.split("").length);
    }

    let ratio = nbChars / parseFloat(41);
    console.log("ratio " + ratio);

    let lookToSet = ratio * 100 - 25;
    console.log("lookToSet " + Math.round(lookToSet));
    stateLook.value = Math.round(lookToSet);
  };
  const setCheck = (check) => {
    if (stateCheck) {
      stateCheck.value = check;
    }
  };

  if (rive) {
    console.log(rive.contents);
  }

  // ---------------------new register--------------------------------------
  const [credentials, setCredentials] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message);
        return;
      }

      dispatch({ type: "REGISTER_SUCCESS" });
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };
  // ---------------------new register--------------------------------------
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            className="w-96 h-96 rounded-full overflow-hidden flex justify-center items-center"
            style={{ border: "2px solid #2a1585" }}
          >
            {isTeddyLoaded ? (
              <RiveComponent
                style={{ width: "400px", height: "400px" }}
                src={teddy}
              />
            ) : (
              <div
                style={{
                  width: "400px",
                  height: "400px",
                  textAlign: "center",
                  lineHeight: "400px",
                }}
              >
                Animation failed to load
              </div>
            )}
          </div>
          <Typography
            component="h1"
            variant="h5"
            style={{ fontWeight: "bold" }}
          >
            Register
          </Typography>
          <Box
            component="form"
            onSubmit={handleClick}
            noValidate
            sx={{ mt: 1 }}
          >
            <form autoComplete="off">
              <TextField
                onFocus={() => setHangUp(false)}
                onChange={(e) => {
                  setCredentials((prev) => ({
                    ...prev,
                    [e.target.id]: e.target.value,
                  }));
                  setUser(e.target.value);
                }}
                margin="normal"
                required
                fullWidth
                id="username"
                label="Name"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                onFocus={() => setHangUp(false)}
                onChange={(e) => {
                  setCredentials((prev) => ({
                    ...prev,
                    [e.target.id]: e.target.value,
                  }));
                  setUser(e.target.value);
                }}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <TextField
                onChange={(event) => {
                  setHangUp(true);
                  setPassword(event.target.value);
                  setCredentials((prev) => ({
                    ...prev,
                    [event.target.id]: event.target.value,
                  }));
                }}
                value={password}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </form>
            <Button
              onMouseOver={() => setHangUp(false)}
              onFocus={() => setHangUp(false)}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid2 container justifyContent="center" alignItems="center">
              <Grid2 item>
                <span className="text-center">
                  {"Already have an account? "}
                </span>
                <Link
                  to="/login"
                  variant="body2"
                  className="text-decoration-none"
                >
                  {"Login"}
                </Link>
              </Grid2>
            </Grid2>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
