import React, { useState } from "react";
import { Container, TextField, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { login } from "./clientApi/cliente";

export default function Login() {
  const [formData, setFormData] = useState({
    correo: "",
    contrasena: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(formData);
    sessionStorage.setItem("userData", JSON.stringify(response));
    navigate("/");
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
      <Container
        maxWidth="sm"
        sx={{
          bgcolor: "rgba(0, 0, 0, 0.8)",
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography
          fontFamily="monospace"
          fontWeight={700}
          color="white"
          variant="h4"
          component="h1"
          sx={{ mb: 3, textAlign: "center" }}
        >
          ¡Inicia Sesión!
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ bgcolor: "white" }}
            fullWidth
            label="Correo Electrónico"
            variant="outlined"
            margin="normal"
            name="correo"
            type="email"
            value={formData.correo}
            onChange={handleChange}
            required
          />
          <TextField
            sx={{ bgcolor: "white" }}
            fullWidth
            label="Contraseña"
            variant="outlined"
            margin="normal"
            name="contrasena"
            type="password"
            value={formData.contrasena}
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
            Iniciar Sesión
          </Button>
        </form>
      </Container>
    </Box>
  );
}
