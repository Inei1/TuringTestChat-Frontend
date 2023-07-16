import { Box, Button, Tooltip, Typography } from '@mui/material';
import { useContext } from 'react';
import { LoginContext } from './pages/_app';
import Link from 'next/link';
import { BrowserView, MobileView } from 'react-device-detect';
import Image from 'next/image';

export const User = () => {

  const { user, setUser } = useContext(LoginContext);

  const logout = () => {
    setUser(null);
  }

  return (
    <>
      <MobileView>
        {user && <>
          <Tooltip title={`${user.currentDailyCredits} daily credits remaining`}>
            <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", mr: 2, ml: "auto", }}>
              <Typography sx={{ fontSize: 12, mr: 0.5, mt: 0 }}>{user.currentDailyCredits}</Typography>
              <Image alt="Daily Credits" src="/TTCDailyCredits.png" height={16} width={16} />
            </Box>
          </Tooltip>
          <Tooltip title={`${user.permanentCredits} permanent credits remaining`}>
            <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", direction: "row", mr: 2 }}>
              <Typography sx={{ fontSize: 12, mr: 0.5, mt: 0 }}>{user.permanentCredits}</Typography>
              <Image alt="Permanent Credits" src="/TTCPermCredits.png" height={16} width={16} />
            </Box>
          </Tooltip>
        </>}
        <Button color="info" variant="contained" sx={{ fontSize: 10, ml: "auto" }} size="small">
          <Link href="/" onClick={logout} style={{ textDecoration: "none", color: "#000000" }}>Logout</Link>
        </Button>
      </MobileView>
      <BrowserView>
        {user && <>
          <Tooltip title={`${user.currentDailyCredits} daily credits remaining`}>
            <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", mr: 2, ml: "auto", }}>
              <Typography sx={{ fontSize: 20, mr: 0.5, mt: 0 }}>{user.currentDailyCredits}</Typography>
              <Image alt="Daily Credits" src="/TTCDailyCredits.png" height={24} width={24} />
            </Box>
          </Tooltip>
          <Tooltip title={`${user.permanentCredits} permanent credits remaining`}>
            <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", direction: "row", mr: 2 }}>
              <Typography sx={{ fontSize: 20, mr: 0.5, mt: 0 }}>{user.permanentCredits}</Typography>
              <Image alt="Permanent Credits" src="/TTCPermCredits.png" height={24} width={24} />
            </Box>
          </Tooltip>
        </>}
        <Button color="info" variant="contained" sx={{ fontSize: 16, ml: "auto" }} size="small">
          <Link href="/" onClick={logout} style={{ textDecoration: "none", color: "#000000" }}>Logout</Link>
        </Button>
      </BrowserView>
    </>
  );
};