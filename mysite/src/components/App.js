import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Favicon from "react-favicon";
import Normalize from "react-normalize";

import favicon from "../images/favicon.png";
import NavBar from "./navBar/NavBar";
import PersonalSection from "./personalSection/PersonalSection";
import Description from "./description/Description";

// use default theme
// const theme = createMuiTheme();

// create own theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#d78f88",
    },
    secondary: {
      main: "#e7bbb7",
    },
    background: {
      default: "#f7e8e7",
    },
  },
  typography: {
    fontFamily: "'Hind', sans-serif",
  },
});

function App() {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Favicon url={favicon} />
        <Normalize />

        <NavBar />
        <PersonalSection />
        <Description />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
