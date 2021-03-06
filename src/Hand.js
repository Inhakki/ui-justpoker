import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {} from "./utils";
import classnames from "classnames";
import Card from "./Card";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "50%",
    display: "flex",
    justifyContent: "space-evenly",
  },
}));

function Hand(props) {
  const classes = useStyles();
  const { hidden } = props;
  const { cards } = props.hand;

  return (
    <div className={classes.root}>
      {cards.map((c) => (
        <Card
          suit={c.suit}
          number={c.number}
          hidden={hidden}
          textPosition="top"
        />
      ))}
    </div>
  );
}

export default Hand;
