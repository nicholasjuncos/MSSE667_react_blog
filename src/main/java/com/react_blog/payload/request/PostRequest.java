package com.react_blog.payload.request;

import com.react_blog.models.User;

import javax.validation.constraints.NotBlank;

public class PostRequest extends PostUpdateRequest {

    @NotBlank
    private User author;

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

}
