import React, { useState } from 'react';

function AddNote({
  title, setTitle, notes, setNotes,
}) {
  // initialize a counter variable state for unique id keys
  const [id, setId] = useState(0);

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  // define a function to add the note to the notes
  function addNoteItem() {
    const newNote = {
      title,
      img: '',
      text: '',
      x: 0,
      y: 0,
      z: 1,
    };

    setId(id + 1);

    const newNotes = { ...notes };
    newNotes[id] = newNote;
    setNotes(newNotes);
  }

  return (
    <div className="add-note-bar">
      <input placeholder="Enter note title here..." value={title} onChange={onTitleChange} />
      <button type="submit" onClick={addNoteItem}>Add</button>
    </div>
  );
}

export default AddNote;
