import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import AutoComplete from 'material-ui/Autocomplete';

/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */
export default class DialogExampleDialogDatePicker extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Dialog With Date Picker and AutoComplete" onTouchTap={this.handleOpen} />
        <Dialog
          title="Dialog With Date Picker and AutoComplete"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Open a Date Picker dialog from within a dialog.
          <DatePicker hintText="Date Picker" />
          <AutoComplete
            animated={false}
            floatingLabelText="AutoComplete animated: false"
            hintText={"Search for 'test', please"}
            dataSource={[{value: 1, text: "Test 1"}, {value: 2, text: "Test 2"}, {value: 3, text: "Test 3"}, {value: 4, text: "Test 4"}, {value: 5, text: "Test 5"}]}
            filter={AutoComplete.caseInsensitiveFilter}
          />
          <AutoComplete
            animated={true}
            floatingLabelText="AutoComplete animated: true"
            hintText={"Search for 'test', please"}
            dataSource={[{value: 1, text: "Test 1"}, {value: 2, text: "Test 2"}, {value: 3, text: "Test 3"}, {value: 4, text: "Test 4"}, {value: 5, text: "Test 5"}]}
            filter={AutoComplete.caseInsensitiveFilter}
          />
        </Dialog>
      </div>
    );
  }
}
