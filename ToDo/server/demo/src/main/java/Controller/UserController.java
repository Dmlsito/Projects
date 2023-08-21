package Controller;


import Entity.Users;
import Service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private IUserService userService;

    @GetMapping("/getAll")
    public ResponseEntity<?> queryAllUsers() {
        return new ResponseEntity<>(userService.queryAllUsers(), HttpStatus.resolve(200));
    }

    @GetMapping("/getUser")
    public ResponseEntity<?> queryUser(Integer id) {
        return new ResponseEntity<>(userService.queryUser(id), HttpStatus.resolve(200));
    }

    @PostMapping("createUser")
    public ResponseEntity<?> insertUser(@RequestBody Users user) {
        return new ResponseEntity<>(userService.insertUser(user), HttpStatus.resolve(200));
    }


}
