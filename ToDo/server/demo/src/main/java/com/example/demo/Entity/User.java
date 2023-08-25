package com.example.demo.Entity;

import jakarta.persistence. *;

import java.util.List;

@Entity(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer user_id;
    @Column
    private String username;

    @Column
    private String password;

    //El fetch es un tipo de busqueda, en este caso es una busqueda vaga, puedes tener otros tipos de busqueda
    // y algunos pueden pedir mayor o menor rendimiento
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "user", cascade = CascadeType.ALL)
    List<Note> listNote;

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getUser_id() {return this.user_id;}

    public void setUser_id(Integer userId) {
        this.user_id = userId;
    }

    public String getPassword() {
        return this.password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "user_id=" + user_id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
