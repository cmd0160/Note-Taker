const router = require("express").Router();
const { createNewNote } = require("../../lib/notes");
const db = require("../../db/db");
const { nanoid } = require("nanoid");

router.get("/notes", (req, res) => {
  res.json(db);
});

router.post("/notes", (req, res) => {
  req.body.id = nanoid();

  const note = createNewNote(req.body, db);
  res.json(note);
});

module.exports = router;
