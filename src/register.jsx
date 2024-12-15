import React, { useState } from "react";
import { Container, TextField, Typography, Button, Box } from "@mui/material";


const apiurl = import.meta.env.VITE_MOVIES_API

console.log(apiurl)

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch({url:apiurl + "/registro", method:"post", body:formData})
    console.log("Datos enviados:", formData);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: "url(background.jpg)",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="sm" sx={{ bgcolor: "rgba(0, 0, 0, 0.8)", p: 4, borderRadius: 2 }}>
        <Typography
          fontFamily="monospace"
          fontWeight={700}
          color="white"
          variant="h4"
          component="h1"
          sx={{ mb: 3, textAlign: "center" }}
        >
          ¡Registrate!
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField sx={{ bgcolor: "white" }}
            fullWidth
            label="Correo Electrónico" 
            variant="outlined"
            margin="normal"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField sx={{ bgcolor: "white" }}
            fullWidth
            label="Nombre de Usuario"
            variant="outlined"
            margin="normal"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <TextField sx={{ bgcolor: "white" }}
            fullWidth
            label="Contraseña"
            variant="outlined"
            margin="normal"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Registrarse
          </Button>
        </form>
      </Container>
    </Box>
  );
}
