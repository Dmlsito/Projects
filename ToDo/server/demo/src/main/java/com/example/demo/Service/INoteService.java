package com.example.demo.Service;

import com.example.demo.Entity.Note;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

public interface INoteService {

     Optional<Integer> createNote(Note note);
     Note queryNote(Integer id);
     Optional<String> deleteNote(Integer id);
     Optional<List<Note>> getAllNotes();
     Optional<HashMap<String, String>> convertNoteToHashMap(Note noteToConvert);


}
