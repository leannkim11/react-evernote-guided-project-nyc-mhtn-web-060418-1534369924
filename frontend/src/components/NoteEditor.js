import React, { Component } from "react";

class NoteEditor extends Component {
  state = {
    title: this.props.clickedNote.title,
    body: this.props.clickedNote.body,
    id: this.props.clickedNote.id
  };

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <form className="note-editor">
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={event => this.handleOnChange(event)}
        />
        <textarea
          name="body"
          value={this.state.body}
          onChange={event => this.handleOnChange(event)}
        />
        <div className="button-row">
          <input
            className="button"
            type="submit"
            value="Save"
            onClick={event => {
              this.props.handlePatch(event, this.state);
            }}
          />
          <button type="button" onClick={this.props.handleCancelButton}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
