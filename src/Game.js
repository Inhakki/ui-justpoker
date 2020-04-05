import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "./Table";
import MissionControl from "./MissionControl";
import TestGame from "./TestGame";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
  },
}));

function Game(props) {
  const classes = useStyles();
  const { table, missionControl } = TestGame; //props.game;

  return (
    <div className={classes.root}>
      <Table table={table} />
      <MissionControl missionControl={missionControl} />
    </div>
  );
}

export default Game;
