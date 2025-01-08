import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { getUsuarioDatos } from "../userDatos";

export default function NavBar() {
  const { nombre } = getUsuarioDatos();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="white">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Movie Review
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {nombre ? (
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Hola {nombre}
            </Typography>
          ) : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
