import axios from 'axios';

import * as c from '../constants';
import {AsyncStorage} from "react-native";
import {TOKEN_KEY} from "../provider";

export async function register(data) {
    try {
        let res = await axios.post(c.REGISTER, data);

        return res.data;
    } catch (e) {
        throw handler(e)
    }
}

export async function login(data) {
    try {
        let res = await axios.post(c.LOGIN, data);

        return res.data;
    } catch (e) {
        throw handler(e);
    }
}

export async function updatePassword(data) {
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

            let res = await axios.put(`${c.UPDATE_PASSWORD}`, form_data, options);
            return res.data;
        } catch (e) {
            return new Error(e)
        }
    } catch (e) {
        throw handler(e);
    }
}

export async function updateInfo(userId, data) {
    try {
        const options = {
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data"
            }
        };

        const form_data = new FormData();
        for (let key in data)
            form_data.append(key, data[key]);

        let res = await axios.put(`${c.UPDATE_INFO}`, form_data, options);
        return res.data;
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
