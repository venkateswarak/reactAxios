import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(req =>{
    console.log('InterceptorsRequestSuccess - ',req);
    return req;
}, error => {
    console.log('InterceptorsRequestError - ',error);
    return Promise.reject(error); //need to reject to be able to handle them in catch block locally
})

axios.interceptors.response.use(res =>{
    console.log('InterceptorsResponseSuccess - ',res);
    return res;
}, error => {
    console.log('InterceptorsResponseError - ',error);
    return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
