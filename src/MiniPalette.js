import React, {PureComponent} from "react";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./styles/MiniPaletteStyles";

class MiniPalette extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    e.stopPropagation();
    this.props.openDialog(this.props.id);
  }

  render(){
    const { classes, paletteName, emoji, colors, handleClick, id} = this.props;
    const miniColorBoxes = colors.map((color) => {
      return (
        <div
          className={classes.miniColor}
          style={{ backgroundColor: color.color }}
          key={color.name}
        ></div>
      );
    });
    return (
      <div className={classes.root} onClick={() =>handleClick(id)}>
        <DeleteIcon className={classes.deleteIcon} onClick={this.handleClick}/>
        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName}
          <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}
export default withStyles(styles)(MiniPalette);
