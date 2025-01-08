import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid2,
  CardActionArea,
} from "@mui/material";
import { getPeliculas } from "./clientApi/cliente";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [peliculas, setPeliculas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPeliculas = async () => {
      try {
        const data = await getPeliculas();
        setPeliculas(data);
      } catch (error) {
        console.error(error);
        navigate("/welcome");
      }
    };

    fetchPeliculas();
  }, []);

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
      <Grid2 container spacing={4} justifyContent="center">
        {peliculas.map((pelicula) => (
          <Grid2 item xs={12} sm={6} md={4} key={pelicula.movieId}>
            <Card sx={{ maxWidth: 345, margin: "auto" }}>
              <CardActionArea
                component={Link}
                to={`/movie/${pelicula.movieId}`}
                state={{ pelicula }}
              >
                <CardMedia
                  component="img"
                  height="450"
                  image={pelicula.movie_poster_url}
                  alt={pelicula.title}
                />
                <CardContent sx={{ backgroundColor: "#37474F" }}>
                  <Typography
                    variant="h6"
                    color="white"
                    align="center"
                    fontWeight="bold"
                  >
                    {pelicula.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}
