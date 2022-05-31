import { createTheme } from "@mui/material";

const theme = createTheme({
  spacing: 4,

  palette: {
    primary: {
      dark: "#FF6161;", 
      main: "#FF6161;", 
      light: "#4ABAAD;", 
    },
    secondary: {
      dark: "#4C2CD9", 
      main: "#4C2CD9;", 
      light:"#9986F0;", 
    },
    success: {
      main: "#6bea9a", 
      light: "#FFF",
    },
    error: {
      main: "#e2311d", 
    },
    warning: {
      main: "#ffc107", 
    },
    grey: {
      "100": "#373C38", 
      "300": "#e1ecfc", 
      "500": "#042330", 
      "700": "#19293b", 
      "900": "#000a17", 
      "200": "#656E66", 
      "400": "#E5F7E9", 
      "600": "#9bbdcb",
      "800": "#e8eaf4",
    },
  },
  typography: {
    h1: {
      fontFamily: "Roboto",
      fontSize: "50px",
      fontWeight: 700,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "48px",
      letterSpacing: "normal",
    },
    h2: {
      fontFamily: "Roboto",
      fontSize: "20px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "30px",
      letterSpacing: "normal",
    },
    subtitle1: {
      fontFamily: "Roboto",
      fontSize: "16px",
      fontWeight: 600,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "24px",
      letterSpacing: "normal",
      textAlign: "left",
    },
    subtitle2: {
      fontFamily: "Roboto",
      fontSize: "16px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "24px",
      letterSpacing: "0.1px",
      textAlign: "left",
    },
    body1: {
      fontFamily: "Roboto",
      fontSize: "14px",
      fontWeight: 600,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "22px",
      letterSpacing: "normal",
      textAlign: "left",
    },
    body2: {
      fontFamily: "Roboto",
      fontSize: "14px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "22px",
      letterSpacing: "0.1px",
      textAlign: "left",
    },

    caption: {
      fontFamily: "Roboto",
      fontSize: "12px",
      fontWeight: 400,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "18px",
      letterSpacing: "normal",
      textAlign: "left",
    },

    overline: {
      fontFamily: "Roboto",
      fontSize: "12px",
      fontWeight: 700,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "16px",
      letterSpacing: "normal",
      textAlign: "center",
    },
   
  },
});

export default theme;

