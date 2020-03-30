package com.react_blog.repositories;

import com.react_blog.models.Post;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RepositoryRestResource(collectionResourceRel = "posts", path = "posts")
public interface PostRepository extends MongoRepository<Post, String>  {

    List<Post> findByTitleContainsAndPublishedIsTrueAndPostDateLessThanEqual(String title, Date searchDate);
    List<Post> findByPublishedIsTrueAndPostDateLessThanEqual(Date searchDate);
    List<Post> findByPublishedIsTrueAndPostDateLessThanEqualAndAuthorUsername(Date searchDate, String username);
    List<Post> findByAuthorUsername(String username);
    Optional<Post> findBy_idAndPublishedIsTrueAndPostDateLessThanEqual(String _id, Date searchDate);
    Optional<Post> findBy_idAndAuthorUsername(String _id, String username);
    Optional<Post> findBy_id(String _id);

}
