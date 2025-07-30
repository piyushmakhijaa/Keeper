import React, { useState, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [textNote, setTextNote] = useState("");
  const [title, setTitle] = useState("");
  const [isExpanded,setIsExpanded] = useState(false);

  function handleCreate(event) {
    let textcontent = event.target;
    if (textcontent.name === "content") setTextNote(textcontent.value);
    if (textcontent.name === "title") setTitle(textcontent.value);
    //console.log(textcontent.value);
  }

  function submitNote(e) {
    props.getNote(title, textNote);
    setTextNote("");
    setTitle("");
    e.preventDefault();
  }
  function handleExpansion()
  {
    setIsExpanded(true);
  }
  return (
    <div>
        
<Zoom in={true}>
      <form>
      {isExpanded && (<input
          name="title"
          placeholder="Title"
          onChange={handleCreate}
          value={title}
        />)}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded? 3 : 1 }
          value={textNote}
          onChange={handleCreate}
          onClick={handleExpansion}
        />
        
       {isExpanded && <Zoom in={true}><Fab className="fab" onClick={submitNote}><AddIcon/></Fab></Zoom>}
      </form>
        </Zoom>
    </div>
  );
}

export default CreateArea;
