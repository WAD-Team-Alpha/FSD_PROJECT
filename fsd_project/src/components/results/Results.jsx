import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ActionAreaCard from "./Card";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { width } from "@mui/system";
import PaginationOutlined from "./pagination";
import { Divider } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: "20px",
  },
  paper: {
    width: "fit-content",
    color: "#05386B",
  },
  query: {
    paddingTop: "1rem",
    
  },
  pagination: {
    padding: "1rem",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "40%",
  },
});
export default function ResultCard() {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Typography className={classes.query} variant="h5" gutterBottom>
        Search Results for "Lizard"
      </Typography>
      <Divider />
      <Box sx={{ flexGrow: 1, marginY:"1.5rem" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <ActionAreaCard />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ActionAreaCard />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ActionAreaCard />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ActionAreaCard />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ActionAreaCard />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ActionAreaCard />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ActionAreaCard />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ActionAreaCard />
          </Grid>
        </Grid>
      </Box>
      <Container className={classes.pagination}>
        <PaginationOutlined />
      </Container>
    </Container>
  );
}
