import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newColorName: "",
      currentColor: "teal",
    };
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", (value) =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }

  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName,
      id: this.state.currentColor,
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: "" });
  }

  render() {
    const { newColorName, currentColor } = this.state;
    const { paletteIsFull } = this.props;
    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.updateCurrentColor}
        />
        <ValidatorForm
          onSubmit={this.handleSubmit}
          instantValidate={false}
          useref="form"
        >
          <TextValidator
            name="newColorName"
            value={newColorName}
            onChange={this.handleChange}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Enter a color name",
              "Color name must be unique",
              "Color already in use!",
            ]}
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            disabled={paletteIsFull}
            style={{
              backgroundColor: paletteIsFull ? "#e0e0e0" : currentColor,
            }}
          >
            {paletteIsFull ? "Palette is Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default ColorPickerForm;
