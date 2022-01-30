const fs = require('fs');
const path = require('path');

function createNewNote(body, db) {
    const note = body;

    db.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(db, null, 2)
    );
    return note;
};

module.exports = {
    createNewNote
};