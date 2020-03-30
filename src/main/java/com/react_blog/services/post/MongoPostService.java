package com.react_blog.services.post;

import com.react_blog.models.Post;
import com.react_blog.models.User;
import com.react_blog.payload.request.PostRequest;
import com.react_blog.payload.request.PostUpdateRequest;
import com.react_blog.repositories.PostRepository;
import com.react_blog.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class MongoPostService implements PostService {

    private final PostRepository repository;
    private final UserRepository userRepository;

    @Autowired
    MongoPostService(PostRepository repository, UserRepository userRepository) { this.repository = repository; this.userRepository = userRepository; }

    @Override
    public List<Post> findAll() {
        return repository.findAll();
    }

    @Override
    public Post findBy_id(String _id) {
        return findPostBy_id(_id);
    }

    @Override
    public List<Post> findByTitleContainsAndPublishedIsTrueAndPostDateLessThanEqual(String title) {
        // Search by current date and title contains and published
        Date date = new Date();
        return repository.findByTitleContainsAndPublishedIsTrueAndPostDateLessThanEqual(title, date);
    }

    @Override
    public List<Post> findByPublishedIsTrueAndPostDateLessThanEqual() {
        // Search by current date and published
        Date date = new Date();
        return repository.findByPublishedIsTrueAndPostDateLessThanEqual(date);
    }

    @Override
    public List<Post> findByPublishedIsTrueAndPostDateLessThanEqualAndAuthorUsername(String username) {
        // Search by current date and published and an author
        Date date = new Date();
        return repository.findByPublishedIsTrueAndPostDateLessThanEqualAndAuthorUsername(date, username);
    }

    @Override
    public List<Post> findByAuthorUsername(String username) {
        // List all by author username. Only current user can see this.
        return repository.findByAuthorUsername(username);
    }

    @Override
    public Post findBy_idAndPublishedIsTrueAndPostDateLessThanEqual(String _id) {
        // Get One post that is active to be seen by anyone
        Date date = new Date();
        Optional<Post> result = repository.findBy_idAndPublishedIsTrueAndPostDateLessThanEqual(_id, date);
        return result.orElseThrow(() -> new AuthenticationException("Post with id: " + _id + " not found") {});
    }

    @Override
    public Post findBy_idAndAuthorUsername(String _id, String author_username) {
        // Get One post that can be active or inactive to be seen by author only
        Optional<Post> result = repository.findBy_idAndAuthorUsername(_id, author_username);
        return result.orElseThrow(() -> new AuthenticationException("Post with id: " + _id + " not found") {});
    }

    @Override
    public Post create(PostRequest postRequest, String username) {
        Optional<User> result = userRepository.findByUsername(username);
        User user = result.orElseThrow(() -> new AuthenticationException("User with username: " + username + " not found") {});
        Post post = new Post(user, postRequest.getPublished(), postRequest.getPostDate(),
                postRequest.getTitle(), postRequest.getTitle2(), postRequest.getSubtitle1(),
                postRequest.getDescription1(), postRequest.getSubtitle2(), postRequest.getDescription2(),
                postRequest.getSubtitle3(), postRequest.getDescription3(), postRequest.getQuote1(),
                postRequest.getQuoter1(), postRequest.getQuote2(), postRequest.getQuoter2(), postRequest.getCategory(),
                0);
        post = repository.save(post);
        return post;
    }

    @Override
    public Post update(PostUpdateRequest postRequest, String _id, String username) {
        Post post = findPostBy_idAndAuthorUsername(_id, username);
        post.update(postRequest.getPublished(), postRequest.getPostDate(),
                postRequest.getTitle(), postRequest.getTitle2(), postRequest.getSubtitle1(),
                postRequest.getDescription1(), postRequest.getSubtitle2(), postRequest.getDescription2(),
                postRequest.getSubtitle3(), postRequest.getDescription3(), postRequest.getQuote1(),
                postRequest.getQuoter1(), postRequest.getQuote2(), postRequest.getQuoter2(), postRequest.getCategory());
        post = repository.save(post);
        return post;
    }

    @Override
    public Post delete(String _id, String username) {
        Post post = findPostBy_idAndAuthorUsername(_id, username);
        repository.delete(post);
        return post;
    }


    private Post findPostBy_id(String _id) {
        Optional<Post> result = repository.findBy_id(_id);
        return result.orElseThrow(() -> new AuthenticationException("Post with id: " + _id + " not found") {
        });
    }

    private Post findPostBy_idAndAuthorUsername(String _id, String author_id) {
        Optional<Post> result = repository.findBy_idAndAuthorUsername(_id, author_id);
        return result.orElseThrow(() -> new AuthenticationException("Post with id: " + _id + " not found") {});
    }

}
