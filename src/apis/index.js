import axios from 'axios'

export default () => {
    let headers = {
    };
    let accessToken = localStorage.getItem('access_token');

    if (accessToken && accessToken !== '') {
        headers.Authorization = accessToken;

    }
    const instance = axios.create(
        {
            baseURL: process.env.VUE_APP_API || "http://localhost:2000/",
            headers: headers
        }
    )
    return instance;
}