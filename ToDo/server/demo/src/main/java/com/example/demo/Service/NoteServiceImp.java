package com.example.demo.Service;

import com.example.demo.Entity.Note;
import com.example.demo.Entity.User;
import com.example.demo.Model.NoteDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicBoolean;

@Service("NoteService")
public class NoteServiceImp implements INoteService{
    @Autowired
    private NoteDao noteDao;

    @Override
    public Optional<Note> createNote(Note note, Integer user_id) {
        User newUser = new User();
        newUser.setUser_id(user_id);
        note.setUser(newUser);
        noteDao.save(note);
        return Optional.of(noteDao.getReferenceById(note.getId_note()));
    }

    @Override
    public Note queryNote(Integer id) {
        return noteDao.getReferenceById(id);
    }

    @Override
    public Optional<String> deleteNote(Integer id) {

        noteDao.deleteById(id);
        //Utilizamos una variable atomica porque se va a modificar dentro de una expresion lambda
        AtomicBoolean error = new AtomicBoolean(false);
        noteDao.findAll().forEach(note -> {
            if(note.getId_note() == id) {
                error.set(true);
                System.out.println("No se ha borrado correctamente");
            }
        });
        return Optional.of(error.get() ? "ERROR": "DELETED");
    }

    @Override
    public Optional<List<Note>> getAllNotes() {
        noteDao.findAll().forEach(note -> {
            System.out.println(note.toString());
        });
        return Optional.of(noteDao.findAll());}

    @Override
    public Optional<HashMap<String, String>> convertNoteToHashMap(Note noteToConvert) {

        HashMap note = new HashMap();
        note.put("id_note", noteToConvert.getId_note().toString());
        note.put("content", noteToConvert.getContent());
        note.put("user", noteToConvert.getUser().toString());

        return Optional.of(note);
    }

    @Override
    public Optional<List<Note>> getUserNotes(Integer user_id) {
        List<Note> listOfNotes = noteDao.getUserNotes(user_id);
        return Optional.of(listOfNotes);
    }

}
