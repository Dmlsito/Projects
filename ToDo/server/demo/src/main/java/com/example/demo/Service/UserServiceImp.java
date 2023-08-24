package com.example.demo.Service;


import com.example.demo.Entity.User;
import com.example.demo.Model.UserDao;
import org.aspectj.lang.annotation.Before;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;


@Service("UserService")
@Lazy
public class UserServiceImp implements IUserService {
    @Autowired
    private UserDao userDao;

    @Override
    public User queryUser(Integer id) {
        return userDao.getReferenceById(id);
    }

    @Override
    public Optional<List<User>> queryAllUsers() {
        Optional<List<User>> usersList = Optional.of(userDao.findAll());
        return usersList;
    }

    @Override
    public Optional<Integer> insertUser(User user) {
        userDao.saveAndFlush(user);
        User userInserted = userDao.getReferenceById(user.getUser_id());
        return Optional.of(userInserted.getUser_id());
    }

    @Override
    public Optional<String>deleteUser(Integer id){
        userDao.deleteById(id);
        boolean error = false;
        for(User userToCheck: userDao.findAll()) {
            if(userToCheck.getUser_id() == id)
                error = true;
            else
               error = false;
        }
        return Optional.of(error ? "ERROR": "Deleted");

    }

    @Override
    public HashMap<String, String> convertUserToHashMap(User user) {
        HashMap<String, String> userJson = new HashMap<>();
        userJson.put("user_id", user.getUser_id().toString());
        userJson.put("username", user.getUsername());
        return userJson;
    }

    @Override
    public Integer checkUser(User userToCheck) {
        System.out.println(userToCheck);
        List<User> listUsers = userDao.findAll();
        System.out.println(listUsers);
        int error = 0;
        for(User user: listUsers) {
            if(user.getPassword().equals(userToCheck.getPassword()) && user.getUsername().equals(userToCheck.getUsername())){
                error = 1;
                System.out.println("Usuario encontrado");
                break;
            }

        }
        return error;
    }
}
