import React from "react";
import Player from "./Player";
import Card from "./Card";

import { makeStyles } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    background:
      "radial-gradient(circle, rgba(194,231,237,1) 0%, rgba(141,178,238,1) 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  table: {
    transform: "translateY(-20%)",
    height: "50%",
    width: "70%",
    borderRadius: "50%",
    border: `8px solid ${green[200]}`,
    backgroundColor: green[400],
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.4)",
  },
  player: {
    position: "absolute",
  },
  communityCards: {
    height: "25%",
    width: "65%",
    display: "flex",
    justifyContent: "flex-start",
  },
  pot: {
    fontSize: 42,
    position: "absolute",
    transform: "translateY(-12vh)",
    backgroundColor: "rgba(0,0,0,0.4)",
    color: "white",
    borderRadius: 40,
    padding: "12px 36px",
  },
  button: {
    position: "absolute",
    zIndex: 10,
    color: "gold",
    fontSize: 60,
  },
}));

function Table(props) {
  const classes = useStyles();
  const { players, communityCards, spots, pot } = props.table;

  return (
    <div className={classes.root}>
      <div className={classes.table}>
        <div className={classes.pot}>
          <Typography variant="h4">{`POT: ${pot}`}</Typography>
        </div>
        <div className={classes.communityCards}>
          {communityCards.map((c) => (
            <Card
              suit={c.suit}
              number={c.number}
              fontSize={44}
              style={{
                width: "18%",
                margin: 6,
              }}
            />
          ))}
        </div>
        {players.map((p, index) => {
          return (
            <Player
              player={p}
              className={classes.player}
              style={{
                transform: `translate(calc(${Math.cos(
                  (2 * 3.14 * p.position) / spots
                )} * 40vw),calc(${Math.sin(
                  (2 * 3.14 * p.position) / spots
                )} * 30vh)`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Table;
