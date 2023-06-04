
import { Circle } from '@mui/icons-material';
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const User = () => {

  const navigate = useNavigate();

  const [userAnchorEl, setUserAnchorEl] = useState<null | HTMLElement>(null);
  const [profileImage, setProfileImage] = useState("TTCHumanv2.png");
  const [credits] = useState(0);
  const userDropDownOpen = Boolean(userAnchorEl);

  const logout = () => {
    setProfileImage(profileImage);
    navigate("/");
  }

  return (
    <>
      <Typography sx={{ fontSize: 20 }}>{credits} Credits Remaining</Typography>
      <Button
        sx={{ mx: 1 }}
        variant="text"
        color="primary"
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => setUserAnchorEl(event.currentTarget)}>
        <Box component="img" alt="Profile Picture" src={profileImage} sx={{ maxWidth: 64 }} />
      </Button>
      <Menu
        sx={{ list: { color: "secondary" } }}
        MenuListProps={{ color: "secondary" }}
        open={userDropDownOpen}
        anchorEl={userAnchorEl}
        onClose={() => setUserAnchorEl(null)}
        color="primary">
        {/* <MenuItem color="info">
          <Link to="/home/settings" state={{ profileImage: profileImage }}
            style={{ color: "#1D1D1D", fontFamily: "monospace", fontSize: 18, textDecoration: "none" }}>Settings</Link>
        </MenuItem> */}
        <MenuItem
          style={{ color: "#1D1D1D", fontFamily: "monospace", fontSize: 18, textDecoration: "none" }}
          onClick={() => logout()}>Logout</MenuItem>
      </Menu>
      <Typography sx={{ fontSize: 20 }}>0</Typography>
      <Circle sx={{ color: "#000000", maxWidth: 16 }} />
    </>
  );
};
