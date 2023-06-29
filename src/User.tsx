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
          <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", mr: 2, }}>
            <Typography sx={{ fontSize: 20, mr: 0.5, mt: 0 }}>{user.currentDailyCredits}</Typography>
            <Box component="img" alt="Daily Credits" src="/TTCDailyCredits.png" height={24} />
          </Box>
        </Tooltip><Tooltip title={`${user.permanentCredits} permanent credits remaining`}>
          <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", mr: 2 }}>
            <Typography sx={{ fontSize: 20, mr: 0.5, mt: 0 }}>{user.permanentCredits}</Typography>
            <Box component="img" alt="Permanent Credits" src="/TTCPermCredits.png" height={24} />
          </Box>
        </Tooltip>
      </>}
      <Button color="error" variant="contained" sx={{ mr: 2, mt: 0 }}>
        <Link href="/earncredits" style={{ textDecoration: "none", color: "#FFFFFF" }}>Earn more credits</Link>
      </Button>
      <Button color="info" variant="contained" sx={{ mt: 0 }}>
        <Link href="/" onClick={logout} style={{ textDecoration: "none", color: "#000000" }}>Logout</Link>
      </Button>
    </>
  );
};