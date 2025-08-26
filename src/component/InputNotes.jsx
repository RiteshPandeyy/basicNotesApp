export default function InputNotes({ input, handleSubmit, setInput }) {
  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        className="flex-1 rounded-lg border border-amber-500 px-4 py-3 shadow-sm outline-none transition
                   focus:border-amber-600 focus:ring focus:ring-amber-200"
        value={input}
        placeholder="Type your input here.."
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-lg bg-blue-500 px-5 py-3 font-semibold text-white shadow-sm transition
                   hover:bg-blue-600 active:scale-95"
      >
        Add
      </button>
    </form>
  );
}
