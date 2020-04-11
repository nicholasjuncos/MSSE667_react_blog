import React from 'react';

//API URL
export const API_URL = 'http://localhost:8080/api';

//API End Points
export const REGISTER = `${API_URL}/auth/signup`;
export const LOGIN = `${API_URL}/auth/signin`;
export const UPDATE_INFO = `${API_URL}/users/update/info/`;
export const UPDATE_PASSWORD = `${API_URL}/users/update/password/`;
export const GET_USER = `${API_URL}/users/username=`;
export const POSTS_BASE = `${API_URL}/posts/`;
export const POSTS_PUBLISHED = `${API_URL}/posts/published`;
export const POSTS_AUTHOR_PUBLISHED = `${API_URL}/posts/?author_username=`;
export const MY_POSTS = `${API_URL}/posts/my/posts/`;
