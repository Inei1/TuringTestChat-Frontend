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
        fontFamily: "monospace",
        fontSize: 18
      }
    }
  },
  typography: {
    fontFamily: "monospace",
    allVariants: {
      color: "#e9e9e9",
      marginTop: "1em",
      lineHeight: 1.6
    },
    fontSize: 16,
  },
});