'use client'

import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import useMsal from "../../hooks/useMsal";
import { AccountInfo } from "@azure/msal-browser";
import { json } from "stream/consumers";
import logo from "../../../public/axonsLogo.png";
import {
  Button,
  Card,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Image from "next/image";

const Login: React.FC = () => {
  const { isAuthenticated, user, login, logout } = useMsal();
  console.log({ user })
  // return (
  //   <div>
  //     {isAuthenticated ? (
  //       <div>
  //         <h1>Hello, {user ? user.name : "User"}!</h1>
  //         {JSON.stringify(user)}
  //         <button onClick={logout}>Logout</button>
  //       </div>
  //     ) : (
  //       <button onClick={login}>Login with Azure AD</button>
  //     )}
  //   </div>

  // );



  return (
    <>
      <Grid container>
        {/* <Grid
          item
          xs={0}
          md={6}
          lg={6}
          height={"100vh"}
          sx={{
            backgroundImage: 'url("/pig3.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></Grid> */}
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
          height={"100vh"}
          sx={{
            background: "linear-gradient(#074E9F,   #19408b 60%, #172f73)",
          }}
        >
          <Grid rowSpacing={2} textAlign={"center"}>
            <Card sx={{ padding: "50px", borderRadius: "1rem" }}>
              <Grid>
                {/* <img
                  src={logo}
                  alt="logo axons"
                  style={{
                    width: 100,
                    marginBottom: 10,
                  }}
                  /> */}
                  <Image src={logo} alt="axons logo" width={100}/>
                  
              </Grid>
              <Grid>
                <Typography
                  fontSize={"30px"}
                  color="#074E9F"
                  sx={{ mt: "10px" }}
                >
                  App support
                  {isAuthenticated}
                </Typography>
              </Grid>
              <Grid sx={{ mb: "5%" }}>
                <Typography color="#074E9F">
                  เข้าสู่ระบบเพื่อดำเนินการต่อ
                </Typography>
                <FormControl variant="outlined" size="small">
                  <Select
                    fullWidth
                    type="string"

                    sx={{ mt: 10 }}

                  >
                    {/* {dataOrgCode?.GetOrganizationListByCountryResult.map(
                      (item, i) => (
                        <MenuItem key={i} value={item.OrgCode}>
                          {item.OrgNameLoc} : {"(" + item.OrgCode + ")"}
                        </MenuItem>
                      )
                    )} */}
                  </Select>
                </FormControl>
              </Grid>
              {isAuthenticated ? (

                <div>
                  <h1>Hello, {user ? user.name : "User"}!</h1>
                  {JSON.stringify(user)}
                  <button onClick={logout}>Logout</button>
                </div>

              ) : (
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: "#074E9F" }}
                  onClick={login}
                >
                  เข้าสู่ระบบ
                </Button>
              )}
             


            </Card>
          </Grid>
        </Grid>
      </Grid >

    </>
  );
};

export default Login;