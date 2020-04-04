import { createMuiTheme } from "@material-ui/core/styles";

import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

const colors = {};

colors.HEARTS = blue[800];
colors.DIAMONDS = red[800];
colors.SPADES = "black";
colors.CLUBS = green[800];

colors.BACKGROUND = "grey";

const NormalTheme = {
  colors: colors,
};

export const Theme = createMuiTheme(NormalTheme);
