package com.example.demo.Controller;


import com.example.demo.Entity.User;
import com.example.demo.Service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/user")
public class UserController {

    @Autowired
    private IUserService userService;

    @GetMapping("/getAll")
    public ResponseEntity<?> queryAllUsers() {
        return new ResponseEntity<>(userService.queryAllUsers(), HttpStatus.resolve(200));
    }

    @GetMapping("/getUser/{id}")
    public ResponseEntity<?> queryUser(@PathVariable Integer id) {
        return new ResponseEntity<>(userService.convertUserToHashMap(userService.queryUser(id)), HttpStatus.resolve(200));
    }

    @PostMapping("/createUser")
    public ResponseEntity<?> insertUser(@RequestBody User user) {
        return new ResponseEntity<>(userService.insertUser(user), HttpStatus.resolve(200));
    }

    @PostMapping("/checkUser")
    public ResponseEntity<?> checkUser(@RequestBody User user) {
        return new ResponseEntity<>(userService.checkUser(user), HttpStatus.resolve(200));
    }

    @DeleteMapping("/deleteUser/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Integer id) {
        return new ResponseEntity<>(userService.deleteUser(id), HttpStatus.resolve(200));
    }


}
