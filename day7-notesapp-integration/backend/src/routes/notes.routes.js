const express = require("express");
const {
  createNotesController,
  getAllNotesController,
  getSingleNoteController,
  updateNotesController,
  deletingNoteController,
  singleEntityUpdateController,
} = require("../controllers/notes.controller");
const notesModel = require("../models/notes.model");

const router = express.Router();


//post api CREATE
router.post("/create", createNotesController);


//get apis READ
router.get("/allNotes", getAllNotesController);
router.get("/:id", getSingleNoteController );

//put api UPDATE
router.put("/:id", updateNotesController)

//patch api UPDATE
router.patch("/:id/single", singleEntityUpdateController)

//delete api DELETE
router.delete("/:id", deletingNoteController)

module.exports = router;
