import React from "react";
import { Theme } from "./Theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Game from "./Game";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(props) {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          <Route path="/game" component={Game} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
