import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import { Container } from "@mui/material";

const App = () => {
  const contentStyles = {
    margin: "30px auto",
  };
  return (
    <Container maxWidth="md">
      <NavBar />
      <Container style={contentStyles}>
        <Outlet />
      </Container>
    </Container>
  );
};

export default App;
