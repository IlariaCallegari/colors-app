import React, { Component } from "react";
import ColorBox from "./ColorBox.js";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
  }
  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    const allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    //return everything from index 1 onwards as the first shade is white
    return shades.slice(1);
  }
  render() {
    const colorBoxes = this._shades.map((shade) => {
      return (
        <ColorBox
          key={shade.id}
          name={shade.name}
          background={shade.hex}
          showLink={false}
        />
      );
    });
    return (
      <div className="Palette">
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default SingleColorPalette;
