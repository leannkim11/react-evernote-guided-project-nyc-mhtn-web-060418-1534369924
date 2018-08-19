import React from "react";
import NoteItem from "./NoteItem";

const NoteList = props => {
  const mapNotes = () => {
    const mappedArr = props.editableNotes.map(note => (
      <NoteItem
        key={note.id}
        note={note}
        handleClickNoteItem={props.handleClickNoteItem}
      />
    ));
    return mappedArr;
  };

  return <ul>{mapNotes()}</ul>;
};

export default NoteList;
