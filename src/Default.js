import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {} from "./utils";
import classnames from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function Default(props) {
  const classes = useStyles();
  const {} = props;

  return <div className={classes.root}></div>;
}

export default Default;