package com.example.demo.Service;

import com.example.demo.Entity.Note;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

public interface INoteService  {

     Optional<Note> createNote(Note note, Integer user_id);
     Note queryNote(Integer id);
     Optional<String> deleteNote(Integer id);
     Optional<List<Note>> getAllNotes();
     Optional<HashMap<String, String>> convertNoteToHashMap(Note noteToConvert);

     Optional<List<Note>> getUserNotes(Integer user_id);



}
