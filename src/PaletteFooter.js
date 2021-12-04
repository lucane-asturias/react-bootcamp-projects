import React from "react";
import { withStyles } from "@material-ui/styles";
import { Emoji } from 'emoji-mart';
import styles from "./styles/PaletteFooterStyles";


function PaletteFooter(props) {
  const { paletteName, emoji, classes } = props;
  return (
        <footer className={classes.root}>
          {paletteName}
          <Emoji emoji={emoji} set="google" size={20} />
        </footer>
    );
  }

export default withStyles(styles)(PaletteFooter);
