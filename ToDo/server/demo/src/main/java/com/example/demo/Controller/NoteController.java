package com.example.demo.Controller;


import com.example.demo.Entity.Note;
import com.example.demo.Service.INoteService;
import com.example.demo.Service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/note")
public class NoteController{

    @Autowired
    private INoteService noteService;

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/getAll")
    public ResponseEntity<?> getAllNotes() {
        return new ResponseEntity<>(noteService.getAllNotes(), HttpStatus.resolve(200));
    }
    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/getNote/{id}")
    public ResponseEntity<?>getNote(@PathVariable Integer id) {
        return new ResponseEntity<>(noteService.convertNoteToHashMap(noteService.queryNote(id)), HttpStatus.resolve(200));
    }
    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/createNote")
    public ResponseEntity<?> createNote(@RequestBody Note note) {
        return new ResponseEntity<>(noteService.createNote(note), HttpStatus.resolve(200));
    }
    @CrossOrigin(origins = "http://localhost:5173")
    @DeleteMapping("/deleteNote/{id}")
    public ResponseEntity<?> deleteNote(@PathVariable Integer id) {
        return new ResponseEntity<>(noteService.deleteNote(id), HttpStatus.resolve(200));
    }
}
