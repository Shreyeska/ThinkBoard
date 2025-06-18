export function getAllNotes(req, res) {
  res.status(200).send("You just fetched all the notes.");
}

export function createNote(req, res) {
  res.status(201).json("Notes Created successfully.");
}

export function updateNote(req, res) {
  res.status(200).json({ message: "Note Updated successfully." });
}

export function deleteNote(req, res) {
  res.status(200).json({ message: "Note Deleted successfully." });
}
