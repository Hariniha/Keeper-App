import React, { useState } from "react";

const Note = ({ id, title, content, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedNote, setUpdatedNote] = useState({ title, content });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setUpdatedNote((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    onEdit(id, updatedNote);
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-3 w-[240px] m-4 ml-8 float-left">
      {isEditing ? (
        <>
          <input
            name="title"
            value={updatedNote.title}
            onChange={handleEditChange}
            className="w-full p-1 mb-2 border border-gray-300 rounded"
          />
          <textarea
            name="content"
            value={updatedNote.content}
            onChange={handleEditChange}
            rows={3}
            className="w-full p-1 mb-2 border border-gray-300 rounded"
          />
          <button
            onClick={handleUpdate}
            className="px-2 py-1 bg-green-500 text-white text-sm rounded mr-2"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <h1 className="text-[1.1em] mb-1.5 font-[McLaren] font-semibold">
            {title}
          </h1>
          <p className="text-[1.1em] mb-2.5 whitespace-pre-wrap font-[McLaren] break-words">
            {content}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="px-2 py-1 bg-blue-500 text-white text-sm rounded"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(id)}
              className="px-2 py-1 bg-red-500 text-white text-sm rounded"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Note;
