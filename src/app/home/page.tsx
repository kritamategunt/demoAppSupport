import { Box, Grid, Typography } from "@mui/material";
const Home: React.FC = () => {
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
        <Typography fontSize={25} fontWeight={500} textAlign={"center"}>
          ERP system
        </Typography>
       
      </Box>
    </Grid>
  );
}

export default Home;
