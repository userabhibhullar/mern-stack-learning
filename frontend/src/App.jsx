import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import { Container } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
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
