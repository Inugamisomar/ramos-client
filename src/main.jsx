import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.css'
import "leaflet/dist/leaflet.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import App from './App.jsx'

// 🎮 GAMING THEME
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00f5d4", // neon cyan
    },
    secondary: {
      main: "#0b3d3d",
    },
    background: {
      default: "#061a1a",
      paper: "#0b2e2e",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
)