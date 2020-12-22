import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import PaletteMetaForm from "./PaletteMetaForm";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const drawerWidth = 400;
const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  navBtns: {
    marginRight: "1rem",
  },
  button: {
    margin: "0 0.5rem",
  },
  link: {
    textDecoration: "none",
  },
});

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formShowing: false,
    };
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }
  showForm() {
    this.setState({ formShowing: true });
  }
  hideForm() {
    this.setState({ formShowing: false });
  }
  render() {
    const {
      classes,
      open,
      handleDrawerOpen,
      handleSubmit,
      palettes,
    } = this.props;
    const { formShowing } = this.state;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Create a Palette
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
            <Link to="/" className={classes.link}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Go back
              </Button>
            </Link>
            <Button
              variant="contained"
              color="primary"
              onClick={this.showForm}
              className={classes.button}
            >
              Save
            </Button>
          </div>
        </AppBar>
        {formShowing && (
          <PaletteMetaForm
            handleSubmit={handleSubmit}
            palettes={palettes}
            hideForm={this.hideForm}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);