import React from "react";
import classnames from "classnames";
import Hand from "./Hand";

import { makeStyles } from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

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

  act: {
    backgroundColor: yellow[300],
  },
  beacon: {
    "&:before": {
      zIndex: -1,
      position: "absolute",
      content: '""',
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      boxShadow: "0px 0px 16px 16px rgb(255, 255, 0)",
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
  const { stack, hand, name, toAct, hero } = props.player;

  return (
    <div
      className={classnames(classes.root, className, {
        [classes.beacon]: toAct,
      })}
      style={style}
    >
      <Hand hand={hand} hidden={!hero} />
      <div
        className={classnames(classes.stack, {
          [classes.act]: toAct,
        })}
      >
        <Typography variant="subtitle">{stack}</Typography>
      </div>
      <div className={classes.name}>{name}</div>
    </div>
  );
}

export default Default;
