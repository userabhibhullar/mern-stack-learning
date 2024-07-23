import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import { Container } from "@mui/material";

const App = () => {
  return (
    <Container maxWidth="md">
      <NavBar />
      <Outlet />
    </Container>
  );
};

export default App;
