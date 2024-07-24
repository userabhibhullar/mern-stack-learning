import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Typography, Button } from "@mui/material";
import { signUp } from "../../store/action/authActions";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formStyles = {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  };
  const spacingStyle = {
    marginTop: "20px",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(user));
    setUser({
      name: "",
      email: "",
      password: "",
    });
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
        <Typography variant="h5">Sign Up</Typography>
        <TextField
          id="enter-name"
          style={spacingStyle}
          label="enterName"
          variant="outlined"
          fullWidth
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <TextField
          id="enter-email"
          style={spacingStyle}
          label="enterEmail"
          variant="outlined"
          fullWidth
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <TextField
          type="password"
          id="enter-password"
          style={spacingStyle}
          label="enterPassword"
          variant="outlined"
          fullWidth
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button
          style={spacingStyle}
          label="enterEmail"
          variant="contained"
          color="primary"
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </>
  );
};

export default SignUp;
