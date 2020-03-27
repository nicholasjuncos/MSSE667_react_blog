package com.react_blog.repositories;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.react_blog.models.ERole;
import com.react_blog.models.Role;

public interface RoleRepository extends MongoRepository<Role, String> {
    Optional<Role> findByName(ERole name);
}
