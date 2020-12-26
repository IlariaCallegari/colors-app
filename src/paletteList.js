import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/PaletteListStyles";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteDialogOpen: false,
      deletingId: ""
    };
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  openDialog(id) {
    this.setState({ deleteDialogOpen: true, deletingId: id });
  }
  closeDialog() {
    this.setState({ deleteDialogOpen: false });
  }
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  handleDelete(){
    this.props.deletePalette(this.state.deletingId);
    this.closeDialog();
  }
  render() {
    const { deleteDialogOpen} = this.state;
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}>React Colors</h1>
            <Link to="/palette/new">Create New Palette</Link>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {palettes.map((palette) => {
              return (
                <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                  <MiniPalette
                    {...palette}
                    handleClick={() => this.goToPalette(palette.id)}
                    // deletePalette={deletePalette}
                    key={palette.id}
                    openDialog={this.openDialog}
                  />
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        </div>
        <Dialog
          open={deleteDialogOpen}
          aria-labelledby="delete-dialog-title"
          onClose={this.closeDialog}
        >
          <DialogTitle id="delete-dialog-title">
            Delete this Palette?
          </DialogTitle>
          <List>
            <ListItem button onClick={this.handleDelete}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete" />
            </ListItem>
            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar >
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <ClearIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Cancel" />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
