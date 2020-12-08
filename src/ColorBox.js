import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import chroma from "chroma-js";
import "./ColorBox.css";

// writing dynamic styles with MaterialUI
const styles = {
  ColorBox: {
    height: (props) => props.showingFullPalette ? "25%" : "50%",
    width: "20%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    textTransform: "uppercase",
    marginBottom: "-4px",
    "&:hover button": {
      opacity: 1,
    }
  },
  copyText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.65 ? "black" : "white",
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.08 ? "white" : "black",
  },
  seeMore: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.65
        ? "rgba(0,0,0,0.5)"
        : "white",
    position: "absolute",
    bottom: "0",
    right: "0",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
  },
  copyButton: {
    color: props => chroma(props.background).luminance() >=0.65 ? "black" : "white",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textTransform: "uppercase",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    border: "none",
    transition: "opacity 0.5s",
    textDecoration: "none",
    opacity: "0"
  },
};

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(
        () =>
          this.setState({
            copied: false,
          }),
        1500
      );
    });
  }
  render() {
    const { background, name, id, paletteId, showingFullPalette, classes } = this.props;
    const { copied } = this.state;
    const isDarkColor = chroma(background).luminance() <= 0.08;
    const isLightColor = chroma(background).luminance() >= 0.65;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className={classes.ColorBox} style={{ background }}>
          <div
            className={`copy-overlay ${copied && "show"}`}
            style={{ background }}
          ></div>
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>
              Copy
            </button>
          </div>
          {showingFullPalette && (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
