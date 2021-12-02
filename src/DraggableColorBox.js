import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DeleteForeverRounded from '@material-ui/icons/DeleteForeverRounded';

const styles = {
  root: {
    height: "100px",
    width: "100px",
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    // "&:hover svg": { //when you hover the svg of deleteIcon (this is bad!! bc is considering all svg's)
    "&:hover $deleteIcon": { //easiest way to style while hovering is selecting the class with $ sign
      color: "white",
      transform: "scale(1.5)"
    }
  },
  boxContent: {
    "position": "absolute",
    "padding": "10px",
    "width":"100%",
    "left": "0px",
    "bottom": "0px",
    "color": "rgba(0, 0, 0, 0.5)",
    "letterSpacing": "1px",
    "textTransform": "uppercase",
    "fontSize": "12px",
    "display": "flex",
    "justifyContent": "space-between"
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out"
  }
}

function DraggableColorBox(props) {
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
}

export default withStyles(styles)(DraggableColorBox)