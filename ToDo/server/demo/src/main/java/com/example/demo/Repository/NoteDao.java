package com.example.demo.Repository;

import com.example.demo.Entity.Note;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface NoteDao extends CrudRepository<Note, Integer> {

    @Query(value = "SELECT * FROM NOTES WHERE USER_ID = :id_user", nativeQuery = true)
    List<Note> getUserNotes(Integer id_user);
    @Query(value = "SELECT * FROM NOTES", nativeQuery = true)
    List<Note> findAll();

    @Query(value = "SELECT * FROM NOTES WHERE ID_NOTE = :id_note", nativeQuery = true)
    Note getReferenceById(Integer id_note);

}
