import { Box, Button, Tooltip, Typography } from '@mui/material';
import { useContext } from 'react';
import { LoginContext } from './pages/_app';
import Link from 'next/link';

export const User = () => {

  const { user, setUser } = useContext(LoginContext);

  const logout = () => {
    setUser(null);
  }

  return (
    <>
      {user && <>
        <Tooltip title={`${user.currentDailyCredits} daily credits remaining`}>
          <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", mr: 2 }}>
            <Typography sx={{ fontSize: 20, mr: 0.5 }}>{user.currentDailyCredits}</Typography>
            <Box component="img" alt="Daily Credits" src="/TTCDailyCredits.png" height={24} />
          </Box>
        </Tooltip><Tooltip title={`${user.permanentCredits} permanent credits remaining`}>
          <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", mr: 2 }}>
            <Typography sx={{ fontSize: 20, mr: 0.5 }}>{user.permanentCredits}</Typography>
            <Box component="img" alt="Permanent Credits" src="/TTCPermCredits.png" height={24} />
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
        href="/earncredits"><Button color="error" variant="contained">Earn more credits</Button>
      </Link>
      <Link style={{
        color: "#1D1D1D",
        fontFamily: "monospace",
        fontSize: 18,
        textDecoration: "none"
      }}
        href="/"
        onClick={logout}><Button color="info" variant="contained">Logout</Button>
      </Link>
    </>
  );
};