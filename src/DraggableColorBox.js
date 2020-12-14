import React from "react";
import {withStyles} from "@material-ui/core/styles";

const styles = {
    root: {
        height: "25%",
        width: "20%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        textTransform: "uppercase",
    }
}

function DraggableColorBox(props){
    const {classes, name, color} = props;
    return (
        <div style={{backgroundColor: color}} className={classes.root}>
            {name}
        </div>
    )
}

export default withStyles(styles)(DraggableColorBox);