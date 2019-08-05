import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'; //toSetBaseURL
axios.defaults.headers.common['Authorization'] = 'AUTH-TOKEN12345'; // to send Auth token in header
axios.defaults.headers.post['Content-Type'] = 'application/json'; // cofiguring to specific type of requests

const reqInterceptor = axios.interceptors.request.use(req =>{
    console.log('InterceptorsRequestSuccess - ',req);
    return req;
}, error => {
    console.log('InterceptorsRequestError - ',error);
    return Promise.reject(error); //need to reject to be able to handle them in catch block locally
})

axios.interceptors.request.eject(reqInterceptor); // methos to delete a interceptor

axios.interceptors.response.use(res =>{
    console.log('InterceptorsResponseSuccess - ',res);
    return res;
}, error => {
    console.log('InterceptorsResponseError - ',error);
    return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
