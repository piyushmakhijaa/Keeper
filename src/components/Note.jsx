import React, { useState, useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
function Note(props) {
  function handleDelete(e) {
    const temp = e.target.closest(".note");
    const getId = temp.getAttribute("id");
    props.deleteNote(getId);
  }

  return (
    <div className="note" id={props.id}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}><DeleteOutlineIcon/></button>
    </div>
  );
}

export default Note;
