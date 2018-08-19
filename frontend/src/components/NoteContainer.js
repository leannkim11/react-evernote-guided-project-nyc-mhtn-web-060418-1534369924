import React, { Component, Fragment } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

const apiUrl = "http://localhost:3000/api/v1/notes";

class NoteContainer extends Component {
  state = {
    allNotes: [],
    editableNotes: [],
    clickedNote: {},
    isClicked: false
  };

  componentDidMount() {
    this.handleRender();
  }

  handleRender = () => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data =>
        this.setState({
          allNotes: data,
          editableNotes: data
        })
      );
  };

  handleClickNoteItem = noteObj => {
    this.setState({
      clickedNote: noteObj,
      isClicked: true
    });
  };

  handlePatch = (event, noteobj) => {
    let config = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: noteobj.title,
        body: noteobj.body
      })
    };
    fetch(`http://localhost:3000/api/v1/notes/${noteobj.id}`, config)
      .then(res => res.json())
      .then(data => console.log(data));
  };

  handleNew = () => {
    let config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        title: "default",
        body: "placeholder",
        user_id: 1
      })
    };
    fetch("http://localhost:3000//api/v1/notes", config)
      .then(res => res.json())
      .then(() => this.handleRender());
  };

  render() {
    return (
      <Fragment>
        <Search />
        <div className="container">
          <Sidebar
            allNotes={this.state.allNotes}
            editableNotes={this.state.editableNotes}
            handleClickNoteItem={this.handleClickNoteItem}
            handleNew={this.handleNew}
          />
          <Content
            clickedNote={this.state.clickedNote}
            handlePatch={this.handlePatch}
            isClicked={this.state.isClicked}
            editedItem={this.state.editedItem}
            // clickedNoteId={this.state.clickedNote.id}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
