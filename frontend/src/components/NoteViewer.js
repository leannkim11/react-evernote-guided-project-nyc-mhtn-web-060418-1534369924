import React, { Fragment } from "react";

const NoteViewer = props => {
  return (
    <Fragment>
      <h2>{props.clickednote.title}</h2>
      <p>{props.clickednote.body}</p>
      <button onClick={props.editClicked}>Edit</button>
    </Fragment>
  );
};

export default NoteViewer;
