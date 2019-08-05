import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

instance.defaults.headers.common['Authorization'] = 'AUTH-TOKEN12345INSTANCE'; // to send Auth token in header
instance.defaults.headers.post['Content-Type'] = 'application/json'; // cofiguring to specific type of requests


export default instance
