import React, { Component } from "react";
import NoteList from "./NoteList";

class Sidebar extends Component {
  render() {
    return (
      <div className="master-detail-element sidebar">
        <NoteList
          allNotes={this.props.allNotes}
          editableNotes={this.props.editableNotes}
          handleClickNoteItem={this.props.handleClickNoteItem}
        />
        <button onClick={this.props.handleNew}>New</button>
      </div>
    );
  }
}

export default Sidebar;
