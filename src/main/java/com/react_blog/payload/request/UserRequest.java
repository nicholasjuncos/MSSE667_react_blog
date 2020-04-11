package com.react_blog.payload.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class UserRequest {
    @NotBlank
    @Size(max = 250)
    private String firstName;

    @NotBlank
    @Size(max = 250)
    private String lastName;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
