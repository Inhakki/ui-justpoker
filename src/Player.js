import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {} from "./utils";
import classnames from "classnames";
import Hand from "./Hand";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "10vw",
    height: "12vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  name: {
    width: "80%",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    textAlign: "center",
    fontSize: "16px",
    padding: 6,
  },
  stack: {
    marginTop: -12,
    padding: 6,
    width: "100%",
    textAlign: "center",
    fontSize: "22px",
    borderRadius: 40,
    backgroundColor: "white",
    boxShadow: "0 5px 10px rgba(59, 43, 91, 0.7)",
  },

  beacon: {
    "&:before": {
      zIndex: -1,
      position: "absolute",
      content: '""',
      width: "100%",
      height: "100%",
      border: "12px solid rgb(0, 255, 0)",
      borderRadius: "50%",
      boxShadow: "0px 0px 2px 2px rgb(0, 255, 0)",
      "-webkit-animation": "$beacon 1.8s infinite linear",
      animation: "$beacon 1.8s infinite linear",
    },
    "&:hover": {
      "-webkit-transform": "scale(1.3)",
    },
  },
  "@keyframes beacon": {
    "0%": {
      transform: "scale(.1)",
      opacity: 1,
    },
    "70%": {
      transform: "scale(2)",
      opacity: 0,
    },
    "100%": {
      opacity: 0,
    },
  },
}));

function Default(props) {
  const classes = useStyles();
  const { className, style } = props;
  const { stack, hand, name, toAct } = props.player;

  return (
    <div
      className={classnames(classes.root, className, {
        [classes.beacon]: toAct,
      })}
      style={style}
    >
      <Hand hand={hand} />
      <div className={classes.stack}>{stack}</div>
      <div className={classes.name}>{name}</div>
    </div>
  );
}

export default Default;
