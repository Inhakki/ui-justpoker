import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {} from "./utils";
import classnames from "classnames";
import Player from "./Player";
import Card from "./Card";
import green from "@material-ui/core/colors/green";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
    position: "fixed",
    right: "50%",
    top: "50%",
    transform: "translateY(-50%) translateX(50%)",
    backgroundColor: "lightblue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  table: {
    height: "80%",
    width: "80%",
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
    height: "20%",
    width: "65%",
    display: "flex",
    justifyContent: "flex-start",
  },
  pot: {
    fontSize: 42,
    position: "absolute",
    transform: "translateY(-200%)",
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "white",
    borderRadius: 40,
    padding: "12px 36px",
  },
}));

function Table(props) {
  const classes = useStyles();
  const { players, communityCards, spots, pot } = props.table;

  return (
    <div className={classes.root}>
      <div className={classes.table}>
        <div className={classes.pot}>{`POT: ${pot}`}</div>
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
                )} * 40vh)`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Table;
