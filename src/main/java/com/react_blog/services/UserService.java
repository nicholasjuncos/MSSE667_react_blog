package com.react_blog.services;

import com.react_blog.models.User;

import java.util.List;

interface UserService {
    List<User> findAll();
    User findByUsername(String username);
    User findBy_id(String _id);
    User delete(String _id);
    User updateInfo(User user);
    User updatePassword(User user);
}
