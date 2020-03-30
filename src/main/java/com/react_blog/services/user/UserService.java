package com.react_blog.services.user;

import com.react_blog.models.User;

import java.util.List;

interface UserService {
    List<User> findAll();
    User findByUsername(String username);
    User findBy_id(String _id);
    User delete(String username);
    User updateInfo(User user, String username);
    User updatePassword(User user, String username);
}
