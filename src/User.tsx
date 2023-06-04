import { Box, Button, Tooltip, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from './App';

export const User = () => {

  const { user, setUser } = useContext(LoginContext);

  const logout = () => {
    setUser(null);
  }

  return (
    <>
      {user && <>
        <Tooltip title={`${user.dailyCredits} daily credits remaining`}>
          <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", mr: 2 }}>
            <Typography sx={{ fontSize: 20 }}>{user.dailyCredits}</Typography>
            <Box component="img" alt="Turing Test Chat logo" src="TTCLogov2.png" height={16} />
          </Box>
        </Tooltip><Tooltip title={`${user.permanentCredits} permanent credits remaining`}>
          <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", mr: 2 }}>
            <Typography sx={{ fontSize: 20 }}>{user.permanentCredits}</Typography>
            <Box component="img" alt="Turing Test Chat logo" src="TTCLogov2.png" height={16} />
          </Box>
        </Tooltip>
      </>}
      <Link style={{
        color: "#1D1D1D",
        fontFamily: "monospace",
        fontSize: 18,
        textDecoration: "none",
        marginRight: "2em"
      }}
        to={"/earncredits"}><Button color="error" variant="contained">Earn more credits</Button>
      </Link>
      <Link style={{
        color: "#1D1D1D",
        fontFamily: "monospace",
        fontSize: 18,
        textDecoration: "none"
      }}
        to={"/"}
        onClick={logout}><Button color="info" variant="contained">Logout</Button>
      </Link>
    </>
  );
};
