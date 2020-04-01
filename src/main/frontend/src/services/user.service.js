import axios from 'axios';
import authHeader from './auth/auth-header';

const API_URL = 'http://localhost:8080/api/';

class UserService {
    getUser(username) {
        return axios.get(`${API_URL}users/username=${username}`, { headers: authHeader() });
    }

    // getPublicContent() {
    //     return axios.get(API_URL + 'test/all');
    // }
    //
    // getUserBoard() {
    //     return axios.get(API_URL + 'test/user', { headers: authHeader() });
    // }
    //
    // getModeratorBoard() {
    //     return axios.get(API_URL + 'test/mod', { headers: authHeader() });
    // }
    //
    // getAdminBoard() {
    //     return axios.get(API_URL + 'test/admin', { headers: authHeader() });
    // }
}

export default new UserService();
