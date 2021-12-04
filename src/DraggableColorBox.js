import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { SortableElement } from "react-sortable-hoc";
import DeleteForeverRounded from '@material-ui/icons/DeleteForeverRounded';
import styles from "./styles/DraggableColorBoxStyles";

const DraggableColorBox = SortableElement(props => {
  const { classes, color, name, handleClick } = props;
  return (
    <div 
      className={classes.root} 
      style={{ backgroundColor: color }}
    >
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteForeverRounded 
          className={classes.deleteIcon}
          onClick={handleClick}
        />
      </div>
    </div>
  )
})

export default withStyles(styles)(DraggableColorBox)