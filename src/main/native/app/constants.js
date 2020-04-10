import React from 'react';

//API URL
export const API_URL = 'http://localhost:8080/api';

//API End Points
export const REGISTER = `${API_URL}/auth/signup`;
export const LOGIN = `${API_URL}/auth/signin`;
export const UPDATE_INFO = `${API_URL}/users/update/info/`;
export const UPDATE_PASSWORD = `${API_URL}/users/update/password/`;
// export const UPLOAD_IMAGE = `${API_URL}/user/upload`;
// export const FORGOT_PASSWORD = `${API_URL}/auth/recover`;