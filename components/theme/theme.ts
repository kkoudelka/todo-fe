import { createTheme } from "@material-ui/core/styles";
import darkScrollbar from "@material-ui/core/darkScrollbar";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0067c4",
    },
    secondary: {
      main: "#9a53ff",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar(),
      },
    },
  },
});
