import React, { useState } from "react";

const CreateNote = ({ onAdd }) => {
  const [note, setNote] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.title.trim() || note.content.trim()) {
      onAdd(note);
      setNote({ title: "", content: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <input
        name="title"
        value={note.title}
        onChange={handleChange}
        placeholder="Title"
        className="block w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <textarea
        name="content"
        value={note.content}
        onChange={handleChange}
        placeholder="Take a note..."
        rows={3}
        className="block w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500"
      >
        Add
      </button>
    </form>
  );
};

export default CreateNote;
