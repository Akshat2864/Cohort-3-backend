import React, { useEffect, useState } from "react";
import axios from "axios";
import NoteCard from "./components/NoteCard";

const App = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });

  const [allNotes, setAllNotes] = useState([]);

  const [updateNoteId, setUpdateNoteId] = useState(null);

  const getAllNotes = async () => {
    try {
      let res = await axios.get("http://localhost:3000/notes/allNotes");

      setAllNotes(res.data.data);
    } catch (error) {
      console.log("frontend error while getting all notes", error);
    }
  };

  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (updateNoteId) {
      //update api call

      let res = await axios.put(
        `http://localhost:3000/notes/${updateNoteId}`,
        formValues,
      );
      console.log(res);
      setUpdateNoteId(null)
    } else {
      //create api call
      let res = await axios.post(
        "http://localhost:3000/notes/create",
        formValues,
      );
      console.log(res);
    }

    setFormValues({
      title: "",
      description: "",
    });

    getAllNotes();
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  const deleteNote = async (id) => {
    try {
      let res = await axios.delete(`http://localhost:3000/notes/${id}`);
      getAllNotes();
    } catch (error) {
      console.log("error in delete note", error);
    }
  };

  const noteForUpdate = (note) => {
    setUpdateNoteId(note._id);
    setFormValues({
      title: note.title,
      description: note.description,
    });
  };

  return (
    <div className="h-screen p-5 flex flex-col gap-3">
      <h1 className="text-2xl font-bold">Notes App</h1>

      <form onSubmit={handleSubmit} className=" w-96 flex flex-col gap-2 mt-5">
        <input
          required
          onChange={handleChange}
          name="title"
          value={formValues.title}
          type="text"
          placeholder="Title"
          className="border border-gray-300 rounded-md p-2"
        />
        <input
          minLength={20}
          required
          onChange={handleChange}
          name="description"
          value={formValues.description}
          type="text"
          placeholder="Description"
          className="border border-gray-300 rounded-md p-2"
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
         {updateNoteId? "Update Note" : "Add Note"}
        </button>
      </form>

      <div className="w-96 flex gap-2 mt-5">
        {allNotes.map((val) => (
          <NoteCard
            key={val._id}
            note={val}
            deleteNote={deleteNote}
            noteForUpdate={noteForUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
