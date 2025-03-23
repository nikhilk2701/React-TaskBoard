import { Plus } from "lucide-react";
import Note from "../data/note";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
export default function CreateNote({ addNote }) {
  const [note, setNote] = useState(new Note(0, "", "", Date.now()));

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return new Note(
        prevNote.id,
        name === "title" ? value : prevNote.title,
        name === "description" ? value : prevNote.description,
        prevNote.createdAt
      );
    });
  }

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!note.title || !note.description) return;
    addNote(new Note(Date.now(), note.title, note.description));
    setNote(new Note(0, "", "", Date.now()));
  };

  return (
    <>
      <form onSubmit={handleAddNote}>
        <TextField
          id="filled-basic"
          label="Title"
          name="title"
          variant="filled"
          placeholder="Add title..."
          value={note.title}
          onChange={handleChange}
          required
          minLength="3"
          autoComplete="off"
        />
        <Spacer height="20px" />
        <TextField
          label="description"
          id="standard-multiline-flexible"
          name="description"
          placeholder="Add Note..."
          variant="filled"
          value={note.description}
          onChange={handleChange}
          required
          multiline
          minLength="10"
          autoComplete="off"
          fullWidth
        />
        <Spacer height="20px" />
        <div className="button-row">
          <Button variant="text" type="submit" title="Add">
            <AddCircleOutlineIcon />
          </Button>
        </div>
      </form>
    </>
  );
}

export const Spacer = ({ width, height }) => <div style={{ width, height }} />;
