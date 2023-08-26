package com.example.demo.Service;

import com.example.demo.Entity.User;
import com.fasterxml.jackson.databind.util.JSONPObject;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

public interface IUserService {

    User queryUser (Integer id);
    Optional<List<User>> queryAllUsers();
    Optional<Integer>insertUser(User user);
    HashMap<String, String> convertUserToHashMap(User user);
    Optional<?> checkUser(User user);
    Optional<String>deleteUser(Integer id);
}
