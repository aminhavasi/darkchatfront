import httpService from './httpService';
import config from './../config.json';
export async function login(email, password) {
    return await httpService.post(`${config.auth}/login`, {
        email,
        password
    });
}
export function register(username, email, password) {
    return httpService.post(`${config.auth}/register`, {
        username,
        email,
        password
    });
}
