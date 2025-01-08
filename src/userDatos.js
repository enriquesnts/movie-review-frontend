export function getUsuarioDatos() {
  const defaultData = {
    nombre: null,
    token: null,
    correo: null,
    usuarioId: null,
  };
  try {
    const data = JSON.parse(sessionStorage.getItem("userData"));
    return data ?? defaultData;
  } catch (e) {
    return defaultData;
  }
}
