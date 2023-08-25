package com.example.demo.Entity;

import jakarta.persistence.*;
import jakarta.persistence.criteria.Fetch;

@Entity
@Table(name = "notes")
public class Note {
    @Column
    private String content;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_note;

    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    public String getContent() {
        return this.content;
    }
    public void setContent(String content){
        this.content = content;
    }

    public Integer getId_note(){
        return this.id_note;
    }
    public void setId_note(Integer id_note) {
        this.id_note = id_note;
    }
    public User getUser() {
        return this.user;
    }
    public void setUser(User user) {
        this.user = user;
    }





}
