import { Box, Button, Tooltip, Typography } from '@mui/material';
import { useContext } from 'react';
import { LoginContext } from './pages/_app';
import Link from 'next/link';
import { isMobile } from 'react-device-detect';

export const User = () => {

  const { user, setUser } = useContext(LoginContext);

  const logout = () => {
    setUser(null);
  }

  return (
    <>
      {user && <>
        {/* <Tooltip title={`${user.currentDailyCredits} daily credits remaining`}>
          <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", mr: 2, ml: 2, }}>
            <Typography sx={{ fontSize: isMobile ? 12 : 20, mr: 0.5, mt: 0 }}>{user.currentDailyCredits}</Typography>
            <Box component="img" alt="Daily Credits" src="/TTCDailyCredits.png" height={isMobile ? 16 : 24} />
          </Box>
        </Tooltip>
        <Tooltip title={`${user.permanentCredits} permanent credits remaining`}>
          <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", direction: "row", mr: 2 }}>
            <Typography sx={{ fontSize: isMobile ? 12 : 20, mr: 0.5, mt: 0 }}>{user.permanentCredits}</Typography>
            <Box component="img" alt="Permanent Credits" src="/TTCPermCredits.png" height={isMobile ? 16 : 24} />
          </Box>
        </Tooltip> */}
        <Tooltip title={`${user.currentDailyCredits} daily credits remaining`}>
          <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", mr: 2, ml: "auto", }}>
            <Typography sx={{ fontSize: isMobile ? 12 : 20, mr: 0.5, mt: 0 }}>{user.currentDailyCredits}</Typography>
            <Box component="img" alt="Daily Credits" src="/TTCDailyCredits.png" height={isMobile ? 16 : 24} />
          </Box>
        </Tooltip>
        <Tooltip title={`${user.permanentCredits} permanent credits remaining`}>
          <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", direction: "row", mr: 2 }}>
            <Typography sx={{ fontSize: isMobile ? 12 : 20, mr: 0.5, mt: 0 }}>{user.permanentCredits}</Typography>
            <Box component="img" alt="Permanent Credits" src="/TTCPermCredits.png" height={isMobile ? 16 : 24} />
          </Box>
        </Tooltip>
      </>}
      <Button color="info" variant="contained" sx={{ fontSize: isMobile ? 10 : 16, ml: "auto" }} size="small">
        <Link href="/" onClick={logout} style={{ textDecoration: "none", color: "#000000" }}>Logout</Link>
      </Button>
    </>
  );
};