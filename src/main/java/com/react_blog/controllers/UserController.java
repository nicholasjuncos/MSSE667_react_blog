package com.react_blog.controllers;

import com.react_blog.models.User;
import com.react_blog.repositories.UserRepository;
import com.react_blog.security.jwt.JwtUtils;
import com.react_blog.services.user.MongoUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/users")
public class UserController {

    private final MongoUserService service;

    @Autowired
    UserRepository userRepository;

    @Autowired
    private JwtUtils jwtUtils;

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

    @DeleteMapping("/delete")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<?> deleteMe(@RequestHeader Map<String, String> headers) {
        String username = jwtUtils.getLoggedInUser(headers);
        return ResponseEntity.ok(service.delete(username));
    }

    @DeleteMapping("/delete/{username}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> delete(@PathVariable("username") String username) {
        return ResponseEntity.ok(service.delete(username));
    }

    @PutMapping("/update/info/")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<?> updateUserInfo(@RequestHeader Map<String, String> headers, @RequestBody @Valid User user) {
        String username = jwtUtils.getLoggedInUser(headers);
        return ResponseEntity.ok(service.updateInfo(user, username));
    }

    @PutMapping("/update/password/")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<?> updateUserPassword(@RequestHeader Map<String, String> headers, @RequestBody @Valid User user) {
        String username = jwtUtils.getLoggedInUser(headers);
        return ResponseEntity.ok(service.updatePassword(user, username));
    }

    @GetMapping("/{_id}")
    public ResponseEntity<?> findUserBy_id(@PathVariable("_id") String _id) {
        return ResponseEntity.ok(service.findBy_id(_id));
    }

}
