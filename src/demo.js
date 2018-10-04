import React from "react";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'

class DeleteDocument extends React.Component {
  state = { open1: false, open2: false };

  handleClick1Open = () => {
    this.setState({ open1: true, open2:false });
  };

  handleClick2Open = () => {
    this.setState({ open2: true, open1: false });
  };

  // handleClickOpen = () => {
  //   this.setState({ open: true });
  // };

  handleClose = () => {
    this.setState({ open1: false, open2: false });
  };

  render() {
    return (
      <div>
      <Card>
      <CardContent>
        <Tooltip title="Delete Document">
          <IconButton onClick={this.handleClick1Open}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Dialog
          disableRestoreFocus={true}
          open={this.state.open1}
          onClose={this.handleClose}
        >
          <DialogTitle>Delete Document</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This will delete the currently active PDF/Component Design. Are
              you sure you want to do this?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
        </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Tooltip title="Delete Document">
              <IconButton onClick={this.handleClick2Open}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Dialog
              disableRestoreFocus={true}
              open={this.state.open2}
              onClose={this.handleClose}
            >
              <DialogTitle>Delete Document</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  This will delete the currently active PDF/Component Design. 
            </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Cancel
            </Button>
                <Button onClick={this.handleClose} color="primary" autoFocus>
                  Delete
            </Button>
              </DialogActions>
            </Dialog>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default DeleteDocument;
