import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

// console.log(blue)

import Dashboard from "./layouts/Dashboard";

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const hist = createBrowserHistory();

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Router history={hist}>
      <Route path="/" component={Dashboard} />
    </Router>
  </MuiThemeProvider>
  ,
  document.getElementById("root")
);

registerServiceWorker();
