import axios from 'axios'

const API_URL = 'http://localhost:8080';


class ListingsDataService {

    retrieveAllListings(kwargs) {
        let extraArgs = '';
        if (kwargs) {
            for (const kwarg in kwargs) {
                extraArgs += `?${kwarg}=${kwargs[kwarg]}`;
            }
        }
        return axios.get(`${API_URL}/listings_and_reviews${extraArgs}`);
    }
}

export default new ListingsDataService()
