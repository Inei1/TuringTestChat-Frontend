import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    contrastThreshold: 4.5,
    primary: {
      main: "#1F51FF",
    },
    secondary: {
      main: "#1D1D1D",
    },
    info: {
      main: "#e9e9e9",
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        target: "_blank",
        rel: "noreferrer",
        color: "#E9E9E9",
        fontFamily: "Montserrat",
        fontSize: 18
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.MuiTab-root": {
            color: "#e9e9e9"
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Open Sans"
        }
      }
    }
  },
  typography: {
    fontFamily: "Montserrat, Roboto Serif",
    allVariants: {
      color: "#e9e9e9",
    },
    fontSize: 16,
  },
  transitions: {
    easing: {
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    }
  }
});