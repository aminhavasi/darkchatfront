import httpService from './httpService';
import config from './../config.json';
export function login(email, password) {
    return httpService.post(`${config.auth}/login`, { email, password });
}
export function register(username, email, password) {
    return httpService.post(`${config.auth}/register`, {
        username,
        email,
        password
    });
}
