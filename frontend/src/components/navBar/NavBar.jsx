import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const linkStyles = {
    color: "white",
    textDecoration: "none",
  };
  const rootStyles = {
    flexGrow: 1,
  };

  const handleSignOut = () => {
    console.log("navigating");
    navigate("/signin");
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" style={rootStyles}>
            <Link style={linkStyles} to={"/"}>
              toDoApp;
            </Link>
          </Typography>
          <Typography variant="subtitle2" style={rootStyles}>
            logged in as Abhi
          </Typography>
          <Button onClick={handleSignOut} color="inherit">
            SignOut
          </Button>
          <Button color="inherit">
            <Link to={"/signin"} style={linkStyles}>
              Sign In
            </Link>
          </Button>
          <Button color="inherit">
            <Link to={"/signup"} style={linkStyles}>
              SignUp
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
