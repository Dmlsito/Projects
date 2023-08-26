package com.example.demo.Model;

import com.example.demo.Entity.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteDao extends JpaRepository<Note, Integer> {
}
