import axios from 'axios';

axios.interceptors.response.use(null, err => {
    const exceptionError =
        err.response && err.response.status >= 400 && err.response.status < 500;
    if (!exceptionError) {
        alert('something went wrong');
        window.location = '/';
    }
    return Promise.reject(err);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};
