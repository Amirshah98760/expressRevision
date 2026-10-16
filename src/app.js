const express = require('express');

const app = express();
app.use(express.json());

   
const notes = [];
app.post('/notes', (req, res) => {
    const note = req.body;
    console.log('Received note:', note);
    notes.push(note);
    res.status(201).json(
       {
        message: 'Note created successfully',
        note: note
       }
    );

    });


    app.get('/notes', (req, res) => {
        res.json({
            message: 'Notes retrieved successfully',
            note: notes
        });
    }); 

    app.delete('/notes/:id', (req, res) => {
     
        const noteId = req.params.id;
        delete notes[noteId];
        res.json({
            message: 'Note deleted successfully',
            noteId: noteId
        });
    });

    app.put('/notes/:id', (req, res) => {
        const noteId = req.params.id;
        const updatedNote = req.body;
        notes[noteId] = updatedNote;
        res.json({
            message: 'Note updated successfully',
            noteId: noteId,
            updatedNote: updatedNote
        });
    });



module.exports = app;
