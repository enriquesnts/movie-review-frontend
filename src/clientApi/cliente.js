import { getUsuarioDatos } from "../userDatos";

const apiurl = "http://localhost:8080";
const endpointRegistro = "/registro";
const endpointLogin = "/login";
const endpointPeliculas = "/peliculas";
const endpointReviews = (peliculaId) => `/peliculas/${peliculaId}/review`;
const endpointGetPelicula = (peliculaId) => `/peliculas/${peliculaId}`;

async function fetchApi(endpoint, opciones) {
  const isLoginOrRegistro =
    endpoint === endpointRegistro || endpoint === endpointLogin;

  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  if (!isLoginOrRegistro) {
    const { token } = getUsuarioDatos();
    if (!token) {
      throw new Error("Sesion no iniciada");
    }
    headers.append("Authorization", `Bearer ${token}`);
  }
  const fetchOpciones = {
    method: opciones.method,
    mode: "cors",
    headers,
  };

  if (opciones.method !== "GET" && opciones.body) {
    fetchOpciones.body = JSON.stringify(opciones.body);
  }

  const response = await fetch(apiurl + endpoint, fetchOpciones);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Error en la petición");
  }
}

export function registro(formData) {
  return fetchApi(endpointRegistro, { method: "POST", body: formData });
}

export function login(formData) {
  return fetchApi(endpointLogin, { method: "POST", body: formData });
}

export function getPeliculas() {
  return fetchApi(endpointPeliculas, { method: "GET" });
}

export function getPelicula(peliculaId) {
  return fetchApi(endpointGetPelicula(peliculaId), { method: "GET" });
}

export function crearReview(peliculaId, data) {
  return fetchApi(endpointReviews(peliculaId), {
    method: "POST",
    body: data,
  });
}
