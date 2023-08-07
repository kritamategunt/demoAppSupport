import { Box, Grid, Typography } from "@mui/material";
function Home() {
  return (
    <Grid
      sx={{
        display: "flex",
        height: "90vh",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Typography fontSize={35} fontWeight={600} textAlign={"center"}>
          App support
        </Typography>
       
      </Box>
    </Grid>
  );
}

export default Home;
