import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm , TextValidator } from 'react-material-ui-form-validator';
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";


class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
            // open: true,
            stage: "form",
            newPaletteName: ""
        }
    this.handleChange = this.handleChange.bind(this);
    this.showEmojiPicker = this.showEmojiPicker.bind(this);
    this.savePalette = this.savePalette.bind(this);
    };

  componentDidMount() {
        ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
            this.props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
        );
    }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  };

  showEmojiPicker(evt) {
    this.setState({ stage: "emoji" })
  }

  savePalette(emoji) {
    const newPalette = {
      paletteName: this.state.newPaletteName,
      emoji: emoji.native
    };
    this.props.handleSubmit(newPalette);
  } 

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { newPaletteName } = this.state;
    const { handleSubmit, hideForm } = this.props;
    return (
      <div>
        <Dialog open={this.state.stage === 'emoji'} onClose={hideForm} >
          <DialogTitle id="form-dialog-title">Choose A Palette Name</DialogTitle>
          <Picker title="Pick a Palette Emoji" onSelect={this.savePalette} />
        </Dialog>
        <Dialog
          open={this.state.stage === 'form'}
          onClose={hideForm} //hideForm when user click away
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Choose A Palette Name</DialogTitle>
          {/*<ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>*/}
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Please enter a name for your beautiful palette. Make sure it's unique!
              </DialogContentText>
              <TextValidator 
                label="Palette Name" 
                value={newPaletteName}
                name="newPaletteName"
                fullWidth
                margin="normal"
                onChange={this.handleChange}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={["Enter Palette Name", "Name already used!"]}
              /> 
            </DialogContent>
              <DialogActions>
                <Button onClick={hideForm} color="primary">
                  Cancel
                </Button>
                <Button variant='contained' color='primary' type="submit">
                  SAVE PALETTE
                </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMetaForm;