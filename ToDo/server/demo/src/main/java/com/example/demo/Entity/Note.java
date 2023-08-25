package com.example.demo.Entity;

import jakarta.persistence.*;
import jakarta.persistence.criteria.Fetch;

@Entity
public class Note {


    @Column
    private String content;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_note;

    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

}
