import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signOut } from "../../store/action/authActions";
import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import { Link, redirect, useNavigate } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const linkStyles = {
    color: "white",
    textDecoration: "none",
  };
  const rootStyles = {
    flexGrow: 1,
  };

  const handleSignOut = () => {
    dispatch(signOut());
    redirect("/signin");
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
          {auth._id ? (
            <>
              <Typography variant="subtitle2" style={rootStyles}>
                logged in as {auth.name}
              </Typography>
              <Button onClick={handleSignOut} color="inherit">
                SignOut
              </Button>
            </>
          ) : (
            <>
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
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
