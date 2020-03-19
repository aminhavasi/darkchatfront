import httpService from './httpService';
import config from './../config.json';
export function login(email, password) {
    return httpService.post(config.login_api, { email, password });
}
