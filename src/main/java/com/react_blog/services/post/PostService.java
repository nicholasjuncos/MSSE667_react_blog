package com.react_blog.services.post;

import com.react_blog.models.Post;
import com.react_blog.payload.request.PostRequest;
import com.react_blog.payload.request.PostUpdateRequest;

import java.util.List;

interface PostService {
    // For Admin
    List<Post> findAll();
    Post findBy_id(String _id);

    // For basic searching by title in currently published posts.
    List<Post> findByTitleContainsAndPublishedIsTrueAndPostDateLessThanEqual(String title);

    // See all currently published posts
    List<Post> findByPublishedIsTrueAndPostDateLessThanEqual();

    // See all currently published posts of one author
    List<Post> findByPublishedIsTrueAndPostDateLessThanEqualAndAuthorUsername(String username);

    // See all posts by an author. Used by current user logged in.
    List<Post> findByAuthorUsername(String username);

    Post findBy_idAndPublishedIsTrueAndPostDateLessThanEqual(String _id);
    Post findBy_idAndAuthorUsername(String _id, String username);

    Post create(PostRequest postRequest, String username);
    Post update(PostUpdateRequest postRequest, String _id, String user_id);
    Post delete(String _id,  String user_id);

}
