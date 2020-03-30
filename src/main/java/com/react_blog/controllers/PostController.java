package com.react_blog.controllers;

import com.react_blog.payload.request.PostRequest;
import com.react_blog.payload.request.PostUpdateRequest;
import com.react_blog.repositories.PostRepository;
import com.react_blog.security.jwt.JwtUtils;
import com.react_blog.services.post.MongoPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/posts")
public class PostController {

    private final MongoPostService service;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    PostRepository postRepository;

    public PostController(MongoPostService service) {
        this.service = service;
    }

    @GetMapping("/")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> getPosts() { return ResponseEntity.ok(service.findAll());}

    @PostMapping("/")
    @PreAuthorize("hasRole('User')")
    public ResponseEntity<?> createPost(@RequestHeader Map<String, String> headers, @RequestBody @Valid PostRequest postRequest) {
        String username = jwtUtils.getLoggedInUser(headers);
        return ResponseEntity.ok(service.create(postRequest, username));
    }

    @GetMapping("/?title_contains={title}")
    public ResponseEntity<?> findPostsByTitle(@PathVariable("title") String title) {
        return ResponseEntity.ok(service.findByTitleContainsAndPublishedIsTrueAndPostDateLessThanEqual(title));
    }

    @GetMapping("/published")
    public ResponseEntity<?> findPublishedPosts() {
        return ResponseEntity.ok(service.findByPublishedIsTrueAndPostDateLessThanEqual());
    }

    @GetMapping("/published/{post_id}")
    public ResponseEntity<?> findPublishedPostBy_id(@PathVariable("post_id") String post_id) {
        return ResponseEntity.ok(service.findBy_idAndPublishedIsTrueAndPostDateLessThanEqual(post_id));
    }

    @GetMapping("/?author_username={username}")
    public ResponseEntity<?> findAuthorsPublishedPosts(@PathVariable("username") String username) {
        return ResponseEntity.ok(service.findByPublishedIsTrueAndPostDateLessThanEqualAndAuthorUsername(username));
    }

    @GetMapping("/admin/?author_username={username}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> findAuthorPosts(@PathVariable("username") String username) {
        return ResponseEntity.ok(service.findByAuthorUsername(username));
    }

    @GetMapping("/my/posts/")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> findAuthorsPosts(@RequestHeader Map<String, String> headers) {
        String username = jwtUtils.getLoggedInUser(headers);
        return ResponseEntity.ok(service.findByAuthorUsername(username));
    }

    @GetMapping("/my/posts/{post_id}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> findAuthorPost(@RequestHeader Map<String, String> headers, @PathVariable("post_id") String post_id) {
        String username = jwtUtils.getLoggedInUser(headers);
        return ResponseEntity.ok(service.findBy_idAndAuthorUsername(post_id, username));
    }

    @PutMapping("/my/posts/{post_id}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> updateAuthorPost(@RequestHeader Map<String, String> headers, @PathVariable("post_id") String post_id, @RequestBody @Valid PostUpdateRequest postRequest) {
        String username = jwtUtils.getLoggedInUser(headers);
        return ResponseEntity.ok(service.update(postRequest, post_id, username));
    }

    @DeleteMapping("/my/posts/{post_id}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> updateAuthorPost(@RequestHeader Map<String, String> headers, @PathVariable("post_id") String post_id) {
        String username = jwtUtils.getLoggedInUser(headers);
        return ResponseEntity.ok(service.delete(post_id, username));
    }

    @GetMapping("/{_id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> findPostBy_id(@PathVariable("_id") String _id) {
        return ResponseEntity.ok(service.findBy_id(_id));
    }
}
