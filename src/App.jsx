import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";

import NavBar from "./navbar/NavBar";
import Register from "./register";
import LogIn from "./LogIn";
import MovieReview from "./MovieReview";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Box
              sx={{
                height: '100vh',
                backgroundImage: 'url(background.jpg)',
                backgroundSize: 'cover',
              }}
            >
              <Container maxWidth="sm" sx={{ alignContent: 'center' }}>
                <Box sx={{ my: 4 }}>
                  <Typography fontFamily="monospace" fontWeight={700} color="white" variant="h1" component="h1" sx={{ mb: 2 }}>
                    Reseña tus películas favoritas
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Button component={Link} to="/register" variant="contained" color="primary">
                  <Typography>Regístrate</Typography>
                </Button>
                <Button component={Link} to="/LogIn" variant="contained" color="primary">
                  <Typography>Bienvenido</Typography>
                </Button>
                </Box>
              </Container>
            </Box>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/moviereview" element={<MovieReview />} />
      </Routes>
    </>
  );
}