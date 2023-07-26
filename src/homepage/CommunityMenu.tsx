import React from 'react';
import HoverMenu from 'material-ui-popup-state/HoverMenu';
import MenuItem from '@mui/material/MenuItem';
import {
  usePopupState,
  bindFocus,
  bindHover,
  bindMenu,
} from 'material-ui-popup-state/hooks';
import { Box, Link, Typography } from '@mui/material';
import { BrowserView, MobileView } from 'react-device-detect';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';
import Image from "next/image";
import DiscordIcon from "../../public/discordicon.png";
import TTCLogo from "../../public/TTCLogo.png";

const CommunityMenu = () => {
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoMenu',
  });

  return (
    <>
      <MobileView>
        <Box flexDirection="row" display="flex" alignContent="center"
          {...bindHover(popupState)}
          {...bindFocus(popupState)}>
          <Typography
            style={{
              color: "#e9e9e9",
              fontSize: 12,
              textDecoration: "none",
              fontWeight: "normal",
              marginRight: 0,
              marginTop: 5
            }}>
            Community
          </Typography>
          <ArrowDropDown />
        </Box>
        <HoverMenu
          {...bindMenu(popupState)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}>
          <MenuItem sx={{ color: "#1D1D1D" }} onClick={popupState.close}>
            <Link sx={{ color: "#1F51FF" }} href="https://old.reddit.com/r/TuringTestChat/">
              <RedditIcon sx={{ color: "#1F51FF", width: 24, height: 24 }} /> Reddit
            </Link>
          </MenuItem>
          <MenuItem sx={{ color: "#1D1D1D" }} onClick={popupState.close}>
            <Link sx={{ color: "#1F51FF" }} href="https://discord.com/invite/SX48DMUb5H">
              <Image alt="Discord Icon" src="/discordicon.png" width={24} height={24} /> Discord
            </Link>
          </MenuItem>
          <MenuItem>
            <Link sx={{ color: "#1F51FF" }} href="https://twitter.com/TuringTestChat">
              <TwitterIcon sx={{ color: "#1F51FF", width: 24, height: 24 }} /> Twitter
            </Link>
          </MenuItem>
          <MenuItem>
            <Link sx={{ color: "#1F51FF" }} href="https://docs.google.com/document/d/1CzymxKXPxEW-pyXYBdSZLG6CB-86lCsew9gBhSPpkec/edit?usp=sharing">
              <Image src="/TTCLogo.png" alt="Turing Test Chat logo" width={24} height={24} /> Update Notes
            </Link>
          </MenuItem>
        </HoverMenu>
      </MobileView>
      <BrowserView>
        <Box flexDirection="row" display="flex" alignContent="center"
          {...bindHover(popupState)}
          {...bindFocus(popupState)}>
          <Typography
            style={{
              color: "#e9e9e9",
              fontSize: 20,
              textDecoration: "none",
              fontWeight: "normal",
              marginRight: 0,
              marginTop: 0
            }}>
            Community
          </Typography>
          <ArrowDropDown />
        </Box>
        <HoverMenu
          {...bindMenu(popupState)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}>
          <MenuItem sx={{ color: "#1D1D1D" }} onClick={popupState.close}>
            <Link sx={{ color: "#1F51FF" }} href="https://old.reddit.com/r/TuringTestChat/">
              <RedditIcon sx={{ color: "#1F51FF", width: 24, height: 24 }} /> Reddit
            </Link>
          </MenuItem>
          <MenuItem sx={{ color: "#1D1D1D" }} onClick={popupState.close}>
            <Link sx={{ color: "#1F51FF" }} href="https://discord.com/invite/SX48DMUb5H">
              <Image alt="Discord Icon" src={DiscordIcon} width={24} height={24} /> Discord
            </Link>
          </MenuItem>
          <MenuItem>
            <Link sx={{ color: "#1F51FF" }} href="https://twitter.com/TuringTestChat">
              <TwitterIcon sx={{ color: "#1F51FF", width: 24, height: 24 }} /> Twitter
            </Link>
          </MenuItem>
          <MenuItem>
            <Link sx={{ color: "#1F51FF" }} href="https://docs.google.com/document/d/1CzymxKXPxEW-pyXYBdSZLG6CB-86lCsew9gBhSPpkec/edit?usp=sharing">
              <Image src={TTCLogo} alt="Turing Test Chat logo" width={24} height={24} /> Update Notes
            </Link>
          </MenuItem>
        </HoverMenu>
      </BrowserView>
    </>
  )
}

export default CommunityMenu