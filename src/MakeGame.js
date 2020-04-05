import React, { useState } from "react";
import {} from "./utils";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import blue from "@material-ui/core/colors/blue";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    border: "1px solid black",
    borderRadius: 12,
    width: "40%",
    alignItems: "center",
  },
  field: {
    width: 300,
    margin: 24,
  },
  button: {
    width: 300,
    margin: 24,
  },
}));

function MakeGame(props) {
  const classes = useStyles();
  const {} = props;

  const [name, setName] = useState("");
  const [bigBlind, setBigBlind] = useState("");
  const [smallBlind, setSmallBlind] = useState("");
  const [buyin, setBuyin] = useState("");
  const [password, setPassword] = useState("");

  function canCreate() {
    if (name && bigBlind && smallBlind && buyin) {
      return true;
    }
    return false;
  }
  return (
    <div className={classes.root}>
      <TextField
        className={classes.field}
        label="Name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <TextField
        className={classes.field}
        label="Small Blind"
        variant="outlined"
        onChange={(event) => setSmallBlind(event.target.value)}
        value={smallBlind}
        type="number"
      />
      <TextField
        className={classes.field}
        label="Big Blind"
        variant="outlined"
        onChange={(event) => setBigBlind(event.target.value)}
        value={bigBlind}
        type="number"
      />
      <TextField
        className={classes.field}
        label="Buyin"
        variant="outlined"
        onChange={(event) => setBuyin(event.target.value)}
        value={buyin}
        type="number"
      />
      <TextField
        className={classes.field}
        label="Password"
        variant="outlined"
        onChange={(event) => setPassword(event.target.value)}
        value={buyin}
      />
      <Link to="/game">
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          size="large"
          disabled={!canCreate()}
        >
          Create Game
        </Button>
      </Link>
    </div>
  );
}

export default MakeGame;
