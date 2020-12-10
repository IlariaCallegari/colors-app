import { getThemeProps } from "@material-ui/styles";
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
    const {classes} = props;
    return (
        <div style={{backgroundColor: props.color}} className={classes.root}>
            {props.color}
        </div>
    )
}

export default withStyles(styles)(DraggableColorBox);