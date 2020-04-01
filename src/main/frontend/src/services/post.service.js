import axios from 'axios';
import authHeader from "./auth/auth-header";

const API_URL = 'http://localhost:8080/api/posts/';

class PostService {
    getPosts(url) {
        return axios.get(`${API_URL}${url}`, { headers: authHeader()});
    }

    getPost(url) {
        return axios.get(`${API_URL}${url}`, { headers: authHeader()})
    }
}

export default new PostService();
