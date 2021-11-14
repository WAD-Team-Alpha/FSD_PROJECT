import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ActionAreaCard from "./Card";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <ActionAreaCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ActionAreaCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ActionAreaCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ActionAreaCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ActionAreaCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ActionAreaCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ActionAreaCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ActionAreaCard />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
