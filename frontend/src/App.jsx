import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./store/action/authActions";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import { Container } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  const contentStyles = {
    margin: "30px auto",
  };
  return (
    <>
      <ToastContainer />
      <Container maxWidth="md">
        <NavBar />
        <Container style={contentStyles}>
          <Outlet />
        </Container>
      </Container>
    </>
  );
};

export default App;
