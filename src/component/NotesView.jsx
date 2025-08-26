export default function NotesView({ notes, toggleCheck, deleteNote }) {
  if (!notes.length) {
    return (
      <p className="text-center text-slate-500 mt-6">
        No notes yet. Add your first one above
      </p>
    );
  }

  return (
    <ul className="space-y-3">
      {notes.map((note) => (
        <li
          key={note.id}
          className={
            note.completed
              ? "bg-red-300 flex items-center justify-between rounded-lg border px-4 py-3 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md"
              : "flex items-center justify-between rounded-lg border bg-white px-4 py-3 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md"
          }
        >
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={!!note.completed}
              onChange={() => toggleCheck(note.id)}
              className="h-5 w-5 cursor-pointer rounded border-slate-400 text-blue-600 focus:ring-2 focus:ring-blue-300"
            />
            <span
              className={
                note.completed
                  ? "line-through text-slate-500"
                  : "text-slate-800"
              }
            >
              {note.text}
            </span>
          </label>

          <button
            onClick={() => deleteNote(note.id)}
            className="rounded-md px-3 py-1 text-sm text-red-600 transition hover:bg-red-50 hover:text-red-700 active:scale-95"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
