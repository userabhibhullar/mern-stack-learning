import React from "react";

import { Typography, Button, ButtonGroup } from "@mui/material";
import { Create, Delete, CheckCircle } from "@mui/icons-material";
const Todo = () => {
  const todoStyles = {
    margin: "20px auto",
    padding: "20px",
    border: "2px solid #bdbdbd",
    borderRadius: "9px",
    display: "flex",
    justifyContent: "space-between",
  };
  const grayStyle = {
    color: "#8f8f8f",
  };
  return (
    <>
      <div style={todoStyles}>
        <div>
          <Typography variant="subtitle1">Learn React</Typography>
          <Typography style={grayStyle} variant="body2">
            Author: Abhi
          </Typography>
          <Typography style={grayStyle} variant="body2">
            Added: 4 days ago.
          </Typography>
        </div>
        <div>
          <ButtonGroup size="small" aria-label="outlined primary button group">
            <Button>
              <CheckCircle color="action" />
            </Button>
            <Button>
              <Create color="primary" />
            </Button>
            <Button>
              <Delete color="secondary" />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
};

export default Todo;
