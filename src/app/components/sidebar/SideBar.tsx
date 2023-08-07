import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import { List, ListItemText, styled } from "@mui/material";
import Logo from "../img/axonsLogo_white.png";
import HomeIcon from "@mui/icons-material/Home";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PaidIcon from "@mui/icons-material/Paid";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';

function SideBar() {
  const [open, setOpen] = useState<boolean>(false);
  const userInfo: string[] = JSON.parse(
    localStorage.getItem("user") ?? "[]"
  );

 
  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => {}}
        //style
        PaperProps={{
          sx: {
            backgroundColor: "#074E9F",
            color: "white",
          },
        }}
      >
        <div style={{ width: "250px" }}>
          {/* <Box textAlign="center" p={5}>
            <img src={Logo} style={{ width: "100px" }} alt="logo" />
          </Box> */}
          <Divider />
          <List>
            {/* <LinkStyle to="/dashboard/home">
              <ListItem>
                <HomeIcon sx={{ mx: "5px" }} />
                <ListItemText primary={"หน้าแรก"} />
              </ListItem>
            </LinkStyle>
            */}
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default SideBar;
