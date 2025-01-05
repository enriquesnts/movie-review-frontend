import React from "react";
import { Container, Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

export default function MovieReview() {
  const peliculas = [
    {
      id: 1,
      titulo: "TERMINATOR 2 Judgment Day",
      imagen: "https://picsum.photos/id/10/345/450", 
    },
    {
      id: 2,
      titulo: "IT (2018)",
      imagen: "https://picsum.photos/id/78/345/450",
    },
    {
      id: 3,
      titulo: "Matrix Reloaded",
      imagen: "https://picsum.photos/id/13/345/450", 
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        textAlign="center"
        fontWeight="bold"
        sx={{ marginBottom: 3 }}
      >
        Movie Review
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {peliculas.map((pelicula) => (
          <Grid item xs={12} sm={6} md={4} key={pelicula.id}>
            <Card sx={{ maxWidth: 345, margin: "auto" }}>
              <CardMedia
                component="img"
                height="450"
                image={pelicula.imagen} 
                alt={pelicula.titulo}
              />
              <CardContent sx={{ backgroundColor: "#37474F" }}>
                <Typography
                  variant="h6"
                  color="white"
                  align="center"
                  fontWeight="bold"
                >
                  {pelicula.titulo}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
