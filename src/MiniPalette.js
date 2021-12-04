import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Emoji } from 'emoji-mart';
import styles from "./styles/MiniPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete";

class MiniPalette extends Component {
    constructor(props) {
        super(props);
        this.deletePalette = this.deletePalette.bind(this);
    }
    deletePalette(e) {
        e.stopPropagation();
        this.props.handleDelete(this.props.id)
    }
    render() {
        const { classes, paletteName, emoji, colors, handleClick } = this.props;
        // console.log(classes) -> "main": "MiniPalette-main-1pd0h4k"
        const miniColorBoxes = colors.map(color => (
            <div
                className={classes.miniColor}
                style={{ backgroundColor: color.color }}
                key={color.name}
            />
        ));
        return (
            <div className={classes.root} onClick={handleClick}>
                <DeleteIcon 
                    className={classes.deleteIcon} 
                    style={{ transition: "all 0.3s ease-in-out"}} //override built-in styles from mu
                    onClick={this.deletePalette}
                />
            <div className={classes.colors}>{miniColorBoxes}</div>
                <h5 className={classes.title}>
                    {paletteName} <Emoji emoji={emoji} set="google" size={18} />
                </h5>
            </div>
        );
    } 
}

export default withStyles(styles)(MiniPalette);