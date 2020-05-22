import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleOnChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setNote(preValue => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleOnChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleOnChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
