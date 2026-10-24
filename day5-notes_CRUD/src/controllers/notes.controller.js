
const notesModel = require("../models/notes.model");

const createNotesController = async (req, res) => {
  try {
    let { title, description } = req.body;

    let newNote = await notesModel.create({
      title,
      description,
    });

    return res.status(201).json({
      message: "notes craeted successfully",
      data: newNote,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

const getAllNotesController = async (req, res) => {
  try {
    const allNotes = await notesModel.find();
    return res.status(200).json({
      message: "all notes fetched successfully",
      data: allNotes,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

const getSingleNoteController = async (req, res) => {
  try {
    let noteId = req.params.id;

    let note = await notesModel.findById(noteId);

    return res.status(200).json({
      message: "note fetched",
      data: note,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

const updateNotesController = async (req, res) => {
  try {
    let noteId = req.params.id;
    let body = req.body;

    let updatedNote = await notesModel.findByIdAndUpdate(noteId, body, {
      new: true,
    });

    return res.status(200).json({
      message: "notes updated successfully",
      data: updatedNote,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};


const deletingNoteController = async(req,res)=>{
try {
    let noteId = req.params.id;
    await notesModel.findByIdAndDelete(noteId)

    return res.status(200).json({
        message:"note deleted successfully",
    })
    
} catch (error) {
    return res.status(501).json({
        message:"internal server error"
    })
}
}


module.exports = {
  createNotesController,
  getAllNotesController,
  getSingleNoteController,
  updateNotesController,
  deletingNoteController
};
