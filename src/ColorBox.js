import React, { Component } from "react";
import "./ColorBox.css";

class ColorBox extends Component {
  render() {
    const { background, name } = this.props;
    
    return (
      <div
        className="ColorBox"
        style={{ backgroundColor: background}}
      >
        <span>{name}</span>
        <span>MORE</span>
      </div>
    );
  }
}

export default ColorBox;
