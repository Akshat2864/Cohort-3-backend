import React from 'react'

const NoteCard = ({note, deleteNote, noteForUpdate}) => {
  return (
    <div className="border border-gray-300 rounded-md p-4">
      <h1 className="text-xl font-bold">{note.title}</h1>
      <p className="text-gray-600">{note.description.length>20? note.description.substring(0,20): note.description }</p>
      <div className="flex gap-2 mt-2">
        <button onClick={()=>noteForUpdate(note)} className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600">
          Update
        </button>
        <button onClick={()=>deleteNote(note._id)} className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  )
}

export default NoteCard
