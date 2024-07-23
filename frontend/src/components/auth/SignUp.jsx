import { TextField, Typography, Button } from "@mui/material";
const SignUp = () => {
  const formStyles = {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  };
  const spacingStyle = {
    marginTop: "20px",
  };
  return (
    <>
      <form style={formStyles} noValidate autoComplete="off">
        <Typography variant="h5">Sign Up</Typography>
        <TextField
          id="enter-name"
          style={spacingStyle}
          label="enterName"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="enter-email"
          style={spacingStyle}
          label="enterEmail"
          variant="outlined"
          fullWidth
        />
        <TextField
          type="password"
          id="enter-password"
          style={spacingStyle}
          label="enterPassword"
          variant="outlined"
          fullWidth
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
