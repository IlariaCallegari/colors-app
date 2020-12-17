import React from "react";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import {SortableElement} from 'react-sortable-hoc';

const styles = {
  root: {
    height: "25%",
    width: "20%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    textTransform: "uppercase",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.3)",
    },
  },
  
  boxContent: {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    color: "rgba(0,0,0,0.5)",
    alignItems: "center",
    padding: "10px",
    width: "100%",
    left: "0",
    bottom: "0",
    letterSpacing: "1px",
    fontSize: "12px",
  },
  deleteIcon: {
    transition: "all 1s",
  }
};

const DraggableColorBox = SortableElement((props) => {
  const { classes, name, color, handleClick} = props;
  return (
    <div style={{ backgroundColor: color }} className={classes.root}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={() => handleClick(name)}/>
      </div>
    </div>
  );
})

export default withStyles(styles)(DraggableColorBox);
