package com.react_blog.services.user;

import com.react_blog.models.User;
import com.react_blog.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MongoUserService implements UserService {

    private final UserRepository repository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    MongoUserService(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<User> findAll() {
        return repository.findAll();
    }

    @Override
    public User delete(String username) {
        User deleted = findUserByUsername(username);
        repository.delete(deleted);
        return deleted;
    }

    @Override
    public User findByUsername(String username) {
        return findUserByUsername(username);
    }

    @Override
    public User findBy_id(String _id) {
        return findUserBy_id(_id);
    }

    @Override
    public User updateInfo(String firstName, String lastName, String username) {
        User updated = findUserByUsername(username);
        updated.updateInfo(firstName, lastName);
        updated = repository.save(updated);
        return updated;
    }

    @Override
    public User updatePassword(User user, String username) {
        User updated = findUserByUsername(username);
        updated.updatePassword(encoder.encode(user.getPassword()));
        updated = repository.save(updated);
        return updated;
    }

    private User findUserByUsername(String username) {
        Optional<User> result = repository.findByUsername(username);
        return result.orElseThrow(() -> new UsernameNotFoundException(username));
    }

    private User findUserBy_id(String _id) {
        Optional<User> result = repository.findBy_id(_id);
        return result.orElseThrow(() -> new AuthenticationException("User with id: " + _id + " not found") {
        });

    }
}
