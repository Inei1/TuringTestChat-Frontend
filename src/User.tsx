
import { Box, Button, Grid, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const User = () => {

  const navigate = useNavigate();

  const [userAnchorEl, setUserAnchorEl] = useState<null | HTMLElement>(null);
  const userDropDownOpen = Boolean(userAnchorEl);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  }

  console.log(localStorage.getItem("user"));

  return (
    <>
      <Typography>Infinite Credits Remaining</Typography>
      <Box sx={{ flexGrow: 0.05 }} />
      <Typography>0</Typography>
      <Box sx={{ flexGrow: 0.05 }} />
      <Button
        variant="contained"
        color="primary"
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => setUserAnchorEl(event.currentTarget)}>
        <Box component="img" alt="Human Icon" src="TTCHumanv2.png" sx={{ maxWidth: 64 }} />
      </Button>
      <Menu open={userDropDownOpen} anchorEl={userAnchorEl} onClose={() => setUserAnchorEl(null)}>
        <MenuItem onClick={() => console.log("AA")}>Settings</MenuItem>
        <MenuItem onClick={() => logout()}>Logout</MenuItem>
      </Menu>
    </>
  );
};