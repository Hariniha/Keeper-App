import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((_, index) => index !== id));
  };

  const editNote = (id, updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note, index) => (index === id ? updatedNote : note))
    );
  };

  return (
    <div className="min-h-screen relative pb-10">
      <Header />
      <main className="p-8">
        <CreateNote onAdd={addNote} />
        <div className="flex flex-wrap">
          {notes.map((note, index) => (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={deleteNote}
              onEdit={editNote}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
