import { useMemo, useState } from "react";
import InputNotes from "./component/InputNotes";
import NotesView from "./component/NotesView";

export default function NotesApp() {
  const [input, setInput] = useState("");
  const [notes, setNotes] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const value = input.trim();
    if (!value) return;

    const newNote = {
      id: crypto.randomUUID(),
      text: value,
      completed: false,
    };

    setNotes((prev) => [...prev, newNote]);
    setInput("");
  }

  function toggleCheck(id) {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, completed: !note.completed } : note
      )
    );
  }



  function deleteNote(id) {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  }

  function completedNotes() {
    return notes.filter((note) => note.completed).length;
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <h2 className="text-center text-3xl font-semibold text-slate-800 mb-10">
        My Notes App
      </h2>
      <p className="text-center text-slate-600 mt-4">
        Completed: {completedNotes()} / {notes.length}
      </p>

      <div className="mx-auto max-w-xl rounded-lg border border-amber-950 bg-white p-6 shadow-md">
        <InputNotes
          input={input}
          notes={notes}
          setInput={setInput}
          handleSubmit={handleSubmit}
        />
      </div>

      <div className="mx-auto max-w-xl mt-8">
        <NotesView
          notes={notes}
          toggleCheck={toggleCheck}
          deleteNote={deleteNote}
        />
      </div>
    </div>
  );
}
