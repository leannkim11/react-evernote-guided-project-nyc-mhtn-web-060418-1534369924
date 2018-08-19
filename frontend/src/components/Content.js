import React, { Component } from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/

class Content extends Component {
  state = {
    editClicked: false,
    title: this.props.clickedNote.title,
    body: this.props.clickedNote.body
  };

  editClicked = () => {
    this.setState({
      editClicked: true
    });
  };

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleCancelButton = () => {
    this.setState({
      editClicked: false
    });
  };

  renderContent = () => {
    if (this.props.isClicked && this.state.editClicked) {
      return (
        <NoteEditor
          editClicked={this.state.editClicked}
          handleCancelButton={this.handleCancelButton}
          clickedNote={this.props.clickedNote}
          handlePatch={this.props.handlePatch}
        />
      );
    }
    if (this.props.isClicked === true) {
      return (
        <NoteViewer
          clickednote={this.props.clickedNote}
          editClicked={this.editClicked}
        />
      );
    } else {
      return <Instructions />;
    }
  };

  render() {
    return (
      <div className="master-detail-element detail">{this.renderContent()}</div>
    );
  }
}

export default Content;
