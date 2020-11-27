import React, { Component } from "react";

class Palette extends Component {
  render() {
    return (
      <div className="Palette">
        {/* Navbar goes here */}
        <div className="Palette-colors">
          {this.props.colors.map((color) => (
            <div
              className="Palette-box"
              style={{
                background: color.color,
                width: "500px",
                height: "500px",
              }}
            ></div>
          ))}
        </div>
        {/* Footer goes here*/}
      </div>
    );
  }
}

export default Palette;
