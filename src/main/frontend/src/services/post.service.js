import axios from 'axios';
import authHeader from "./auth/auth-header";

const API_URL = 'http://localhost:8080/api/posts/';

class PostService {
    getPosts(url) {
        return axios.get(`${API_URL}${url}`, {headers: authHeader()});
    }

    getPost(url) {
        return axios.get(`${API_URL}${url}`, {headers: authHeader()})
    }

    createPost(published, postDate, title,
               // title2,
               subtitle1, description1,
               // subtitle2, description2, subtitle3, description3,
               quote1, quoter1,
               // quote2, quoter2,
               category) {
        return axios.post(
            `${API_URL}`,
            {
                published, postDate, title,
                // title2,
                subtitle1, description1,
                // subtitle2, description2, subtitle3, description3,
                quote1, quoter1,
                // quote2, quoter2,
                category
            },
            {headers: authHeader()}
        );
    }

    updatePost(_id, published, postDate, title,
               // title2,
               subtitle1, description1,
               // subtitle2, description2, subtitle3, description3,
               quote1, quoter1,
               // quote2, quoter2,
               category) {
        return axios.put(
            `${API_URL}my/posts/${_id}`,
            {
                published, postDate, title,
                // title2,
                subtitle1, description1,
                // subtitle2, description2, subtitle3, description3,
                quote1, quoter1,
                // quote2, quoter2,
                category
            },
            {headers: authHeader()}
        );
    }

    deletePost(_id) {
        return axios.delete(`${API_URL}my/posts/${_id}`, {headers: authHeader()})
    }
}

export default new PostService();
