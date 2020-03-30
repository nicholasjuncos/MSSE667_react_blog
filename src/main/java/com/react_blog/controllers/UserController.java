package com.react_blog.controllers;

import com.react_blog.models.User;
import com.react_blog.repositories.UserRepository;
import com.react_blog.services.MongoUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/users")
public class UserController {

    private final MongoUserService service;

    @Autowired
    UserRepository userRepository;

    public UserController(MongoUserService service) {
        this.service = service;
    }

    @GetMapping("/")
    public ResponseEntity<?> getUsers() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/username={username}")
    public ResponseEntity<?> findUserByUsername(@PathVariable("username") String username) {
        return ResponseEntity.ok(service.findByUsername(username));
    }

    @GetMapping("/{_id}")
    public ResponseEntity<?> findUserBy_id(@PathVariable("_id") String _id) {
        return ResponseEntity.ok(service.findBy_id(_id));
    }

    @DeleteMapping("/{_id}")
    public ResponseEntity<?> delete(@PathVariable("_id") String _id) {
        return ResponseEntity.ok(service.delete(_id));
    }

    @PutMapping("/{_id}/info/")
    public ResponseEntity<?> updateUserInfo(@RequestBody @Valid User user) {
            return ResponseEntity.ok(service.updateInfo(user));
    }

    @PutMapping("/{_id}/password/")
    public ResponseEntity<?> updateUserPassword(@RequestBody @Valid User user) {
        return ResponseEntity.ok(service.updatePassword(user));
    }

}
