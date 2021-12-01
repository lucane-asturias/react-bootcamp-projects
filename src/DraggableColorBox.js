import React from 'react';
import { withStyles } from '@material-ui/core/styles';

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
  }
}

function DraggableColorBox(props) {
  return (
    <div 
      className={props.classes.root} 
      style={{ backgroundColor: props.color }}
    >
    {props.name}
    </div>
  )
}

export default withStyles(styles)(DraggableColorBox)