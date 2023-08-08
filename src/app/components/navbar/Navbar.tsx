"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styles from "./navbar.module.css"
import {
  AppBar,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import SideBar from "../sidebar/SideBar";
import useMsal from "@/hooks/useMsal";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Login from "@/app/login/page";

const navbarLink = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "login AD beta", url: "/login" },

];
const Navbar: React.FC = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const { isAuthenticated, user, login, logout } = useMsal();


  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogoutPopup = () => {
    // instance
    //   .logoutPopup({
    //     account: instance.getActiveAccount(),
    //     postLogoutRedirectUri: "/",
    //     mainWindowRedirectUri: "/",
    //   })
    //   .then(() => {
    //     if (!isAuthenticated) {
    //       navigate("/");
    //     }
    //     console.log("isAut::", isAuthenticated);
    //     localStorage.removeItem("token");
    //     localStorage.clear();
    //   })
    //   .catch((error) => console.log("error", error));
  };

  return (
    // <div>
    //               <h1>Hello, {user ? user.name : "User"}!</h1>
    //               {JSON.stringify(user)}
    //               <button onClick={logout}>Logout</button>
    //             </div>

    <AppBar position="sticky">

      {!isAuthenticated ? (<Login/>) : (<div>  <Toolbar sx={{ backgroundColor: "#074E9F", color: "white" }}>
        <SideBar />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "end",
            marginLeft: "auto",
          }}
        >
          <div>
            <Typography textAlign="right" marginRight={"10px"}>
              {user?.name}
            </Typography>
            <Typography
              textAlign="right"
              marginRight={"10px"}
              fontSize={"12px"}
            >
              {user?.username}
            </Typography>
          </div>
          <IconButton onClick={handleOpenUserMenu}>
            <AccountCircleIcon fontSize="large" htmlColor="white" />
          </IconButton>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Icon style={{ marginInline: "5px" }}>
                <ExitToAppIcon></ExitToAppIcon>
              </Icon>
              <Typography textAlign="center" onClick={logout}>
                Logout
              </Typography>
            </MenuItem>
          </Menu>
        </div>
      </Toolbar></div>)}

    </AppBar>
  );
};

export default Navbar;
