import CreateNote, { Spacer } from "./CreateNote";
import NotesList from "./NotesList";
import { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

export default function Layout() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = localStorage.getItem("notesList");

    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    if (notes.length) localStorage.setItem("notesList", JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  return (
    <article>
      <div>
        <div>
          <h2 id="header1">TaskBoard</h2>
        </div>
        <div className="main-div">
          <div className="create">
            <CreateNote addNote={addNote} />
          </div>
          <Spacer height="50px" />
          {notes.length > 0 ? (
            <Divider textAlign="centre">
              Notes <Chip label={notes.length} size="small" />
            </Divider>
          ) : (
            <Divider textAlign="centre">No Notes Available</Divider>
          )}
          <Spacer height="25px" />
          <div className="note-list">
            <NotesList notes={notes} />
          </div>
        </div>
      </div>
    </article>
  );
}
