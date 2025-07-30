import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App() {
  const [notes, setNotes] = useState([]);

  function getNote(title, textNote) {
    setNotes((prevValue) => {
      return [...prevValue, { id: Date.now(), tit: title, not: textNote }];
    });
  }

  function deleteNote(getId) {
    setNotes((prevNotes) => {
      return prevNotes.filter((item) => item.id !== Number(getId));
    });
  }
  useEffect(() => {
    console.log(notes);
  }, [notes]);

  function createNote(n) {
    return (
      <Note
        key={n.id}
        title={n.tit}
        content={n.not}
        id={n.id}
        deleteNote={deleteNote}
      />
    );
  }

  return (
    <div className="main-content"> 
      <Header />
      <CreateArea getNote={getNote} />
       <div className="note-container">
      {notes.map(createNote)}
    </div>
      <Footer />
    </div>
  );
}

export default App;
