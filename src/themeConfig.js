import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    mode: 'light', // Modo claro
    primary: {
      main: "#e91e63", // Color del botón principal
      contrastText: "#fff", // Color del texto sobre el botón
    },
    secondary: {
      main: "#FFAD60", // Color secundario si lo necesitas
    },
    text: {
      primary: "#333", // Color del texto principal
    },
  },
});
export const dark = createTheme({
  palette: {
    mode: 'dark', // Modo oscuro
    primary: {
      main: "#A02334", // Versión oscura del color principal
      contrastText: "#fff", // Color del texto sobre el botón
    },
    secondary: {
      main: "#FFAD60", // Color secundario si lo necesitas
    },
    text: {
      primary: "#86AB89", // Texto en modo oscuro
    },
  },
});