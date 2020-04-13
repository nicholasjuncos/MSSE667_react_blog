import axios from 'axios';

import * as c from '../constants';
import {AsyncStorage} from "react-native";
import {TOKEN_KEY} from "../provider";

export async function createPost(data) {
    try {
        let token = await AsyncStorage.getItem(TOKEN_KEY);

        try {
            const options = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "multipart/form-data",
                    "Authorization": token
                }
            };

            const form_data = new FormData();
            for (let key in data)
                form_data.append(key, data[key]);

            let res = await axios.post(`${c.POSTS_BASE}`, form_data, options);
            return res.data;
        } catch (e) {
            return new Error(e)
        }
    } catch (e) {
        throw handler(e);
    }
}

export async function getPublishedPosts() {
    try {
        let res = await axios.get(c.POSTS_PUBLISHED);
        return res.data;
    } catch(e) {
        throw handler(e)
    }
}

export async function getPublishedPostDetail(id) {
    try {
        const detailURL = c.POSTS_PUBLISHED + '/' + id;
        let res = await axios.get(detailURL);
        return res.data;
    } catch(e) {
        throw handler(e)
    }
}

export async function getAuthorPublishedPosts(username) {
    try {
        const postsURL = c.POSTS_AUTHOR_PUBLISHED + username;
        let res = await axios.get(postsURL);
        return res.data;
    } catch(e) {
        throw handler(e)
    }
}

export async function getMyPosts() {
    try {
        let token = await AsyncStorage.getItem(TOKEN_KEY);

        try {
            const options = {
                headers: {
                    "Content-type": "application/json",
                    "Authorization": 'Bearer ' + token
                }
            };


            let res = await axios.get(`${c.MY_POSTS}`, options);
            return res.data;
        } catch (e) {
            return new Error(e)
        }
    } catch (e) {
        throw handler(e);
    }
}

export async function updatePost(postId, data) {
    try {
        let token = await AsyncStorage.getItem(TOKEN_KEY);

        try {
            const options = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "multipart/form-data",
                    "Authorization": token
                }
            };

            const form_data = new FormData();
            for (let key in data)
                form_data.append(key, data[key]);
            const detailURL = c.MY_POSTS + postId;
            let res = await axios.put(`${detailURL}`, form_data, options);
            return res.data;
        } catch (e) {
            return new Error(e)
        }
    } catch (e) {
        throw handler(e);
    }
}

export async function deletePost(postId) {
    try {
        let token = await AsyncStorage.getItem(TOKEN_KEY);

        try {
            const options = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "multipart/form-data",
                    "Authorization": token
                }
            };
            const detailURL = c.MY_POSTS + postId;
            let res = await axios.delete(`${detailURL}`, options);
            return res.data;
        } catch (e) {
            return new Error(e)
        }
    } catch (e) {
        throw handler(e);
    }
}

export function handler(err) {
    let error = err;

    if (err.response && err.response.data.hasOwnProperty("message"))
        error = err.response.data;
    else if (!err.hasOwnProperty("message")) error = err.toJSON();

    return new Error(error.message);
}
