import React, { useState, useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRive, useStateMachineInput } from "rive-react";
import "./teddy.css";
import teddy from "./520-990-teddy-login-screen.riv";
import { Grid2 } from "@mui/material";

//NEW IMPORTS
import { BASE_URL } from "../utils/config";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const theme = createTheme();
const STATE_MACHINE_NAME = "State Machine 1";

export default function SignIn() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isTeddyLoaded, setIsTeddyLoaded] = useState(true); // State to check if teddy loads
  const [toastMessage, setToastMessage] = useState(""); // State for toast message

  const { rive, RiveComponent } = useRive({
    src: teddy,
    autoplay: true,
    stateMachines: STATE_MACHINE_NAME,
    onLoad: () => setIsTeddyLoaded(true), // Setd to true when teddy loads successfully
    onError: () => setIsTeddyLoaded(false), // Set to false if there's an error
  });

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
    stateSuccess?.fire();
  };

  const triggerFail = () => {
    stateFail?.fire();
    showToast("Login failed. Please check your credentials.");
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(""), 3000); // Hide toast after 3 seconds
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
    let nbChars = user.length;
    let ratio = nbChars / 41;
    let lookToSet = ratio * 100 - 25;
    stateLook.value = Math.round(lookToSet);
  };

  const setCheck = (check) => {
    if (stateCheck) {
      stateCheck.value = check;
    }
  };

  useEffect(() => {
    setLook();
  }, [user]);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser(value);
    setCredentials((prev) => ({ ...prev, [id]: value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });

      const result = await res.json();
      if (!res.ok) {
        triggerFail();
        dispatch({ type: "LOGIN_FAILURE", payload: result.message });
        return;
      }
      triggerSuccess();
      dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
      showToast("An error occurred. Please try again.");
    }
  };

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
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleClick}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              onFocus={() => setHangUp(false)}
              onChange={(event) => {
                setUser(event.target.value);
                setCredentials((prev) => ({
                  ...prev,
                  [event.target.id]: event.target.value,
                }));
              }}
              value={user}
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
            <Button
              onMouseOver={() => setHangUp(false)}
              onFocus={() => setHangUp(false)}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid2 container justifyContent="center" alignItems="center">
              <Grid2 item>
                <span className="text-center">{"Don't have an account? "}</span>
                <Link
                  to="/register"
                  variant="body2"
                  className="text-decoration-none"
                >
                  {"Sign Up"}
                </Link>
              </Grid2>
            </Grid2>
          </Box>
        </Box>
      </Container>
      {toastMessage && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#f44336",
            color: "white",
            padding: "10px 20px",
            borderRadius: "8px",
            fontSize: "14px",
            textAlign: "center",
            zIndex: 1000,
          }}
        >
          {toastMessage}
        </div>
      )}
    </ThemeProvider>
  );
}
