import React from "react";
import { Theme } from "./Theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Table from "./Table";
import { SUITS } from "./utils";
import Game from "./TestGame";
function App(props) {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <Table table={Game.table} />
      </div>
    </ThemeProvider>
  );
}

export default App;
