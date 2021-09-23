import React from "react";
import { Router } from "react-router-dom";

//Material ui components
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

import Routes from "./routes";
import history from "./services/history";

import GlobalStyle from "./styles/global";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0062ff",
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <Routes />
      <GlobalStyle />
    </Router>
  </ThemeProvider>
);

export default App;
