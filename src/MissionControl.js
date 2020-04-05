import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {} from "./utils";
import classnames from "classnames";

import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";

import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "20%",
    backgroundColor: "rgba(0,0,0,0.24)",
    position: "absolute",
    bottom: 0,
    zIndex: 2,
  },
  betCont: {
    margin: "auto",
    width: "40%",
    height: "100%",
  },
  actions: {
    paddingTop: 12,
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
  },
  sliderCont: {
    width: "100%",
  },
  amounts: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
  },
  slider: {
    marginTop: 48,
    width: "100%",
  },
  button: {
    width: "30%",
    height: "20%",
    margin: 6,
    backgroundColor: "white",
  },
}));

function MissionControl(props) {
  const classes = useStyles();
  const { heroStack, pot } = props.missionControl;

  const [betAmt, setBetAmt] = useState(0);

  const changeBetAmonut = (newAmt) => {
    setBetAmt(Math.min(Math.floor(newAmt), heroStack));
  };

  function onBet() {}
  function onFold() {}
  function onCheckCall() {}

  return (
    <div className={classes.root}>
      <div className={classes.betCont}>
        <div className={classes.actions}>
          <Button
            variant="contained"
            className={classes.button}
            style={{ color: red[800] }}
            onClick={() => onFold()}
          >
            Fold
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            style={{ color: blue[800] }}
            onClick={() => onCheckCall()}
          >
            Check
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            style={{ color: green[800] }}
            onClick={() => onBet()}
          >
            Bet
          </Button>
        </div>
        <div className={classes.sliderCont}>
          <Slider
            className={classes.slider}
            value={betAmt}
            step={1}
            valueLabelDisplay="on"
            min={0}
            max={heroStack}
            onChange={(e, v) => setBetAmt(v)}
          />
        </div>
        <div className={classes.amounts}>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={(e) => changeBetAmonut(pot * 0.5)}
          >
            1/2
          </Button>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={(e) => changeBetAmonut(pot * 0.75)}
          >
            3/4
          </Button>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={(e) => changeBetAmonut(pot * 1)}
          >
            Pot
          </Button>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={(e) => changeBetAmonut(pot * (Math.random() + 1))}
          >
            Overbet
          </Button>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={(e) => changeBetAmonut(heroStack)}
          >
            Shuv
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MissionControl;
