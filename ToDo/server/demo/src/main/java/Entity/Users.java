package Entity;

import jakarta.persistence. *;

@Entity
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer User_id;
    @Column
    private String Username;

    public String getUsername() {
        return this.Username;
    }

    public void setUsername(String username) {
        this.Username = username;
    }

    public Integer getUser_id() {
        return this.User_id;
    }

    public void setUser_id(Integer userId) {
        this.User_id = userId;
    }



}
