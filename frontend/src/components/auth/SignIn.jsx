import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../store/action/authActions";
import { TextField, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(credentials));
    setCredentials({
      email: "",
      password: "",
    });
  };

  const formStyles = {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  };
  const spacingStyle = {
    marginTop: "20px",
  };

  if (auth._id) return navigate("/");

  return (
    <>
      <form
        style={formStyles}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">Sign In</Typography>
        <TextField
          id="enter-email"
          style={spacingStyle}
          label="enterEmail"
          variant="outlined"
          fullWidth
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
        <TextField
          type="password"
          id="enter-password"
          style={spacingStyle}
          label="enterPassword"
          variant="outlined"
          fullWidth
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <Button
          style={spacingStyle}
          label="enterEmail"
          variant="contained"
          color="primary"
          type="submit"
        >
          Sign In
        </Button>
      </form>
    </>
  );
};

export default SignIn;
