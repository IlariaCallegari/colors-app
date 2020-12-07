import { Palette } from "@material-ui/icons";
import React, { Component } from "react";
import {Link} from "react-router-dom";
import ColorBox from "./ColorBox.js";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = {
      format: "hex",
    };
    this.changeFormat = this.changeFormat.bind(this);
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
  changeFormat(value) {
    this.setState({ format: value });
  }
  render() {
    const { format } = this.state;
    const { paletteName, emoji, id } = this.props.palette;
    const colorBoxes = this._shades.map((shade) => {
      return (
        <ColorBox
          key={shade.name}
          name={shade.name}
          background={shade[format]}
          showLink={false}
        />
      );
    });
    return (
      <div className="SingleColorPalette Palette">
        <Navbar handleChange={this.changeFormat} showingAllColors={false} />
        <div className="Palette-colors">
          {colorBoxes}
          <div className="ColorBox go-back">
            <Link to={`/palette/${id}`} className="back-button">Go Back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
