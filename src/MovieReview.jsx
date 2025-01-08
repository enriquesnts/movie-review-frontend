import { useState } from "react";
import {
  TextField,
  Typography,
  Box,
  Rating,
  Container,
  Button,
} from "@mui/material";
import { useLocation } from "react-router";
import { crearReview, getPelicula } from "./clientApi/cliente";
import { getUsuarioDatos } from "./userDatos";
import { useNavigate } from "react-router";

export function MovieReview() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const { state = null } = useLocation();

  if (!state || !state.pelicula) {
    navigate("/");
  }
  const [pelicula, setPelicula] = useState(state.pelicula);

  return (
    <Container
      maxWidth="lg"
      sx={{ padding: 4, backgroundColor: "#8793A1", margin: 10 }}
    >
      <Box display="flex" alignItems="center">
        <img
          src={pelicula.movie_poster_url}
          alt={`${pelicula.title} poster`}
          style={{ paddingLeft: "16px", paddindTop: "16px" }}
        />
        <Box ml={2}>
          <Typography color="white" variant="body1">
            {pelicula.title}
          </Typography>
          <Typography color="white" variant="body1">
            {pelicula.year}
          </Typography>
          <Box>
            <Typography color="white" component="legend">
              Rating
            </Typography>
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(_event, newValue) => {
                setRating(newValue);
              }}
            />
          </Box>
          <Box>
            <TextField
              sx={{
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiOutlinedInput-root": {
                  "& input": { color: "white" },
                  "& textarea": { color: "white" },
                },
              }}
              label="Review"
              multiline
              rows={4}
              value={review}
              onChange={(e) => setReview(e.target.value)}
              variant="outlined"
              fullWidth
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
              onClick={async () => {
                setRating(0);
                setReview("");
                const { usuarioId } = getUsuarioDatos();
                await crearReview(pelicula.movieId, {
                  rating,
                  review,
                  user_id: usuarioId,
                });
                const peliculaActualizada = await getPelicula(pelicula.movieId);
                setPelicula(peliculaActualizada);
                setSuccessMessage("Review guardada con éxito");
              }}
            >
              Guardar
            </Button>
            {successMessage && (
              <Typography color="white" variant="body2">
                {successMessage}
              </Typography>
            )}
          </Box>
        </Box>
        <Box ml={4} flex={1}>
          <Typography color="white" variant="h6">
            Reviews
          </Typography>
          <Box
            sx={{
              maxHeight: "400px",
              overflowY: "auto",
              backgroundColor: "#6C7A89",
              padding: 2,
              borderRadius: 2,
            }}
          >
            {pelicula.reviews && pelicula.reviews.length > 0 ? (
              pelicula.reviews.map((review, index) => (
                <Box
                  key={index}
                  mb={2}
                  p={2}
                  sx={{ backgroundColor: "#8793A1", borderRadius: 1 }}
                >
                  <Typography color="white" variant="body2">
                    De: {review.nombreUsuario}
                  </Typography>
                  <Rating value={review.rating} readOnly size="small" />
                  <Typography color="white" variant="body2">
                    {review.review}
                  </Typography>
                </Box>
              ))
            ) : (
              <Typography color="white" variant="body2">
                No hay reviews
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
